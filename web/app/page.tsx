import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-48 h-16">
            <Image
              src="/assets/logo/Logo_Draft_With_Transparency.svg"
              alt="Scam Hunters Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
          <Link href="#story" className="hover:text-amber-400 transition-colors">Our Story</Link>
          <Link href="#how" className="hover:text-amber-400 transition-colors">How It Works</Link>
          <Link href="#join" className="px-4 py-2 bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all rounded">
            Join the Hunt
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-amber-500 font-medium tracking-widest uppercase mb-4">First Wave Operations</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Hunt Scams. <span className="text-amber-400">Stay Cool.</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-300 font-semibold mb-4">
            Join the First Wave of Scam Hunters.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Scam Hunters isn&apos;t a product you buy — it&apos;s a movement you join.
            Every desk. Every device. Every home. One scammer at a time.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="#join" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black text-lg font-bold rounded shadow-lg shadow-amber-900/30 transition-all">
              Get Your Desk Mat
            </Link>
            <Link href="#story" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-lg font-bold rounded transition-all border border-slate-700">
              Read Our Story
            </Link>
          </div>
        </div>
      </main>

      {/* Origin Story */}
      <section id="story" className="bg-slate-900/50 py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Join the Hunt: How a Simple Desk Mat Became My Weapon Against Scammers
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300 leading-relaxed space-y-6">
            <p>
              When scams started creeping into my family, hitting my <strong className="text-amber-400">Grandma</strong> first,
              I made a promise: No more easy victims. No more helplessness. <em>The hunt was on.</em>
            </p>
            <p>
              At first, it was just raw anger — frustration pouring over cluttered screens and endless warnings.
              But real hunters don&apos;t chase in panic. They stay sharp. They stay cool.
              They make the scammers run.
            </p>
            <p>
              That&apos;s when I realized: every device, every desk, every phone in our homes could become part of the defense.
              Not just shields — <strong className="text-amber-400">launchpads</strong>.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-4 bg-slate-800/50 rounded-r-lg my-8 not-italic">
              <p className="text-xl font-semibold text-white mb-2">&ldquo;I am not prey. I&apos;m the hunter.&rdquo;</p>
              <p className="text-slate-400 text-sm">Every time my hands touch the surface, it&apos;s a silent vow.</p>
            </blockquote>
            <p>
              Today, the fight is everywhere — across devices, across generations.
              Grandma and Grandpa are no longer easy marks.
              <strong className="text-amber-400"> The wild west days of lawlessness are over.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Movement Pitch */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Scam Hunters the #1 Movement in America?</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl font-bold text-amber-400 leading-relaxed">
              &ldquo;We are the first wave.<br />
              We don&apos;t wait for heroes.<br />
              We become the hunters.&rdquo;
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-slate-300 leading-relaxed space-y-4 text-lg">
            <p>
              Simple: <strong className="text-white">We are the first.</strong>
              We don&apos;t claim to be the biggest. We don&apos;t claim to be the best.
              But we are here — and we are taking action.
            </p>
            <p>
              Throughout history, communities have risen up to face threats: Crime. Fires. Floods. Droughts.
              Ordinary people banded together and fought back — not with big institutions, but with grit, loyalty, and courage.
            </p>
            <p className="text-amber-400 font-semibold">
              Scams are the wildfire of our time. And we&apos;re not waiting for someone else to stop them.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-slate-900/50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How Does It Work?</h2>
          <div className="max-w-3xl mx-auto text-slate-300 space-y-6 text-lg leading-relaxed">
            <p>
              It&apos;s surprisingly simple. <strong className="text-white">No &ldquo;spy games.&rdquo; No danger. No heroics.</strong>
            </p>
            <p>
              At Scam Hunters, we don&apos;t infiltrate. We just show up — and stay alert.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 my-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">📋 Case Study: Mobomo.xyz Takedown</h3>
              <p className="text-slate-400">
                Scammers set up a fake site impersonating the real company Mobomo.
                We signed up, played along as &ldquo;slow students,&rdquo; documented everything with basic WHOIS lookups —
                and watched them collapse under their own weight. They gave up and abandoned the operation.
              </p>
            </div>
            <p>
              There&apos;s no way to catch scammers one by one.
              But when they start seeing shadows in every group...
              When they can&apos;t tell if their next &ldquo;student&rdquo; is a Scam Hunter...
            </p>
            <p className="text-amber-400 font-bold text-xl">The game ends.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Scam Hunters is growing — and you&apos;re invited.
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Early Hunters will be the first to test upcoming tools:
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <BenefitCard icon="🔍" title="Scam Analysis Devices" />
            <BenefitCard icon="🛡️" title="Home Detection Kits" />
            <BenefitCard icon="🕵️" title="Private Training Missions" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="bg-gradient-to-r from-amber-600 to-amber-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Save your grandma. Hunt the scam down. Stay cool.
          </h2>
          <p className="text-amber-900 text-lg mb-8 max-w-xl mx-auto">
            Get the Scam Hunters Desk Mat — your daily reminder that vigilance matters.
          </p>
          <Link
            href="https://iscamhunter.com/store"
            className="inline-block px-10 py-5 bg-black text-amber-400 text-xl font-bold rounded-lg hover:bg-slate-900 transition-all shadow-xl"
          >
            Get Your Desk Mat →
          </Link>
          <p className="text-amber-800 text-sm mt-4">60-Day Money-Back Guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-32 h-10">
                <Image
                  src="/assets/logo/Logo_Draft_With_Transparency.svg"
                  alt="Scam Hunters"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Scam Hunters™. All rights reserved.
            </p>
            <div className="flex gap-4 text-slate-500">
              <Link href="#" className="hover:text-amber-400 transition-colors">About</Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">Blog</Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-500/40 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-amber-400">{title}</h3>
    </div>
  );
}
