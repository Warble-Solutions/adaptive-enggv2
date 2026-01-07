"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish, faFileInvoice, faNetworkWired, faTasks, faBolt, faShieldAlt, faCloudSun, faBroadcastTower, faUniversity, faMap, faBuilding, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import MicroCTA from "@/components/ui/MicroCTA";
// Navbar and Footer are globally in layout

export default function PmKusumPage() {

    useEffect(() => {
        const initAnime = async () => {
            // @ts-ignore
            const animeModule = await import("animejs") as any;
            // Handle v4 vs v3 import differences
            const anime = animeModule.default || animeModule;

            if (!anime) return;

            // In v4, anime might be an object containing the function, or the function itself.
            const runAnime = typeof anime === 'function' ? anime : animeModule.anime;

            if (typeof runAnime === 'function') {
                runAnime({
                    targets: ".reveal",
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1000,
                    delay: (el: any, i: number) => i * 100,
                });
            }
        };
        initAnime();
    }, []);

    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark) */}
            <section className="section-hero relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
                <div className="z-10 max-w-5xl">
                    <div className="inline-block px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-green-500/30 reveal">
                        MNRE Compliant
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading reveal">
                        PM-KUSUM <span className="text-primary">Solutions</span>
                    </h1>

                    <p className="text-gray-300 text-xl md:text-2xl font-light reveal delay-100 max-w-3xl mx-auto leading-relaxed">
                        End-to-end Remote Monitoring (RMS) & Automation for Components A, B & C
                    </p>
                </div>
            </section>

            {/* 2. SCHEME OVERVIEW (Light) */}
            <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">The Digital Farmer</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                                PM-KUSUM aims to de-diesel the farm sector. Our solutions ensure 100% visibility of solar pump performance, enabling farmers to earn from surplus power.
                            </p>
                            <div className="flex items-center gap-4 text-primary font-bold">
                                <Sun className="w-6 h-6" />
                                <span>Sustainable Agriculture</span>
                            </div>
                        </div>

                        <div className="reveal delay-200">
                            <div className="premium-card p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100 shadow-xl relative overflow-hidden">
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <div className="text-4xl font-black text-slate-900 mb-1">34k<span className="text-lg text-slate-500">Cr</span></div>
                                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Allocation</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-slate-900 mb-1">30.8<span className="text-lg text-slate-500">GW</span></div>
                                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Target</div>
                                    </div>
                                    <div className="col-span-2 pt-4 border-t border-green-200">
                                        <div className="text-xl font-bold text-slate-900">Farmers Empowered</div>
                                        <p className="text-slate-500 text-sm">Through Solar Irrigation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. END-TO-END KUSUM STACK (Combined) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">End-to-End KUSUM Stack</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Unified solution from IoT Sensors to State-Level Dashboards.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "IoT SCADA (RMS)",
                                desc: "Edge computing device with Store & Forward capability.",
                                icon: faSatelliteDish
                            },
                            {
                                title: "ReportWiz",
                                desc: "Automated JMR generation and subsidy compliance reports.",
                                icon: faFileInvoice
                            },
                            {
                                title: "Central Monitoring System (CMS)",
                                desc: "Unified portfolio view for State Agencies & Developers.",
                                icon: faNetworkWired
                            },
                            {
                                title: "Asset Management System (AMS)",
                                desc: "Workorder ticketing and inventory tracking.",
                                icon: faTasks
                            },
                            {
                                title: "HT Panel",
                                desc: "11kV/33kV Vacuum Circuit Breakers (VCB) for substations.",
                                icon: faBolt
                            },
                            {
                                title: "ACDB Panels",
                                desc: "IP65 protection for 800V & 415V pump connections.",
                                icon: faShieldAlt
                            },
                            {
                                title: "Weather Monitoring System (WMS)",
                                desc: "Industrial grade sensors for Irradiation, Module Temp, and Wind Speed to calculate accurate PR.",
                                icon: faCloudSun
                            },
                            {
                                title: "Telemetry System",
                                desc: "Real-time data transmission to SLDC/RLDC via RTU, ensuring grid visibility and compliance.",
                                icon: faBroadcastTower
                            }
                        ].map((item, i) => (
                            <div key={i} className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group reveal cursor-pointer delay-[100ms]">
                                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-white leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <MicroCTA text="Download Brochure" variant="download" href="#" />
                    </div>
                </div>
            </section>

            {/* 5. COMPLIANCE & INTEGRATION (Dark) */}
            <section className="section-dark py-24 bg-slate-900 text-white relative z-10 -mt-10 pt-32">
                <div className="max-w-6xl mx-auto px-6 reveal">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6 font-heading">Seamless Compliance</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our RMS stack is pre-integrated with major state and national portals, ensuring 100% subsidy compliance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 1. MNRE */}
                        <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-green-400 tracking-wider">LIVE</span>
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={faUniversity} className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">National Portal</h3>
                            <p className="text-sm text-gray-400 mb-4">Direct data push to MNRE server for central subsidy claiming.</p>
                            <div className="flex items-center gap-2 text-xs text-orange-300 font-medium">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>API Ready</span>
                            </div>
                        </div>

                        {/* 2. State Portals */}
                        <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-green-400 tracking-wider">LIVE</span>
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={faMap} className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">State Portals</h3>
                            <p className="text-sm text-gray-400 mb-4">Integrated with portals of Rajasthan, Maharashtra, Haryana & more.</p>
                            <div className="flex items-center gap-2 text-xs text-blue-300 font-medium">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Multi-State Support</span>
                            </div>
                        </div>

                        {/* 3. DISCOM ERP */}
                        <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-[10px] font-bold text-blue-300 tracking-wider">SECURE</span>
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={faBuilding} className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Utility ERP</h3>
                            <p className="text-sm text-gray-400 mb-4">Seamless billing data integration with DISCOM internal software.</p>
                            <div className="flex items-center gap-2 text-xs text-purple-300 font-medium">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Encrypted Tunnel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA (Light) */}
            <section className="py-20 bg-white text-center border-t border-gray-100 relative z-20">
                <div className="max-w-2xl mx-auto px-6 reveal">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Partner for PM-KUSUM?</h2>
                    <p className="text-slate-500 mb-8 text-lg">We support EPCs and Developers with end-to-end RMS & Hardware.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-colors">
                        Get Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

