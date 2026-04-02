import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { subscribeToNewsletter, getAllSubscribers } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({ email: z.string().email("Invalid email address") }))
      .mutation(async ({ input }) => {
        try {
          const result = await subscribeToNewsletter(input.email, "website");
          return { success: true, message: "Welcome to the Leave at 3PM Club!", email: result.email };
        } catch (error) {
          if ((error as Error).message === "Email already subscribed") {
            throw new Error("You're already subscribed!");
          }
          throw new Error("Failed to subscribe. Please try again.");
        }
      }),
    getAll: publicProcedure.query(async () => {
      try {
        const subscribers = await getAllSubscribers();
        return subscribers;
      } catch (error) {
        console.error("Failed to get subscribers:", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
