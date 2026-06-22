import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ArrowRight, Activity, Terminal, Crosshair, Map, BarChart4, ChevronRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- A. NAVBAR ---
const Navbar = () => {
  const navRef = useRef();
  
  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: {className: 'scrolled', targets: navRef.current},
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-colors duration-500 rounded-[2rem] px-8 py-4 flex items-center justify-between w-[90%] max-w-5xl border border-transparent [&.scrolled]:bg-primary/60 [&.scrolled]:backdrop-blur-xl [&.scrolled]:border-slate/50">
      <div className="font-heading font-bold text-xl tracking-tight text-ivory uppercase tracking-widest">ReachMonk</div>
      <div className="hidden md:flex gap-8 text-sm font-heading font-semibold text-ivory/70 tracking-widest uppercase">
        <a href="#features" className="hover:text-accent hover:-translate-y-[1px] transition-all">Systems</a>
        <a href="#philosophy" className="hover:text-accent hover:-translate-y-[1px] transition-all">Manifesto</a>
        <a href="#protocol" className="hover:text-accent hover:-translate-y-[1px] transition-all">Protocol</a>
      </div>
      <button className="group relative overflow-hidden rounded-full bg-accent text-primary px-6 py-2.5 font-heading font-bold text-sm uppercase tracking-wider transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
        <span className="relative z-10 flex items-center gap-2">
          Book Call <ArrowUpRight size={16} />
        </span>
        <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
      </button>
    </nav>
  );
};

// --- B. HERO SECTION ---
const Hero = () => {
  const container = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-elem', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex items-end pb-24 md:pb-32 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2500&auto=format&fit=crop" 
          alt="Marketing Analytics" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col gap-2 md:gap-4 mb-8">
          <h1 className="hero-elem font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight text-ivory/90 uppercase">
            Authority meets
          </h1>
          <h1 className="hero-elem font-drama italic text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.8] text-accent pr-4">
            Conversion.
          </h1>
        </div>
        <p className="hero-elem max-w-xl text-lg md:text-xl text-ivory/70 font-heading mb-10 leading-relaxed font-light">
          ReachMonk is a premium social media marketing agency that engineers your digital authority and guarantees qualified lead volume.
        </p>
        <button className="hero-elem group relative overflow-hidden rounded-[2rem] bg-accent text-primary px-8 py-4 font-heading font-bold text-lg uppercase tracking-wider transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_40px_rgba(201,168,76,0.15)]">
          <span className="relative z-10 flex items-center gap-3">
            Initiate Protocol <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
        </button>
      </div>
    </section>
  );
};

// --- C. FEATURES ---

const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, label: "Predictable Pipeline", value: "Active", color: "text-accent" },
    { id: 2, label: "Qualified Prospects", value: "Verified", color: "text-white" },
    { id: 3, label: "Guaranteed Volume", value: "Locked", color: "text-white/50" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate p-8 rounded-[2rem] shadow-2xl border border-white/5 relative overflow-hidden group">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-2xl text-ivory mb-2 flex items-center gap-2">
          <Crosshair className="text-accent" size={24} /> Guaranteed Leads
        </h3>
        <p className="font-heading text-ivory/60 text-sm">Our proprietary acquisition model removes pipeline variance.</p>
      </div>
      
      <div className="relative h-48 w-full mt-auto perspective-1000">
        {cards.map((card, i) => {
          const isTop = i === 0;
          return (
            <div 
              key={card.id}
              className="absolute w-full p-4 rounded-2xl bg-primary border border-white/10 flex justify-between items-center transition-all duration-700"
              style={{
                top: `${i * 16}px`,
                scale: 1 - i * 0.05,
                opacity: 1 - i * 0.2,
                zIndex: 10 - i,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <span className="font-heading font-semibold text-sm text-ivory">{card.label}</span>
              <span className={`font-data text-xs uppercase tracking-wider ${card.color}`}>[{card.value}]</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "> INITIATING SYSTEM OUTREACH...\n> ANALYZING SOCIAL SIGNALS...\n> OPTIMIZING CONVERSION RATE...\n> 12 PREMIUM CLIENTS SECURED.";
  
  useEffect(() => {
    let currentLength = 0;
    const interval = setInterval(() => {
      if (currentLength <= fullText.length) {
        setText(fullText.slice(0, currentLength));
        currentLength++;
      } else {
        setTimeout(() => { currentLength = 0; setText(''); }, 4000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate p-8 rounded-[2rem] shadow-2xl border border-white/5 relative overflow-hidden">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h3 className="font-heading font-bold text-2xl text-ivory mb-2 flex items-center gap-2">
            <Terminal className="text-accent" size={24} /> Intelligent Frameworks
          </h3>
          <p className="font-heading text-ivory/60 text-sm">Decisions made by algorithms, not emotions.</p>
        </div>
        <div className="flex items-center gap-2 bg-primary/50 px-3 py-1 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="font-data text-[10px] text-accent uppercase tracking-widest">Live Feed</span>
        </div>
      </div>
      
      <div className="mt-auto bg-primary rounded-xl p-5 border border-white/5 h-48 overflow-hidden relative">
        <pre className="font-data text-sm text-ivory/80 whitespace-pre-wrap leading-relaxed">
          {text}
          <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
        </pre>
      </div>
    </div>
  );
};

const CursorProtocolScheduler = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(2);
  const cursorRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    tl.to(cursorRef.current, { x: 90, y: 30, duration: 1, ease: "power2.inOut" })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, onComplete: () => setActiveDay(2) })
      .to(cursorRef.current, { x: 210, y: 30, duration: 1, ease: "power2.inOut", delay: 0.5 })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, onComplete: () => setActiveDay(5) })
      .to(cursorRef.current, { x: 150, y: 120, duration: 1, ease: "power2.inOut", delay: 0.5 })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
      .to(cursorRef.current, { opacity: 0, duration: 0.3 })
      .set(cursorRef.current, { x: -20, y: -20, opacity: 1, onComplete: () => setActiveDay(-1) });
      
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate p-8 rounded-[2rem] shadow-2xl border border-white/5 relative overflow-hidden">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-2xl text-ivory mb-2 flex items-center gap-2">
          <Map className="text-accent" size={24} /> Expert Authority
        </h3>
        <p className="font-heading text-ivory/60 text-sm">Automated scheduling of exceptionally impactful content.</p>
      </div>
      
      <div className="mt-auto bg-primary rounded-xl p-5 border border-white/5 h-48 relative">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map((d, i) => (
            <div key={i} className={`aspect-square rounded-md flex items-center justify-center font-data text-xs transition-colors duration-300 ${activeDay === i ? 'bg-accent text-primary font-bold' : 'bg-slate/50 text-ivory/40'}`}>
              {d}
            </div>
          ))}
        </div>
        
        <div className="w-full h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mt-6 hover:bg-accent/20 transition-colors">
          <span className="font-data text-xs text-accent uppercase tracking-widest">Deploy Assets</span>
        </div>
        
        {/* Animated SVG Cursor */}
        <div ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none" style={{ transform: 'translate(-20px, -20px)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-lg fill-white/20">
            <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
            <path d="m13 13 6 6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorProtocolScheduler />
      </div>
    </section>
  );
};

// --- D. PHILOSOPHY ---
const Philosophy = () => {
  const container = useRef();
  
  useGSAP(() => {
    gsap.from('.phil-line', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="philosophy" ref={container} className="relative py-40 px-6 md:px-16 w-full flex items-center justify-center overflow-hidden bg-primary border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2500&auto=format&fit=crop" 
          alt="Abstract Tech" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl text-center flex flex-col gap-12">
        <h2 className="phil-line font-heading text-2xl md:text-3xl text-ivory/60 tracking-tight font-light">
          Most marketing agencies focus on: <span className="line-through decoration-white/30">vanity metrics.</span>
        </h2>
        <h2 className="phil-line font-drama italic text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight">
          We focus on: <br/>
          <span className="text-accent">guaranteed revenue.</span>
        </h2>
      </div>
    </section>
  );
};

// --- E. PROTOCOL ---
const Protocol = () => {
  const container = useRef();
  
  const steps = [
    { num: "01", title: "Audit & Blueprint", desc: "We analyze your brand architecture and design a custom growth protocol tailored for dominance." },
    { num: "02", title: "Authority Implementation", desc: "We deploy exceptionally persuasive social assets to establish your absolute market dominance." },
    { num: "03", title: "Lead Acquisition", desc: "Our proprietary systems capture, nurture, and deliver guaranteed qualified leads straight to your calendar." },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.protocol-card');
    
    cards.forEach((card, i) => {
      if(i === cards.length - 1) return; // Skip last card
      
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        endTrigger: ".protocol-container",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      gsap.to(card, {
        scrollTrigger: {
          trigger: cards[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        scale: 0.9,
        opacity: 0.5,
        filter: "blur(20px)",
      });
    });
  }, { scope: container });

  return (
    <section id="protocol" ref={container} className="protocol-container relative w-full bg-primary">
      {steps.map((step, i) => (
        <div key={i} className="protocol-card h-[100dvh] w-full flex items-center justify-center top-0 px-6">
          <div className="w-full max-w-5xl bg-slate p-12 md:p-20 rounded-[3rem] shadow-2xl border border-white/5 flex flex-col md:flex-row gap-12 items-center">
            
            {/* Visual Column */}
            <div className="w-full md:w-1/2 flex justify-center">
              {i === 0 && (
                <div className="relative w-64 h-64 border border-accent/30 rounded-full flex items-center justify-center">
                  <div className="absolute w-48 h-48 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute w-32 h-32 border border-accent/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <Crosshair className="text-accent w-12 h-12" />
                </div>
              )}
              {i === 1 && (
                <div className="relative w-64 h-64 bg-primary/50 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-4 w-full px-8">
                    {Array.from({length: 15}).map((_, j) => (
                      <div key={j} className="h-2 rounded-full bg-white/20"></div>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_15px_#C9A84C] animate-[bounce_3s_infinite]"></div>
                </div>
              )}
              {i === 2 && (
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent overflow-visible">
                    <path 
                      fill="none" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M0 50 L30 50 L40 20 L60 80 L70 50 L100 50" 
                      className="dash-anim"
                      style={{ strokeDasharray: '200', animation: 'dash 2s linear infinite' }}
                    />
                  </svg>
                  <style>{`
                    @keyframes dash {
                      to { stroke-dashoffset: -400; }
                    }
                  `}</style>
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <span className="font-data text-accent text-lg">STEP {step.num} //</span>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ivory tracking-tight">{step.title}</h2>
              <p className="font-heading text-lg text-ivory/60 leading-relaxed font-light">{step.desc}</p>
            </div>
            
          </div>
        </div>
      ))}
    </section>
  );
};

// --- F. FOUNDER ---
const Founder = () => {
  const container = useRef();
  
  useGSAP(() => {
    gsap.from('.founder-elem', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="founder" ref={container} className="relative py-40 px-6 md:px-16 w-full flex justify-center bg-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate/50 to-transparent"></div>
      
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-20 items-center relative z-10">
        
        {/* Image Column */}
        <div className="founder-elem w-full lg:w-5/12 relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-700"></div>
          <div className="absolute inset-0 bg-accent rounded-[3rem] translate-x-6 translate-y-6 opacity-30 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate">
            <img 
              src="/Assets/Screenshot 2026-06-22 113636.png" 
              alt="Tanmay Mapari" 
              className="w-full h-auto aspect-[4/5] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-7/12 flex flex-col gap-8">
          <div className="founder-elem flex items-center gap-4">
            <div className="w-16 h-[1px] bg-accent"></div>
            <span className="font-data text-accent uppercase tracking-widest text-sm font-semibold">The Architect</span>
          </div>
          
          <h2 className="founder-elem font-heading font-extrabold text-5xl md:text-7xl text-ivory tracking-tight">Tanmay Mapari</h2>
          
          <div className="founder-elem relative">
            <span className="absolute -top-10 -left-6 text-8xl font-drama italic text-white/5 select-none">"</span>
            <p className="font-drama italic text-2xl md:text-3xl text-ivory/90 leading-snug">
              I built ReachMonk on a singular premise: social media marketing should be an exact science, not a guessing game.
            </p>
          </div>
          
          <p className="founder-elem font-heading text-lg text-ivory/60 leading-relaxed font-light">
            By building elegant analytical systems and embracing a relentless execution strategy, we transformed how digital authority translates into tangible revenue. My commitment goes far beyond inflating empty numbers. I am here to secure your lead volume and architect your absolute market dominance.
          </p>
          
          <div className="founder-elem flex items-center gap-5 mt-4 pt-8 border-t border-white/5">
            <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center text-accent font-heading font-bold text-xl bg-accent/5 shadow-[0_0_15px_rgba(201,168,76,0.1)]">
              TM
            </div>
            <div>
              <p className="font-heading font-bold text-ivory text-lg tracking-wide">Tanmay Mapari</p>
              <p className="font-data text-xs text-accent uppercase tracking-widest mt-1">Founder & CEO, ReachMonk</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

// --- G. GET STARTED ---
const GetStarted = () => {
  return (
    <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto text-center">
      <div className="bg-gradient-to-b from-slate to-primary p-16 md:p-24 rounded-[3rem] border border-accent/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-ivory mb-6 uppercase tracking-tight">Ready to dominate?</h2>
        <p className="font-heading text-xl text-ivory/70 mb-12 max-w-2xl mx-auto font-light">Join the elite rank of founders scaling with automated authority and guaranteed lead generation.</p>
        
        <button className="group relative overflow-hidden rounded-[2rem] bg-accent text-primary px-10 py-5 font-heading font-bold text-xl uppercase tracking-wider transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_50px_rgba(201,168,76,0.2)]">
          <span className="relative z-10 flex items-center justify-center gap-3">
            Secure Your Spot <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
        </button>
      </div>
    </section>
  );
};

// --- G. FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-[#050508] pt-24 pb-8 px-6 md:px-16 rounded-t-[4rem] mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-heading font-extrabold text-3xl text-ivory uppercase tracking-widest mb-4">ReachMonk</h3>
          <p className="font-heading text-ivory/50 max-w-sm font-light">Precision social media marketing engineered for the modern founder.</p>
        </div>
        <div>
          <h4 className="font-data text-accent text-sm mb-6 uppercase">Navigation</h4>
          <ul className="flex flex-col gap-4 font-heading text-ivory/70 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Systems</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Protocol</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-data text-accent text-sm mb-6 uppercase">Legal</h4>
          <ul className="flex flex-col gap-4 font-heading text-ivory/70 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
          <span className="font-data text-xs text-ivory/70 uppercase tracking-widest">System Operational</span>
        </div>
        <p className="font-heading text-xs text-ivory/40">© {new Date().getFullYear()} ReachMonk. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <main className="bg-primary min-h-screen font-heading w-full overflow-x-hidden selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Founder />
      <GetStarted />
      <Footer />
    </main>
  );
}

export default App;
