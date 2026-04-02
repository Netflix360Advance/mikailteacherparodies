/* ============================================================
   HOME PAGE — "Late Bell" Pop-Art Design
   Sections: Nav, Hero, About, Videos, NexTeach, Community, Footer
   Colors: Electric Yellow (#FFEB3B equiv) + Deep Navy + Vivid Red
   Fonts: Bangers (display) + DM Sans (body) + Permanent Marker (accents)
   ============================================================ */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import NewsletterSignup from "@/components/NewsletterSignup";

// CDN Asset URLs
const PROFILE_PIC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499540751/jKJ2RCM3gw5fmeXiWvA6fa/mikail_profile_pic_00d8fbe6.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499540751/jKJ2RCM3gw5fmeXiWvA6fa/hero_bg-BwqhUkUoqBKQNWoGvbofA3.webp";
const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499540751/jKJ2RCM3gw5fmeXiWvA6fa/about_bg-9rw8S3fuB2fuaHVkx76Z2K.webp";
const COMMUNITY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499540751/jKJ2RCM3gw5fmeXiWvA6fa/community_bg-Qzn84uiXuAUJVAUgzxL2m7.webp";

// YouTube video IDs from the channel
const VIDEOS = [
  { id: "drd6x6GVMEY", title: "Recorded for my future teacher self", views: "New" },
  { id: "C5h4gZLRDzc", title: "Welcome to teacher parody week", views: "New" },
  { id: "0soA7vpejls", title: "Teaching worldwide be like...", views: "New" },
  { id: "e1RcjcAVX3w", title: "Teachers: Have you met this student?", views: "New" },
  { id: "PrDyaMrZZKs", title: "Teacher survival kit Feat. Miss Luna", views: "New" },
  { id: "PpTZRN3sOHM", title: "Teacher reactions...", views: "New" },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[oklch(0.18_0.06_255)] border-b-4 border-[oklch(0.12_0.03_255)]">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={PROFILE_PIC}
            alt="Mikail Teacher Parodies"
            className="w-10 h-10 rounded-full border-2 border-[oklch(0.92_0.18_95)] object-cover"
          />
          <span className="font-bangers text-[oklch(0.92_0.18_95)] text-2xl tracking-wide leading-none">
            Mikail<br />
            <span className="text-white text-lg">Teacher Parodies</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {["About", "Videos", "NexTeach 360", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-").replace("360", "360")}`}
              className="font-bangers text-white text-lg tracking-wide hover:text-[oklch(0.92_0.18_95)] transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.instagram.com/mikail_teacher_parodies"
            target="_blank"
            rel="noopener noreferrer"
            className="pop-btn bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] px-5 py-2 rounded-sm"
          >
            Follow Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.18_0.06_255)] border-t-2 border-[oklch(0.92_0.18_95)] px-4 py-4 flex flex-col gap-4">
          {["About", "Videos", "NexTeach 360", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-bangers text-white text-xl tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.instagram.com/mikail_teacher_parodies"
            target="_blank"
            rel="noopener noreferrer"
            className="pop-btn bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] px-5 py-2 rounded-sm text-center"
          >
            Follow Me
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[oklch(0.92_0.18_95)] overflow-hidden flex items-center">
      {/* Halftone pattern overlay */}
      <div className="absolute inset-0 halftone-bg opacity-40 pointer-events-none" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center py-16">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Comic-style badge */}
            <div className="inline-block bg-[oklch(0.55_0.22_25)] text-white font-bangers text-sm px-3 py-1 comic-border mb-4 rotate-[-2deg]">
              15 YEARS IN THE TRENCHES
            </div>

            <h1 className="font-bangers text-[oklch(0.12_0.03_255)] leading-none mb-4">
              <span className="block text-6xl md:text-8xl">WHAT</span>
              <span className="block text-6xl md:text-8xl">TEACHERS</span>
              <span className="block text-6xl md:text-8xl text-[oklch(0.18_0.06_255)]">REALLY</span>
              <span className="block text-6xl md:text-8xl">DEAL WITH</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {["AI", "Comedy", "Reality", "Survival"].map((tag) => (
                <span
                  key={tag}
                  className="font-bangers text-lg bg-[oklch(0.18_0.06_255)] text-[oklch(0.92_0.18_95)] px-3 py-1 comic-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-marker text-[oklch(0.18_0.06_255)] text-xl mb-8 leading-relaxed">
              Living proof you don't have to grade on Sundays.
              <br />
              Join the "Leave at 3PM" club!
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.instagram.com/mikail_teacher_parodies"
                target="_blank"
                rel="noopener noreferrer"
                className="pop-btn bg-[oklch(0.18_0.06_255)] text-[oklch(0.92_0.18_95)] px-8 py-3 rounded-sm inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@mikailteacherparodies"
                target="_blank"
                rel="noopener noreferrer"
                className="pop-btn bg-[oklch(0.55_0.22_25)] text-white px-8 py-3 rounded-sm inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="comic-border-lg rounded-sm overflow-hidden bg-white">
            <img
              src={HERO_BG}
              alt="Teacher Parodies Comedy"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-[oklch(0.55_0.22_25)] text-white font-bangers text-2xl px-4 py-2 comic-border rotate-6 z-10">
            COMEDY!
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white font-marker text-[oklch(0.18_0.06_255)] text-sm px-3 py-2 comic-border -rotate-3 z-10">
            Mikail Cabezas
          </div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 45L120 55L180 40L240 50L300 35L360 48L420 30L480 45L540 25L600 42L660 20L720 38L780 15L840 35L900 18L960 40L1020 22L1080 42L1140 28L1200 45L1260 32L1320 50L1380 38L1440 55V60H0Z" fill="oklch(0.98 0.01 90)"/>
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[oklch(0.98_0.01_90)]">
      <div className="container">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="comic-border-lg rounded-sm overflow-hidden">
                <img
                  src={ABOUT_BG}
                  alt="Teacher Life"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[oklch(0.92_0.18_95)] comic-border rounded-full flex items-center justify-center z-10">
                <span className="font-bangers text-[oklch(0.12_0.03_255)] text-center text-sm leading-tight">15<br/>YEARS</span>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div className="inline-block bg-[oklch(0.92_0.18_95)] font-bangers text-sm px-3 py-1 comic-border mb-4">
                ABOUT MIKAIL
              </div>
              <h2 className="font-bangers text-[oklch(0.18_0.06_255)] text-5xl md:text-6xl leading-none mb-6">
                THE TEACHER<br />
                <span className="text-[oklch(0.55_0.22_25)]">BEHIND THE</span><br />
                PARODIES
              </h2>
              <p className="text-[oklch(0.18_0.06_255)] text-lg mb-4 leading-relaxed">
                Mikail Cabezas is a real teacher with 15 years of classroom experience — and a camera. He turns the everyday chaos, absurdity, and heart of teaching into comedy content that resonates with educators worldwide.
              </p>
              <p className="text-[oklch(0.18_0.06_255)] text-lg mb-6 leading-relaxed">
                From the substitute teacher who can't pronounce names, to the student who "definitely wasn't sleeping," Mikail captures what teachers really deal with — AI, comedy, reality, and survival.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Years Teaching", value: "15+" },
                  { label: "Videos Made", value: "50+" },
                  { label: "Teachers Reached", value: "10K+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[oklch(0.18_0.06_255)] text-white p-4 comic-border text-center">
                    <div className="font-bangers text-[oklch(0.92_0.18_95)] text-3xl">{stat.value}</div>
                    <div className="font-['DM_Sans'] text-xs text-[oklch(0.7_0.04_255)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function VideosSection() {
  return (
    <section id="videos" className="py-20 bg-[oklch(0.18_0.06_255)]">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-block bg-[oklch(0.55_0.22_25)] text-white font-bangers text-sm px-3 py-1 comic-border mb-4">
              LATEST CONTENT
            </div>
            <h2 className="font-bangers text-white text-5xl md:text-7xl leading-none">
              WATCH THE<br />
              <span className="text-[oklch(0.92_0.18_95)]">PARODIES</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/shorts/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="comic-border-lg bg-[oklch(0.12_0.03_255)] overflow-hidden rounded-sm">
                {/* YouTube Thumbnail */}
                <div className="relative aspect-video bg-[oklch(0.12_0.03_255)] overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                    }}
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-14 h-14 bg-[oklch(0.55_0.22_25)] rounded-full flex items-center justify-center comic-border group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Episode number badge */}
                  <div className="absolute top-2 left-2 bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] font-bangers text-sm px-2 py-0.5 comic-border">
                    #{index + 1}
                  </div>
                </div>
                {/* Title */}
                <div className="p-4">
                  <h3 className="font-bangers text-white text-lg leading-tight group-hover:text-[oklch(0.92_0.18_95)] transition-colors">
                    {video.title}
                  </h3>
                  <span className="text-[oklch(0.6_0.04_255)] text-sm mt-1 block">{video.views}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <a
            href="https://www.youtube.com/@mikailteacherparodies"
            target="_blank"
            rel="noopener noreferrer"
            className="pop-btn bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] px-10 py-4 rounded-sm inline-block font-bangers text-xl"
          >
            See All Videos on YouTube
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function NexTeachSection() {
  return (
    <section id="nexteach-360" className="py-20 bg-[oklch(0.92_0.18_95)] relative overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-block bg-[oklch(0.18_0.06_255)] text-[oklch(0.92_0.18_95)] font-bangers text-sm px-3 py-1 comic-border mb-4">
                ALSO FROM MIKAIL
              </div>
              <h2 className="font-bangers text-[oklch(0.12_0.03_255)] text-5xl md:text-6xl leading-none mb-6">
                NEXTEACH<br />
                <span className="text-[oklch(0.18_0.06_255)]">360</span>
              </h2>
              <p className="text-[oklch(0.18_0.06_255)] text-xl font-semibold mb-4">
                Education Technology SaaS Platform for Teachers
              </p>
              <p className="text-[oklch(0.18_0.06_255)] text-lg mb-6 leading-relaxed">
                NexTeach 360 is designed for real classrooms. The goal is to help teachers save time, increase engagement, and bring modern AI tools into everyday teaching.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Save time with AI-powered lesson planning",
                  "Increase student engagement with modern tools",
                  "Built by a real teacher, for real teachers",
                  "Designed for the actual classroom, not a boardroom",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[oklch(0.18_0.06_255)] text-[oklch(0.92_0.18_95)] font-bangers text-sm flex items-center justify-center comic-border flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-[oklch(0.18_0.06_255)]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://nexteach360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pop-btn bg-[oklch(0.18_0.06_255)] text-[oklch(0.92_0.18_95)] px-8 py-3 rounded-sm inline-block font-bangers text-xl"
              >
                Visit NexTeach 360
              </a>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🤖", title: "AI Tools", desc: "Modern AI for everyday classroom tasks" },
                { icon: "⏰", title: "Save Time", desc: "Stop grading on Sundays for good" },
                { icon: "🎯", title: "Engagement", desc: "Keep students hooked and learning" },
                { icon: "🏫", title: "Real Classrooms", desc: "Built from 15 years of experience" },
              ].map((feature) => (
                <div key={feature.title} className="bg-white comic-border p-5 rounded-sm">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-bangers text-[oklch(0.18_0.06_255)] text-xl mb-1">{feature.title}</h3>
                  <p className="text-[oklch(0.35_0.04_255)] text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-[oklch(0.98_0.01_90)] relative overflow-hidden">
      <div className="container">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-block bg-[oklch(0.55_0.22_25)] text-white font-bangers text-sm px-3 py-1 comic-border mb-4">
                JOIN THE CLUB
              </div>
              <h2 className="font-bangers text-[oklch(0.18_0.06_255)] text-5xl md:text-6xl leading-none mb-6">
                THE<br />
                <span className="text-[oklch(0.92_0.18_95)] [-webkit-text-stroke:2px_oklch(0.12_0.03_255)]">LEAVE AT</span><br />
                3PM CLUB
              </h2>
              <p className="text-[oklch(0.18_0.06_255)] text-lg mb-6 leading-relaxed">
                A community for teachers who are done sacrificing their evenings and weekends. Follow along on Instagram and YouTube for weekly parodies, relatable content, and actual tips for reclaiming your life outside the classroom.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <p className="font-bangers text-[oklch(0.18_0.06_255)] text-xl mb-4">GET WEEKLY PARODIES & TIPS</p>
                <NewsletterSignup variant="inline" />
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/mikail_teacher_parodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pop-btn bg-[oklch(0.18_0.06_255)] text-white px-6 py-3 rounded-sm inline-flex items-center gap-3 font-bangers text-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[oklch(0.92_0.18_95)]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@mikailteacherparodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pop-btn bg-[oklch(0.55_0.22_25)] text-white px-6 py-3 rounded-sm inline-flex items-center gap-3 font-bangers text-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>

            {/* Right: Community Image */}
            <div className="relative">
              <div className="comic-border-lg rounded-sm overflow-hidden">
                <img
                  src={COMMUNITY_BG}
                  alt="Teacher Community"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Speech bubble decoration */}
              <div className="absolute -top-6 -right-4 bg-white comic-border px-4 py-3 rounded-2xl max-w-[160px] z-10">
                <p className="font-marker text-[oklch(0.18_0.06_255)] text-sm leading-tight">
                  "Finally, someone gets it!"
                </p>
                <div className="absolute bottom-[-12px] left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[oklch(0.12_0.03_255)]"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.03_255)] border-t-4 border-[oklch(0.92_0.18_95)] py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={PROFILE_PIC}
                alt="Mikail Teacher Parodies"
                className="w-12 h-12 rounded-full border-2 border-[oklch(0.92_0.18_95)] object-cover"
              />
              <span className="font-bangers text-[oklch(0.92_0.18_95)] text-xl leading-tight">
                Mikail<br />
                <span className="text-white text-base">Teacher Parodies</span>
              </span>
            </div>
            <p className="text-[oklch(0.6_0.04_255)] text-sm leading-relaxed">
              Mikail Cabezas — 15 years in the trenches. Teacher, content creator, and founder of NexTeach 360.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bangers text-[oklch(0.92_0.18_95)] text-xl mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Videos", href: "#videos" },
                { label: "NexTeach 360", href: "#nexteach-360" },
                { label: "Community", href: "#community" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[oklch(0.6_0.04_255)] hover:text-[oklch(0.92_0.18_95)] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bangers text-[oklch(0.92_0.18_95)] text-xl mb-4">FOLLOW ALONG</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/mikail_teacher_parodies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[oklch(0.6_0.04_255)] hover:text-[oklch(0.92_0.18_95)] transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @mikail_teacher_parodies
              </a>
              <a
                href="https://www.youtube.com/@mikailteacherparodies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[oklch(0.6_0.04_255)] hover:text-[oklch(0.92_0.18_95)] transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                @mikailteacherparodies
              </a>
              <a
                href="https://nexteach360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[oklch(0.6_0.04_255)] hover:text-[oklch(0.92_0.18_95)] transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                nexteach360.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[oklch(0.25_0.04_255)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[oklch(0.5_0.03_255)] text-sm">
            © 2026 Mikail Teacher Parodies. All rights reserved.
          </p>
          <p className="font-marker text-[oklch(0.92_0.18_95)] text-sm">
            Made with love for teachers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideosSection />
      <NexTeachSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
