
"use client";

import React, { useEffect, useState } from "react";
import {
  Shield,
  Check,
  ChevronDown,
  Apple,
  AlertTriangle,
  Zap,
  Lock,
  Users,
  Brain,
  Eye,
  Star,
  ArrowRight,
  Quote,
  CheckCircle2,
  Menu,
  X,
  ShieldCheck,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Activity
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SCENARIOS, PLANS, TESTIMONIALS } from "./constants";
import Image from "next/image";

export default function FraudShieldLanding() {
  const [solid, setSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white selection:bg-cyan-500/30 overflow-x-hidden font-inter">
      {/* Animated Background Layers */}
      <div className="neural-blob pointer-events-none fixed -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px]"
/>

    <div className="neural-blob pointer-events-none fixed bottom-[-300px] right-[-300px] w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[160px]"
/>
      
      
      {/* ================= NAV ================= */}
      <nav
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          solid
            ? "bg-[#020408]/90 backdrop-blur-2xl border-b border-white/5 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <ShieldCheck className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 animate-pulse" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase font-heading">
              Fraud<span className="text-cyan-400 italic">Shield</span>
            </span>
          </div>

          <div className="hidden md:flex gap-10 text-[14px] font-black uppercase tracking-[0.1em] items-center">
            <button className="text-slate-300 hover:text-cyan-300 transition-colors" onClick={() => scrollTo("how")}>How it works</button>
            <button className="text-slate-300 hover:text-cyan-300 transition-colors" onClick={() => scrollTo("feedback")}>Feedback</button>
            <button className="text-slate-300 hover:text-cyan-300 transition-colors" onClick={() => scrollTo("pricing")}>Pricing</button>
            <Button
              size="md"
              className="rounded-none px-8"
              onClick={() => scrollTo("download")}
            >
              Get Protected
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale pointer-events-none"
        >
          <source src="/videos/happy-family.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12 scroll-reveal">
            <div className="inline-flex gap-3 items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] font-black uppercase tracking-[0.2em] text-red-400">
              <AlertTriangle className="h-4 w-4" />
              2.8 million people lost money to scams last year
            </div>

            <h1 className="text-6xl md:text-[6.0rem] font-black leading-[0.95] tracking-tighter text-white font-heading">
              One Moment<br />

            <span className="text-slate-500 whitespace-normal md:whitespace-nowrap">
              One Wrong Click.
            </span>

            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic whitespace-normal md:whitespace-nowrap">
              Everything Lost.
            </span>
            </h1>




            <p className="text-xl text-slate-300 max-w-xl font-light leading-relaxed">
              Scammers are getting smarter every day. But you don’t have to face them alone. Protection that fits your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="rounded-none h-20 px-12 group">
                ACTIVATE PROTECTION <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-none border-white/10 hover:border-cyan-500/50">
                   <Apple className="h-5 w-5 mr-3" /> App Store
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block scroll-reveal">
             <div className="precision-panel rounded-[4rem] p-12 relative overflow-visible shadow-2xl">
                <div className="scan-line" />
                <Shield className="h-64 w-64 text-cyan-400/10 mx-auto" />
             </div>
          </div>
        </div>
      </section>

     {/* ================= SCENARIOS ================= */}
<section
  id="how"
  className="relative py-40 bg-[#020408] overflow-hidden"
>
  <div className="container mx-auto px-6 space-y-40">
    {SCENARIOS.map((s, i) => {
      const reverse = i % 2 === 1;

      return (
        <div
          key={i}
          className="grid md:grid-cols-2 gap-24 items-center scroll-reveal"
        >
          {/* ================= TEXT SIDE ================= */}
          <div
            className={`${reverse ? "md:order-2" : "md:order-1"} space-y-8`}
          >
            {/* Vector Badge */}
            <div className="flex items-center gap-4 text-red-400 px-4 py-2 rounded-xl bg-red-500/5 border border-red-500/10 w-fit">
              <Image
                src={s.image}
                alt={s.danger}
                width={20}
                height={20}
                className="opacity-90"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                {s.danger} VECTOR
              </span>
            </div>

            {/* Threat Title */}
            <h3 className="text-4xl md:text-5xl font-black font-heading leading-tight italic text-white">
              “{s.what}”
            </h3>

            {/* Reality Description */}
            <p className="text-rose-300 text-xl font-light italic leading-relaxed">
              {s.reality}
            </p>

            {/* Defense Protocol */}
            <div className="flex gap-6 items-start p-8 rounded-[2.5rem] bg-cyan-500/5 border border-cyan-500/10">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-xs uppercase tracking-widest mb-2">
                  Defense Protocol
                </p>
                <p className="text-slate-400 font-light leading-relaxed">
                  {s.protection}
                </p>
              </div>
            </div>
          </div>

          {/* ================= VISUAL SIDE ================= */}
          <div
            className={`${reverse ? "md:order-1" : "md:order-2"}
              group relative aspect-square rounded-[4rem] precision-panel
              flex items-center justify-center overflow-hidden`}
          >
            <div className="scan-line opacity-20" />
            <Image
              src={s.image}
              alt={s.what}
              fill
              className="object-contain p-12 opacity-80
                transition-all duration-1000
                group-hover:scale-110"
            />
          </div>
        </div>
      );
    })}
  </div>
</section>



      {/* ================= TESTIMONIALS (FEEDBACK) ================= */}
      <section id="feedback" className="py-40 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12 scroll-reveal">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black text-white font-heading tracking-tighter uppercase">User Feedback</h2>
              <p className="text-slate-500 text-xl font-light">Join 500k+ people who trust FraudShield to protect what matters most.</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-cyan-400 fill-cyan-400" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="precision-panel p-12 md:p-14 rounded-[3.5rem] group scroll-reveal relative bg-[#020408] border-white/5" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Quote className="absolute top-10 right-10 h-24 w-24 text-cyan-400/5 group-hover:text-cyan-400/10 transition-all duration-700" />
                <p className="text-slate-300 text-xl font-light leading-relaxed italic mb-16 relative z-10 group-hover:text-white transition-colors">
                  "{t.content}"
                </p>
                <div className="h-px w-full bg-white/5 mb-12" />
                <div className="flex items-center gap-6">
                  <div className="relative shrink-0">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover border border-white/10 shadow-2xl" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center border-2 border-[#020408]">
                      <CheckCircle2 className="h-3 w-3 text-black" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-lg tracking-tight font-heading uppercase">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.role}</p>
                    <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-40 bg-[#020408] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 scroll-reveal">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-6 leading-tight font-heading uppercase tracking-tighter">
              Peace of Mind
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">Choose protection that fits your life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-8xl mx-auto">
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`precision-panel rounded-[3.5rem] p-13 flex flex-col group scroll-reveal transition-all duration-700 ${
                  plan.highlighted 
                  ? 'border-cyan-400/40 bg-white/[0.06] shadow-[0_0_80px_rgba(34,211,238,0.08)] scale-[1.05] z-10' 
                  : 'bg-white/[0.02] border-white/5 opacity-80 hover:opacity-100'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-10 right-10 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full z-20">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-12 relative">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4 text-center"></p>
                   <h3 className="text-3xl font-black text-white font-heading mb-6 uppercase tracking-tighter leading-none text-center">{plan.name}</h3>
                   <div className="flex items-baseline justify-center gap-3">
                      <span className="text-6xl font-black text-white tracking-tighter font-heading">{plan.price}</span>
                      {plan.period && <span className="text-slate-500 text-[12px] font-black uppercase tracking-widest">{plan.period}</span>}
                   </div>
                   <p className="mt-7 text-sm text-slate-400 font-light leading-relaxed text-center">{plan.description}</p>
                </div>

                <div className="space-y-6 mb-12 flex-1 relative border-t border-white/5 pt-12">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex gap-4 items-center group/item">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${plan.highlighted ? 'bg-cyan-400' : 'bg-slate-700'}`} />
                      <span className="text-2xs text-slate-300 font-medium group-hover/item:text-white transition-colors">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5">
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className={`w-full h-20 rounded-2xl font-black text-[15px] tracking-[0.4em] transition-all duration-700 ${plan.highlighted ? 'shadow-[0_0_40px_rgba(34,211,238,0.2)]' : 'border-white/10'}`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRIVACY ================= */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center space-y-12 scroll-reveal">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 shadow-2xl">
                 <Lock className="h-10 w-10 text-cyan-400" />
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white font-heading tracking-tighter italic uppercase leading-tight">
                 Your security.<br />
                 <span className="text-cyan-400">Your Data. Your Control.</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left pt-12">
                 <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                    <h3 className="text-2xl font-bold mb-4 uppercase italic">Privacy-First AI</h3>
                    <p className="text-slate-400 leading-relaxed font-light">Your information stays on your device. We never store, sell, or share your personal data. Ever.</p>
                 </div>
                 <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                    <h3 className="text-2xl font-bold mb-4 uppercase italic">Strength in Numbers</h3>
                    <p className="text-slate-400 leading-relaxed font-light">Every scam you report helps protect someone else. Together, we're building a shield that covers everyone.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= DOWNLOAD CTA ================= */}
      <section id="download" className="py-40 bg-[#020408] relative">
        <div className="container mx-auto px-6">
          <div className="precision-panel p-20 md:p-32 rounded-[4rem] text-center space-y-12 border-cyan-500/10 relative overflow-hidden group scroll-reveal shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
             <div className="space-y-8 relative z-10">
                <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter italic font-heading leading-none uppercase">
                   Tonight,<br />
                   <span className="text-cyan-400">Sleep Soundly.</span>
                </h2>
                <p className="text-slate-400 text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                   You’re protected. Initiate your identity defense ecosystem now.
                </p>
                <div className="pt-10">
                   <Button variant="primary" size="lg" className="px-20 h-24 text-xl font-black uppercase tracking-[0.4em] shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:scale-105 rounded-none">
                      GET PROTECTED NOW
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= PROPER FOOTER ================= */}
      <footer className="relative pt-40 pb-20 px-6 bg-[#020408] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Column */}
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-between pb-32 border-b border-white/5 mb-32">
             <div className="space-y-6 max-w-xl text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tighter italic leading-none">Global_Threat_Intelligence</h3>
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                   Join 500k+ users receiving our weekly neural threat reports.
                </p>
             </div>
             <div className="w-full lg:w-auto relative group">
                <div className="flex p-2 bg-white/[0.03] border border-white/10 rounded-2xl w-full lg:w-[500px] shadow-2xl group-focus-within:border-cyan-500/50 transition-all">
                   <input type="email" placeholder="Provision your email address..." className="bg-transparent px-6 py-4 flex-1 focus:outline-none text-sm placeholder:text-slate-600 font-medium" />
                   <Button size="md" className="rounded-xl px-10 font-black h-14">Subscribe</Button>
                </div>
             </div>
          </div>

          {/* Site Links Architecture */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-40">
             <div className="col-span-2 lg:col-span-1 space-y-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                     <ShieldCheck className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-2xl font-black tracking-tighter text-white font-heading uppercase italic">FRAUD<span className="text-cyan-400">SHIELD</span></span>
                </div>
                <p className="text-slate-500 text-sm font-light leading-relaxed uppercase tracking-wider">
                   Engineering universal trust in a world of synthetic digital threats.<br />Neural architecture v3.11.
                </p>
                <div className="flex gap-4">
                   <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all">
                      <Twitter className="h-4 w-4" />
                   </button>
                   <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all">
                      <Linkedin className="h-4 w-4" />
                   </button>
                   <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all">
                      <Github className="h-4 w-4" />
                   </button>
                </div>
             </div>

             <div className="space-y-10">
                <p className="text-white font-black text-[15px] uppercase tracking-[0.5em] italic">Infrastructure</p>
                <ul className="space-y-6">
                  {["Neural Scanning", "Acoustic Nodes", "QR Sandbox", "Protocols"].map(l => (
                    <li key={l}><button className="text-[12px] text-slate-500 hover:text-cyan-400 uppercase font-bold tracking-[0.2em] transition-colors">{l}</button></li>
                  ))}
                </ul>
             </div>

             <div className="space-y-10">
                <p className="text-white font-black text-[15px] uppercase tracking-[0.5em] italic">Intelligence</p>
                <ul className="space-y-6">
                  {["Threat Database", "Risk Vectors", "Live Telemetry", "Logs"].map(l => (
                    <li key={l}><button className="text-[12px] text-slate-500 hover:text-cyan-400 uppercase font-bold tracking-[0.2em] transition-colors">{l}</button></li>
                  ))}
                </ul>
             </div>

             <div className="space-y-10">
                <p className="text-white font-black text-[15px] uppercase tracking-[0.5em] italic">Company</p>
                <ul className="space-y-6">
                  {["Core Mission", "Security Ethics", "Audit Reports", "Partner Nodes"].map(l => (
                    <li key={l}><button className="text-[12px] text-slate-500 hover:text-cyan-400 uppercase font-bold tracking-[0.2em] transition-colors">{l}</button></li>
                  ))}
                </ul>
             </div>

             <div className="space-y-10">
                <p className="text-white font-black text-[15px] uppercase tracking-[0.5em] italic">Legal_Pact</p>
                <ul className="space-y-6">
                  {["Privacy Shield", "Retention Policy", "Terms", "Compliance"].map(l => (
                    <li key={l}><button className="text-[12px] text-slate-500 hover:text-cyan-400 uppercase font-bold tracking-[0.2em] transition-colors">{l}</button></li>
                  ))}
                </ul>
                <div className="pt-10">
                   <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-[0.3em]">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                      All Systems Active
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-20 border-t border-white/5">
             <p className="text-slate-600 text-[9px] font-black tracking-[0.8em] uppercase text-center md:text-left">
                © 2026 FRAUDSHIELD NEURAL DEFENSE ECOSYSTEM. ALL RIGHTS RESERVED.
             </p>
             <div className="flex gap-10">
                <button className="text-[10px] text-slate-600 hover:text-cyan-400 font-black uppercase tracking-[0.4em] transition-colors underline decoration-slate-800 underline-offset-4">Privacy_Index</button>
                <button className="text-[10px] text-slate-600 hover:text-cyan-400 font-black uppercase tracking-[0.4em] transition-colors underline decoration-slate-800 underline-offset-4">Handshake_Terms</button>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
