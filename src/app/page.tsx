"use client";

import { useEffect, useRef } from "react";
import EventsCalendar from "@/components/EventsCalendar";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import HeroCarousel from "@/components/HeroCarousel";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import MicroCTA from "@/components/ui/MicroCTA";
import { ArrowRight, ShieldCheck, Activity, HardHat, CheckCircle2, PenTool, Factory, Zap, BarChart3, Blocks, Link2 } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const initAnime = async () => {
      // @ts-ignore
      const animeModule = await import("animejs") as any;
      const anime = animeModule.default || animeModule;

      if (!anime) return;

      const runAnime = typeof anime === 'function' ? anime : animeModule.anime;

      if (typeof runAnime === 'function') {
        // 1. Standard Reveal Animation
        runAnime({
          targets: ".reveal",
          translateY: [20, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el: any, i: number) => i * 100,
        });

        // 2. Protocol "Pulse" Animation (Infinite Flow)
        runAnime({
          targets: '.protocol-pulse',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'linear',
          duration: 3000,
          loop: true
        });

        // 3. Floating Icons (Bobbing effect)
        runAnime({
          targets: '.floating-icon',
          translateY: [-5, 5],
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine',
          duration: 2000,
          delay: runAnime.stagger(200)
        });
      }
    };
    initAnime();
  }, []);
  return (
    <div className="flex flex-col">
      {/* 1. HERO CAROUSEL */}
      <section className="relative min-h-screen pt-32 md:pt-0 bg-transparent">
        <HeroCarousel />
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. MARQUEE SECTION (Light) */}
      <section className="py-20 bg-light rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Preferred Partner for Industry Leaders</p>
        </div>
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee gap-20 min-w-full px-10">
            {[
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/1-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/20-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/36-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/40-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/21-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/13-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/19-1024x1024.png.webp"
            ].map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <img src={src} alt="Partner" className="h-24 w-auto object-contain opacity-80 hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/1-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/20-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/36-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/40-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/21-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/13-1024x1024.png.webp",
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://adaptive-engg.com/wp-content/uploads/2023/04/19-1024x1024.png.webp"
            ].map((src, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0">
                <img src={src} alt="Partner" className="h-24 w-auto object-contain opacity-80 hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS GRID (Light) */}
      <section className="py-24 bg-white z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
            {[
              { val: "16+", label: "Years Experience" },
              { val: "300+", label: "Manpower" },
              { val: "68 GW+", label: "Assets Monitored" },
              { val: "125,000+", label: "Sq. Ft. Facility" },
              { val: "1,000+", label: "Projects Executed" },
              { val: "500+", label: "Plants Monitored" }
            ].map((stat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="text-5xl font-extrabold text-slate-900 font-heading mb-2">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</div>
              </SectionWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CORE SOLUTIONS (Dark) */}
      <section className="py-32 bg-transparent rounded-b-[40px] z-10 relative shadow-2xl">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white font-heading">Our Solutions</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=150&q=80" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform duration-500" alt="Renewable" />
                <h3 className="text-2xl font-bold text-white mb-4">Renewable Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">End-to-end services: Conceptualizing, designing, and commissioning electrical systems up to 66KV. Solar, Wind, and Hybrid plant integration.</p>
                <Link href="/renewable" className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors z-20 relative">Learn More</Link>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full relative">
                <img src="https://adaptive-engg.com/wp-content/uploads/2024/10/Untitled-design-13-1-480x340.png" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform duration-500" alt="KUSUM" />
                <h3 className="text-2xl font-bold text-white mb-4">PM-KUSUM Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">Industrial IoT powered by SolarWiz, WaterWiz, and MachineWiz. Real-time telemetry for agricultural pumps and water supply schemes.</p>
                <Link href="/pm-kusum" className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors z-20 relative">Learn More</Link>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                <img src="https://adaptive-engg.com/wp-content/uploads/2023/08/tunnel-mp.png.webp" className="w-20 h-20 rounded-2xl object-cover mb-8 border-2 border-primary shadow-lg group-hover:scale-110 transition-transform duration-500" alt="Infra" />
                <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-8">Specialized automation for Tunnels and Data Centers. In-house manufacturing of HT/LT Panels, MCC, and PCC for heavy industry.</p>
                <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors">Learn More</span>
              </div>
            </SectionWrapper>
          </div>

          <div className="mt-12 text-center">
            <SectionWrapper delay={0.4}>
              <MicroCTA text="View All Capabilities" variant="connect" href="/renewable" />
            </SectionWrapper>
          </div>
        </div >
      </section >

      {/* 5. TECH HIGHLIGHT (Light) */}
      < section className="py-24 bg-light z-0" >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <SectionWrapper>
              <span className="text-primary font-bold uppercase text-sm tracking-widest mb-2 block">ReportWiz Platform</span>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-8 font-heading">Intelligent <br /> Monitoring</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our proprietary software provides Central Plant Monitoring and Mobile Asset Management. With an installed base of over 68GW, we ensure optimal performance across 500+ plants.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <Activity className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900">Real-Time</h4>
                    <p className="text-xs text-slate-500">Telemetry</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <ShieldCheck className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900">Secure</h4>
                    <p className="text-xs text-slate-500">Asset Mgmt</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>

          <div className="lg:w-1/2">
            <SectionWrapper delay={0.2}>
              <div className="aspect-video bg-gray-50 flex items-center justify-center border border-gray-100 rounded-3xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-primary border-r-primary border-b-gray-200 border-l-gray-200 animate-spin-slow mb-4"></div>
                  <p className="font-bold text-slate-400 text-sm tracking-widest">LIVE DATA FEED</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section >

      {/* 6. PROJECTS (Dark) */}
      < section className="py-32 bg-transparent rounded-t-[40px] z-10 relative" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white font-heading">Case Studies</h2>
            </SectionWrapper>
            <Link href="#" className="text-primary font-bold hover:text-white transition hidden md:block">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SectionWrapper delay={0.1}>
              <div className="group cursor-pointer">
                <div className="h-96 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">GUJARAT</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Water Supply Scheme</h3>
                <p className="text-gray-400">Complete E&I automation for Rewa, Kirgi, and Barhi projects.</p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="group cursor-pointer">
                <div className="h-96 bg-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105" alt="Project" />
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">HIGHWAY</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Twin Tube Tunnel</h3>
                <p className="text-gray-400">2.5Km highway tunnel E&I package delivery.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section >

      {/* 7. SCALABILITY (Light) */}
      < section className="section-light py-24 bg-white relative z-20" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-2 font-heading">Built to Grow</h2>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Future Proof Architecture</p>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Modular Architecture", desc: "Scale effortlessly from 50MW to 5GW. Our plug-and-play architecture allows you to add capacity or new assets (like BESS) without disrupting core operations.", icon: <Blocks className="w-6 h-6" /> },
              { title: "Universal Compatibility", desc: "True vendor independence. We seamlessly integrate with all major inverter makes (Huawei, Sungrow, SMA) and turbine protocols, unifying your entire portfolio.", icon: <Link2 className="w-6 h-6" /> },
              { title: "Grid Future-Proofing", desc: "Stay ahead of regulations. Our systems are pre-configured for the latest IEGC grid codes, frequency response norms, and upcoming scheduling requirements.", icon: <ShieldCheck className="w-6 h-6" /> }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="premium-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section >

      {/* 8. TESTIMONIALS (Dark) */}
      < section className="section-dark py-24 bg-transparent relative z-10" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-white mb-2 font-heading">Trusted Voices</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Powering India&apos;s energy leaders</p>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "I appreciate the exceptional work of Adaptive Engineering Pvt. Ltd. Their commitment to excellence, attention to details and proactive mindset have significantly contributed to the success of our projects.", author: "Advisor - Solar O&M", company: "Tata Power", initial: "T" },
              { quote: "I have no hesitation in recommending AEPL to anyone seeking reliable and efficient solar monitoring solutions. The combination of cutting-edge technology, expert knowledge, and outstanding customer service makes AEPL the ideal partner.", author: "Director", company: "WAAREE Renewable Technologies Ltd.", initial: "W" },
              { quote: "Our Machine Automation Solutions are powered by AEPL and we highly recommend the same.", author: "Managing Director", company: "Clartech Engineers Pvt. Ltd.", initial: "C" }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6 text-primary text-4xl">❝</div>
                    <p className="text-gray-300 leading-relaxed italic mb-8 text-sm">&quot;{item.quote}&quot;</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      {item.initial}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.author}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{item.company}</div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section >

      {/* 9. PROTOCOL (Light) */}
      < section className="py-32 bg-light z-20" >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionWrapper>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-20 font-heading">The Protocol</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] z-0">
                <svg width="100%" height="2" className="overflow-visible">
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="text-primary/30" />
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="text-primary protocol-pulse opacity-50" />
                </svg>
              </div>

              {[
                { step: "01", title: "Conceptualize", desc: "Design & Feasibility", icon: <PenTool className="w-6 h-6" /> },
                { step: "02", title: "Manufacture", desc: "In-house Panel Fabrication", icon: <Factory className="w-6 h-6" /> },
                { step: "03", title: "Commission", desc: "Install & Test up to 66KV", icon: <Zap className="w-6 h-6" /> },
                { step: "04", title: "Monitor", desc: "24/7 ReportWiz Analytics", icon: <BarChart3 className="w-6 h-6" /> }
              ].map((item, i) => (
                <div key={i} className="group relative z-10 mb-12 md:mb-0">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 relative z-20 floating-icon">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                      {item.step}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </SectionWrapper>
        </div>
      </section >

      {/* 8. IMPACT (Dark) */}
      < section className="py-32 bg-transparent" >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-white">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-4 font-heading">Impact & Scale</h2>
            <p className="text-gray-400 max-w-md">Reducing carbon footprints and empowering local communities.</p>
          </SectionWrapper>
          <div className="flex gap-16 text-center">
            <SectionWrapper delay={0.1}>
              <div className="text-6xl font-bold mb-2 font-mono">68<span className="text-primary">GW+</span></div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Monitored Assets</div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="text-6xl font-bold mb-2 font-mono">1,000<span className="text-primary">+</span></div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Projects</div>
            </SectionWrapper>
          </div>
        </div>
      </section >

      {/* 9. SAFETY (Light) */}
      < section className="py-24 bg-light border-t border-gray-100" >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <SectionWrapper>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-heading">ISO 9001:2015 Certified</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our best-in-class manufacturing facility is certified by TUV Nord. We maintain stringent safety standards and a Zero Harm policy.
              </p>
            </SectionWrapper>
          </div>
          <div className="flex gap-6">
            <SectionWrapper delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center w-48 hover:-translate-y-1 transition-transform">
                <HardHat className="mx-auto w-10 h-10 mb-4 text-accent" />
                <div className="text-xs font-bold uppercase text-slate-900">Safety First</div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center w-48 hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="mx-auto w-10 h-10 mb-4 text-primary" />
                <div className="text-xs font-bold uppercase text-slate-900">TUV Nord</div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section >

      {/* 10. CTA (Dark) */}
      < section className="py-40 bg-transparent text-center relative z-10" >
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl md:text-6xl mb-8 font-black text-white font-heading">Ready to <span className="text-primary">Scale?</span></h2>
            <p className="text-xl text-gray-400 mb-12">Partner with the &quot;Preferred Project Partner&quot; of India&apos;s largest corporate houses.</p>
            <Link href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-primary to-teal-700 text-white rounded-full font-bold uppercase tracking-wider text-lg shadow-xl shadow-teal-900/50 hover:scale-105 transition-transform">
              Start Discussion
            </Link>
          </SectionWrapper>
        </div>
      </section >
    </div >
  );
}
