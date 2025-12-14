'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MeetLLM from "./components/MeetLLM";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'story', label: 'Our Story' },
    { id: 'movement', label: 'The Movement' },
    { id: 'how', label: 'How It Works' },
    { id: 'proof', label: 'Results' },
    { id: 'join', label: 'Join' },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Scroll-based section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(s => s.id === entry.target.id);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: '#0a0a0b' }}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: '#EFC724' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: '#167AC6', animationDelay: '1s' }}
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/10" style={{ backgroundColor: 'rgba(10,10,11,0.8)' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="relative w-40 h-12">
            <Image
              src="/assets/logo/variants/logo_white.svg"
              alt="Scam Hunters"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex gap-1">
            {sections.map((section, i) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === i
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {section.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Link
              href="/products"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all"
            >
              Armory
            </Link>
            <Link
              href="/checkout"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all"
            >
              Shop
            </Link>
            <Link
              href="/lab"
              className="px-4 py-2 rounded-full text-sm font-medium text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 transition-all border border-amber-500/20"
            >
              The Lab 🧬
            </Link>
          </div>
          <Link
            href="#join"
            className="px-6 py-2 font-bold rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: '#EFC724', color: '#0a0a0b' }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero - Full Screen */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(239,199,36,0.2)', color: '#EFC724' }}
            >
              🎯 First Wave Operations
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="text-white">Hunt Scams.</span>
              <br />
              <span style={{ color: '#EFC724' }}>Stay Cool.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the first grassroots movement to hunt scams down,
              protect families, and reclaim the internet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#join"
                className="group px-8 py-4 text-lg font-bold rounded-full transition-all hover:scale-105 flex items-center gap-2"
                style={{ backgroundColor: '#EFC724', color: '#0a0a0b' }}
              >
                Join the Hunt
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="#story"
                className="px-8 py-4 text-lg font-medium rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                Read the Story
              </Link>
            </div>

            {/* Floating Product Preview */}
            <div className="mt-16 relative">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                style={{ backgroundColor: '#EFC724' }}
              />
              <Image
                src="/assets/images/7f92aed6f73662cb14329d1cd63860be.png"
                alt="Scam Hunters Desk Mat"
                width={500}
                height={300}
                className="relative mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Story Section - Card Based */}
      <section id="story" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#EFC724' }}>
                The Origin
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                When they hit<br />my Grandma first
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I made a promise: <span className="text-white font-semibold">No more easy victims.</span>
                </p>
                <p>
                  Real hunters don&apos;t chase in panic. They stay sharp. They stay cool.
                  They make the scammers run.
                </p>
                <p>
                  Every device, every desk, every phone became part of the defense.
                  <span className="font-semibold" style={{ color: '#EFC724' }}> Not shields — launchpads.</span>
                </p>
              </div>
            </div>

            {/* Story Card */}
            <div
              className="relative p-8 rounded-3xl border border-white/10"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <Image
                src="/assets/images/09d6823e0427637d88744b69a3edadb4.png"
                alt="The Hunt Begins"
                width={400}
                height={300}
                className="rounded-2xl w-full"
              />
              <div className="mt-6 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(239,199,36,0.1)' }}>
                <p className="text-xl font-bold text-white italic">
                  &ldquo;I am not prey. I&apos;m the hunter.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movement Section - Stats/Cards */}
      <section id="movement" className="py-32" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#EFC724' }}>
              The Movement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              We are the first wave
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <MovementCard
              icon="🛡️"
              title="Community Defense"
              description="A growing network of everyday protectors across homes and devices"
            />
            <MovementCard
              icon="🔍"
              title="Smart Detection"
              description="Simple home-based tools to identify and document scam operations"
            />
            <MovementCard
              icon="⚡"
              title="Rapid Response"
              description="Track, disrupt, and dismantle scam networks before they spread"
            />
          </div>

          <div className="max-w-md mx-auto mt-16">
            <MeetLLM />
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <blockquote
              className="text-2xl md:text-3xl font-bold text-white leading-relaxed p-8 rounded-3xl border"
              style={{ borderColor: 'rgba(239,199,36,0.3)', backgroundColor: 'rgba(239,199,36,0.05)' }}
            >
              &ldquo;We don&apos;t wait for heroes.<br />
              We become the hunters.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works - Interactive */}
      <section id="how" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#EFC724' }}>
              The Method
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Surprisingly simple
            </h2>
            <p className="text-gray-400 text-xl mt-4">
              No spy games. No danger. No heroics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <Step number="01" title="Show up & observe">
                We don&apos;t infiltrate. We just stay alert and document what we see.
              </Step>
              <Step number="02" title="Research openly">
                Simple WHOIS lookups, domain checks, reading between the lines.
              </Step>
              <Step number="03" title="Outlast them">
                When they can&apos;t tell who&apos;s a Scam Hunter... the game ends.
              </Step>
            </div>

            <div className="relative">
              <Image
                src="/assets/images/679dbce771eb2bc512606657e255c63b.png"
                alt="How It Works"
                width={500}
                height={400}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section - Scam Examples Grid */}
      <section id="proof" className="py-32" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-widest uppercase text-red-400">
              Real Threats
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Where they lurk
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ScamCard
              image="/assets/images/a598173c8acd6a5b56ad2da00f5ba1f6.png"
              label="WhatsApp"
              type="Job Scam"
            />
            <ScamCard
              image="/assets/images/119cc4e34fadd8f420973d88e1f7d8ea.png"
              label="Telegram"
              type="Wealth Academy"
            />
            <ScamCard
              image="/assets/images/cac9da659bf19438bdb474077601bb36.png"
              label="Telegram"
              type="Investment Fraud"
            />
            <ScamCard
              image="/assets/images/eeda636db097a79e931e6fc94182d9b8.png"
              label="SMS"
              type="USPTO Impersonation"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, #EFC724 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to hunt?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
              Get your desk mat — the daily reminder that vigilance matters.
              60-day money-back guarantee.
            </p>

            <div className="relative inline-block mb-8">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                style={{ backgroundColor: '#EFC724' }}
              />
              <Image
                src="/assets/images/767b181dd4a62db6e1179bc63a422774.png"
                alt="Desk Mat"
                width={250}
                height={180}
                className="relative rounded-xl"
              />
            </div>

            <div>
              <Link
                href="/checkout"
                className="inline-block px-12 py-5 text-xl font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#EFC724', color: '#0a0a0b' }}
              >
                Get Your Desk Mat →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="relative w-32 h-10">
              <Image
                src="/assets/logo/variants/logo_white.svg"
                alt="Scam Hunters"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Scam Hunters™
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <Link href="#" className="hover:text-white transition-colors">About</Link>
              <Link href="#" className="hover:text-white transition-colors">Blog</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MovementCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div
      className="p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all group"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6 items-start p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
      <span
        className="text-3xl font-black shrink-0"
        style={{ color: '#EFC724' }}
      >
        {number}
      </span>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{children}</p>
      </div>
    </div>
  );
}

function ScamCard({ image, label, type }: { image: string; label: string; type: string }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all">
      <Image
        src={image}
        alt={type}
        width={300}
        height={200}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-xs font-bold text-red-400">{label}</span>
        <p className="text-white font-semibold">{type}</p>
      </div>
    </div>
  );
}
