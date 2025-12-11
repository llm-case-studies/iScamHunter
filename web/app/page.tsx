import Image from "next/image";
import Link from "next/link";

/*
 * CF Color Palette:
 * - Primary button: rgb(239, 199, 36) - Gold
 * - Background light: rgb(220, 229, 197) - Sage green  
 * - Background dark: rgb(21, 21, 23) - Near black
 * - Accent blue: rgb(22, 122, 198)
 * - Quote bg: rgb(252, 248, 227) - Cream
 * - White: rgb(255, 255, 255)
 */

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#DCE5C5' }}>
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-64 h-20">
            <Image
              src="/assets/logo/Logo_Draft_With_Transparency.svg"
              alt="Scam Hunters Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
          <Link href="#story" className="text-gray-800 hover:text-blue-600 transition-colors">Our Story</Link>
          <Link href="#how" className="text-gray-800 hover:text-blue-600 transition-colors">How It Works</Link>
          <Link
            href="#join"
            className="px-6 py-2 font-bold transition-all rounded"
            style={{ backgroundColor: '#EFC724', color: '#151517' }}
          >
            Join the Hunt
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-700 font-medium tracking-widest uppercase mb-4">First Wave Operations</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900">
              Hunt Scams. <span style={{ color: '#167AC6' }}>Stay Cool.</span>
            </h1>
            <p className="text-xl text-blue-700 font-semibold mb-4">
              Join the First Wave of Scam Hunters.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Scam Hunters isn&apos;t a product you buy — it&apos;s a movement you join.
              Every desk. Every device. Every home.
            </p>
            <Link
              href="#join"
              className="inline-block px-8 py-4 text-lg font-bold rounded shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#EFC724', color: '#151517' }}
            >
              Get Your Desk Mat →
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/7f92aed6f73662cb14329d1cd63860be.png"
              alt="Scam Hunters Desk Mat"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>

      {/* Origin Story */}
      <section id="story" className="py-20" style={{ backgroundColor: '#FCFCFC' }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Join the Hunt: How a Simple Desk Mat Became My Weapon Against Scammers
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  When scams started creeping into my family, hitting my <strong className="text-blue-700">Grandma</strong> first,
                  I made a promise: No more easy victims. No more helplessness. <em>The hunt was on.</em>
                </p>
                <p>
                  At first, it was just raw anger — frustration pouring over cluttered screens and endless warnings.
                  But real hunters don&apos;t chase in panic. They stay sharp. They stay cool.
                  They make the scammers run.
                </p>
                <p>
                  That&apos;s when I realized: every device, every desk, every phone in our homes could become part of the defense.
                  Not just shields — <strong className="text-blue-700">launchpads</strong>.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/09d6823e0427637d88744b69a3edadb4.png"
                alt="Desk Mat in Action"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Quote Block */}
          <div
            className="mt-12 p-8 rounded-lg text-center"
            style={{ backgroundColor: '#FCF8E3', border: '2px dashed #EBD97A' }}
          >
            <p className="text-2xl font-bold text-gray-900 leading-relaxed">
              &ldquo;We are the first wave.<br />
              We don&apos;t wait for heroes.<br />
              We become the hunters.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* What Is Scam Hunters */}
      <section className="py-20" style={{ backgroundColor: '#DCE5C5' }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What Is Scam Hunters?</h2>
          <p className="text-xl font-semibold mb-4" style={{ color: '#167AC6' }}>
            Scam Hunters isn&apos;t a product you buy — It&apos;s a movement you join.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our first symbol is the Scam Hunters Desk Mat — a daily reminder that vigilance matters.
            Together, we&apos;re building a new kind of defense: A growing community of everyday protectors,
            simple home-based detection tools, and smarter scam-tracking networks.
          </p>
          <p className="text-lg font-bold" style={{ color: '#167AC6' }}>
            Save your grandma. Hunt the scam down. Stay cool.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20" style={{ backgroundColor: '#FCFCFC' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">How Does It Work?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div>
              <Image
                src="/assets/images/679dbce771eb2bc512606657e255c63b.png"
                alt="Scam Hunting Process"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                It&apos;s surprisingly simple. <strong>No &ldquo;spy games.&rdquo; No danger. No heroics.</strong>
              </p>
              <p>
                At Scam Hunters, we don&apos;t infiltrate. We just show up — and stay alert.
              </p>
              <p>
                By acting like distracted, slow-moving targets, we stayed close enough to observe what scammers were doing —
                without rushing into their traps. With simple WHOIS lookups and reading between the lines, we uncovered their schemes.
              </p>
              <p className="font-bold" style={{ color: '#167AC6' }}>
                When they can&apos;t tell if their next &ldquo;student&rdquo; is a Scam Hunter... The game ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Examples */}
      <section className="py-20" style={{ backgroundColor: '#DCE5C5' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Where Will You Need Scam Hunters Most?</h2>
          <p className="text-center text-gray-600 mb-12">Real scams. Real threats. Stay alert.</p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/images/a598173c8acd6a5b56ad2da00f5ba1f6.png" alt="WhatsApp Job Scam" width={300} height={200} className="w-full h-48 object-cover" />
              <p className="p-3 text-sm text-gray-700 font-medium">WhatsApp Job Offers</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/images/119cc4e34fadd8f420973d88e1f7d8ea.png" alt="Wealth Academy Scam" width={300} height={200} className="w-full h-48 object-cover" />
              <p className="p-3 text-sm text-gray-700 font-medium">Wealth Academy Scams</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/images/cac9da659bf19438bdb474077601bb36.png" alt="Telegram Investment" width={300} height={200} className="w-full h-48 object-cover" />
              <p className="p-3 text-sm text-gray-700 font-medium">Telegram Investment</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/images/eeda636db097a79e931e6fc94182d9b8.png" alt="SMS USPTO Scam" width={300} height={200} className="w-full h-48 object-cover" />
              <p className="p-3 text-sm text-gray-700 font-medium">SMS USPTO Impersonation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Hunters Benefits */}
      <section className="py-20" style={{ backgroundColor: '#FCFCFC' }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Scam Hunters is growing — and you&apos;re invited.
          </h2>
          <p className="text-gray-600 mb-8">
            Early Hunters will be the first to test upcoming tools:
          </p>
          <div
            className="p-8 rounded-lg inline-block"
            style={{ backgroundColor: '#FCF8E3', border: '2px dashed #EBD97A' }}
          >
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-green-600">✓</span> Scam analysis devices 🔍
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600">✓</span> Home detection kits 🛡️
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600">✓</span> Private training missions 🕵️
              </li>
            </ul>
            <p className="mt-4 font-bold text-gray-900">Stay ahead. Stay cool. Stay part of the first wave.</p>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16" style={{ backgroundColor: '#DCE5C5' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/mbseal.png"
                alt="Money Back Guarantee"
                width={120}
                height={120}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                You&apos;re Covered By A No-Hassle &ldquo;It Works, Or It&apos;s FREE&rdquo; 60 Day, Money Back Guarantee!
              </h3>
              <p className="text-gray-600">
                If for any reason you are not satisfied with your order, return it within 60 days for a full refund.
                We&apos;re confident you&apos;ll LOVE it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-20" style={{ backgroundColor: '#EFC724' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Save your grandma. Hunt the scam down. Stay cool.
          </h2>
          <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
            Get the Scam Hunters Desk Mat — your daily reminder that vigilance matters.
          </p>
          <div className="flex justify-center items-center gap-6 mb-8">
            <Image
              src="/assets/images/767b181dd4a62db6e1179bc63a422774.png"
              alt="Desk Mat Product"
              width={200}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </div>
          <Link
            href="https://iscamhunter.com/store"
            className="inline-block px-10 py-5 text-xl font-bold rounded-lg transition-all shadow-xl hover:scale-105"
            style={{ backgroundColor: '#151517', color: '#EFC724' }}
          >
            Get Your Desk Mat Now →
          </Link>
          <p className="text-gray-800 text-sm mt-4">60-Day Money-Back Guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#151517' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-40 h-12">
                <Image
                  src="/assets/logo/Logo_Draft_With_Transparency.svg"
                  alt="Scam Hunters"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Scam Hunters™. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-500">
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
