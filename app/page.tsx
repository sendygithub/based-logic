"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { Magnetic } from "@/components/animations/magnetic";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            style={{ y: y1, opacity }}
            className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px]"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[100px]"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 max-w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Logika.js 2026 Edition</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-4xl mx-auto">
            <h1 className="text-[5rem] md:text-[8rem] font-black tracking-tighter mb-6 leading-[0.9]">
              Master JS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">Algorithms.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
              Elevate your logic. Stop copying code and start understanding the core principles behind every solution with our interactive, Awwwards-winning learning experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Magnetic>
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-medium group shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] interactive" asChild>
                <Link href="/dashboard" className="flex items-center gap-2">
                  Start Learning
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-medium bg-background/50 backdrop-blur-md hover:bg-muted/50 transition-colors interactive" asChild>
                <Link href="#features">View Curriculum</Link>
              </Button>
            </Magnetic>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-[1px] h-12 bg-foreground/30" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative z-10 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <FadeIn>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Learn through <br />interaction.</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-xl text-muted-foreground">Traditional tutorials are boring. Our visual tools and interactive algorithm playground will wire your brain differently.</p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Button variant="ghost" className="rounded-full group interactive" asChild>
                <Link href="/dashboard" className="flex items-center gap-2 text-lg">
                  Explore all modules
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} fullWidth>
              <AnimatedCard>
                <div className="p-4 bg-primary/10 w-fit rounded-2xl mb-6 text-primary">
                  <Code2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Logic & Syntax</h3>
                <p className="text-muted-foreground flex-grow">Master the fundamental building blocks. Understand control flow, state management, and functional paradigms.</p>
              </AnimatedCard>
            </FadeIn>

            <FadeIn delay={0.2} fullWidth>
              <AnimatedCard>
                <div className="p-4 bg-secondary/10 w-fit rounded-2xl mb-6 text-secondary-foreground">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Data Search</h3>
                <p className="text-muted-foreground flex-grow">Implement binary search, linear search, and graph traversal algorithms with visual step-by-step debuggers.</p>
              </AnimatedCard>
            </FadeIn>

            <FadeIn delay={0.3} fullWidth>
              <AnimatedCard>
                <div className="p-4 bg-accent/10 w-fit rounded-2xl mb-6 text-accent-foreground">
                  <Layers size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Transformations</h3>
                <p className="text-muted-foreground flex-grow">Reduce, map, filter. Learn how data transforms through pipelines and practical real-world scenarios.</p>
              </AnimatedCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-24 bg-foreground text-background overflow-hidden skew-y-[-2deg] transform origin-left">
        <div className="skew-y-[2deg] flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-16 text-6xl md:text-8xl font-black uppercase tracking-tighter items-center"
          >
            <span>Algorithm</span>
            <span className="text-background/30">•</span>
            <span>Logic</span>
            <span className="text-background/30">•</span>
            <span>Patterns</span>
            <span className="text-background/30">•</span>
            <span>Performance</span>
            <span className="text-background/30">•</span>
            <span>Algorithm</span>
            <span className="text-background/30">•</span>
            <span>Logic</span>
            <span className="text-background/30">•</span>
            <span>Patterns</span>
            <span className="text-background/30">•</span>
            <span>Performance</span>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
