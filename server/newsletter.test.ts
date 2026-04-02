import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type PublicContext = Omit<TrpcContext, "user"> & { user: null };

function createPublicContext(): PublicContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("newsletter.subscribe", () => {
  it("should successfully subscribe a valid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.subscribe({
      email: `teacher${Date.now()}@example.com`,
    });

    expect(result.success).toBe(true);
    expect(result.email).toContain("@example.com");
    expect(result.message).toContain("Welcome");
  });

  it("should reject invalid email addresses", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.newsletter.subscribe({
        email: "not-an-email",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect((error as Error).message).toContain("Invalid");
    }
  });

  it("should normalize email addresses to lowercase", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const testEmail = `TEACHER${Date.now()}@EXAMPLE.COM`;
    const result = await caller.newsletter.subscribe({
      email: testEmail,
    });

    expect(result.success).toBe(true);
    expect(result.email).toBe(testEmail.toLowerCase());
  });
});

describe("newsletter.getAll", () => {
  it("should return list of subscribers", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const subscribers = await caller.newsletter.getAll();

    expect(Array.isArray(subscribers)).toBe(true);
    expect(subscribers.length).toBeGreaterThanOrEqual(0);
  });

  it("should include subscription metadata in results", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const subscribers = await caller.newsletter.getAll();

    if (subscribers.length > 0) {
      const subscriber = subscribers[0];
      expect(subscriber.email).toBeDefined();
      expect(subscriber.subscribedAt).toBeInstanceOf(Date);
      expect(subscriber.source).toBe("website");
    }
  });
});
