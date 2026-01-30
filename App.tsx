
import React from 'react';
import { Navigation } from './components/Navigation';
import { Section, ColumnLayout, PlaceholderImage } from './components/Section';
import { BrowserFrame } from './components/BrowserFrame';
import { PersonaCard } from './components/PersonaCard';
import { FeatureItem } from './components/FeatureList';
import { ArchitectureCard } from './components/ArchitectureCard';
import { BarChart3, Wrench, ShieldCheck } from 'lucide-react';
// Added 'Sun' to the imported icons from lucide-react
import { CheckCircle, ArrowRight, Mail, Linkedin, ArrowUpRight, Cpu, Database, Layout, Activity, Sun, Layers, Workflow } from 'lucide-react';

const heroImg = '/images/SolarPulse_Image1_Fablab.jpeg';
const hardwareImg = '/images/IMG_9070.JPG';
const archImg = '/images/SolarPulse_Image3_Architechture.jpeg';
const dashboardImg = '/images/SolarPulse_Image4_Dashboard.jpeg';
const anomalyImg = '/images/SolarPulse_Image5_Anomaly.jpeg';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      {/* SECTION 1: HERO */}
      <section
        id="hero"
        className="pt-40 pb-32 px-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Column 1: Text */}
            <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-8">
                {/* Verve badge */}
                <div className="inline-flex items-center gap-2 bg-teal-tint text-teal-brand text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-brand opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-brand"></span>
                  </span>
                  V1.0 ACTIVE HARDWARE PROTOTYPE
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
                    From raw solar signals to clear operational decisions
                  </h1>
                  <p className="text-lg lg:text-xl font-semibold text-teal-brand mb-8">
                    Real-time edge monitoring + explainable AI root cause analysis
                  </p>
                </div>

                <p className="text-lg text-slate-500 leading-relaxed max-w-xl italic">
                  Solar performance degrades quietly, long before alerts trigger or inspections happen. SolarPulse makes early issues visible with real-time monitoring and explainable AI, so teams act with confidence, not guesswork.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    'Detect anomalies in real time (87% AI confidence)',
                    'Understand root causes with probabilistic analysis',
                    'Reduce maintenance response time with smart alerts'
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-slate-700 font-medium">
                      <CheckCircle className="mt-0.5 w-5 h-5 text-teal-brand flex-shrink-0" />
                      <span className="text-[15px] lg:text-base leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="#architecture"
                    className="inline-flex items-center justify-center bg-[#1F2937] text-white hover:bg-teal-brand shadow-xl px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1"
                  >
                    See the Architecture
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-white border-2 border-teal-brand text-teal-brand hover:bg-teal-tint transition-all duration-300 px-10 py-5 rounded-2xl font-semibold hover:-translate-y-1"
                  >
                    Contact
                  </a>
                </div>

                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase pt-2">
                  Note: Interface designs shown for portfolio demonstration. Deployment details may be confidential per NDA.
                </p>
              </div>
            </div>

            {/* Column 2: Image */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative">
                {/* Soft teal glow behind */}
                <div className="absolute -inset-10 bg-teal-brand/5 blur-3xl rounded-[3rem]"></div>

                {/* Glass frame */}
                <div className="relative bg-white p-2 rounded-[2.5rem] border border-slate-100 shadow-2xl animate-float">
                  <div className="rounded-[2rem] overflow-hidden border border-black/5 ring-1 ring-inset ring-black/10">
                    <img
                      src={heroImg}
                      alt="SolarPulse IoT prototype with ESP32 microcontroller, LCD display, sensors and solar panel built in professional FabLab environment"
                      loading="eager"
                      className="w-full h-[550px] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM & SOLUTION */}
      <section id="solution" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-800 mb-16 text-center">
            Problem & Solution
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: The Problem */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                The problem: Issues are detected too late
              </h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Most solar systems degrade quietly. By the time teams notice abnormal behavior, performance has already dropped.
              </p>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Traditional solar monitoring focuses on surface level metrics. Teams see output changes, but lack context on why it's happening or what to do next.
              </p>
              <p className="text-slate-500 mb-6 leading-relaxed">
                As a result, operators rely on delayed inspections, manual analysis, or static thresholds. By the time action is taken, performance loss has already occurred.
              </p>

              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">Key limitations</p>
              <div className="mb-8 space-y-2">
                <FeatureItem type="warning" text="Performance drops before alerts provide actionable context" />
                <FeatureItem type="warning" text="Root causes remain unclear without manual inspection" />
                <FeatureItem type="warning" text="Teams spend time diagnosing instead of fixing" />
                <FeatureItem type="warning" text="Maintenance workflows become reactive, not preventive" />
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
                <p className="text-slate-800 font-semibold leading-relaxed">
                  Result: 48-72h delays and 10-15% avoidable performance loss.
                </p>
              </div>
            </div>

            {/* Right Column: The Solution */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                The solution: Turning data into operational decisions
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                SolarPulse is designed to close the gap between detection and action. It combines real-time anomaly detection, probabilistic root cause analysis, and clear recommendations so teams can intervene earlier and with confidence.
              </p>

              <p className="text-xs font-bold uppercase tracking-widest text-teal-brand mb-4">How it works</p>
              <div className="space-y-2">
                <FeatureItem type="step" text="Edge sensors capture early performance signals" />
                <FeatureItem type="step" text="Cloud pipeline analyzes time-series behavior" />
                <FeatureItem type="step" text="AI ranks likely root causes with confidence scores" />
                <FeatureItem type="step" text="Operators act on clear, explainable recommendations" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM ARCHITECTURE */}
      <section id="architecture" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-800 mb-4">
              End-to-end system architecture
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mb-6">
              From physical solar signals to AI-powered operational decisions.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              SolarPulse is designed as a complete monitoring pipeline. Each layer is responsible for a specific decision-making step, from data capture at the edge to explainable recommendations for operators.
            </p>
          </div>

          {/* Diagram Container */}
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-4xl p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
              <img 
                src={archImg} 
                alt="SolarPulse System Architecture Diagram" 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-teal-brand mb-6">Architecture overview</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            <ArchitectureCard 
              number="1" 
              title="Energy source" 
              description="Solar panels provide the physical signals that reflect real-world performance behavior." 
            />
            <ArchitectureCard 
              number="2" 
              title="Sensing layer" 
              description="Voltage, current, temperature, and irradiance sensors capture early degradation signals directly at the source." 
            />
            <ArchitectureCard 
              number="3" 
              title="Edge device" 
              description="An edge microcontroller preprocesses sensor data, handles local validation, and ensures reliable transmission under real-world constraints." 
            />
            <ArchitectureCard 
              number="4" 
              title="Cloud pipeline" 
              description="A cloud-based time-series pipeline ingests, stores, and analyzes system behavior over time, enabling trend detection and anomaly identification." 
            />
            <ArchitectureCard 
              number="5" 
              title="Product layer" 
              description="The product layer turns analyzed data into operational workflows, combining dashboards, alerts, and AI-assisted incident analysis." 
            />
          </div>

          <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
            <p>
              This architecture is intentionally modular. It allows each layer to evolve independently while maintaining a clear contract between data capture, analysis, and decision-making.
            </p>
            <p>
              Design choices prioritize reliability, explainability, and operational usability over raw automation.
            </p>
            <p>
              This end-to-end design ensures that every alert, insight, and recommendation can be traced back to real physical signals. It also creates the foundation for production-grade monitoring, not just dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: HARDWARE */}
      <section id="hardware" className="py-24 bg-white border-t border-slate-100"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-20"> 
          <div className="mb-16"> 
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 mb-4"> 
              Validated with Real Hardware 
            </h2> 
            <p className="text-lg text-slate-600 max-w-2xl"> 
              A working prototype built to validate reliability under real world technical constraints. 
            </p> 
          </div> 
      
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> 
            {/* Left: Real Hardware Photo with Active Badge */} 
            <div className="relative group"> 
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-teal-brand/30 shadow-sm flex items-center gap-2"> 
                <span className="relative flex h-2 w-2"> 
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span> 
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-brand"></span> 
                </span> 
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-brand-dark">Active Prototype</span> 
              </div> 
              <img 
                src={hardwareImg} 
                alt="SolarPulse hardware prototype with ESP32 microcontroller, 16x2 LCD display showing real-time voltage and solar data, temperature sensor, light sensor, and perfboard circuit" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover border border-slate-100" 
              /> 
            </div> 
      
            {/* Right: Technical Specs & Integrated Quote */} 
            <div className="flex flex-col h-full"> 
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-6"> 
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-brand mb-6">Core Components</h3> 
                <div className="space-y-1"> 
                  <FeatureItem text="ESP32 Wi-Fi microcontroller (edge processing + uplink)" /> 
                  <FeatureItem text="Voltage sensing (output monitoring)" /> 
                  <FeatureItem text="Temperature sensing (thermal conditions)" /> 
                  <FeatureItem text="Light sensing (irradiance proxy)" /> 
                  <FeatureItem text="Local LCD display (real-time visibility)" /> 
                </div> 
              </div> 
      
              {/* The Refined Integrated Quote */} 
              <div className="mt-auto p-6 border-l-2 border-teal-brand bg-teal-tint/30 rounded-r-xl"> 
                <p className="text-slate-700 font-medium leading-relaxed italic text-[15px]"> 
                  "This proves the full loop: physical signals → cloud monitoring → operational decision-making." 
                </p> 
                <p className="text-teal-brand-dark font-bold text-[11px] uppercase tracking-widest mt-3">Technical Validation Complete</p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>

      {/* SECTION 5: DASHBOARD */}
      <Section 
        id="dashboard" 
        title="Production Style Monitoring Dashboard" 
        subtitle="Designed for operational clarity and day-to-day decision-making."
        bgColor="bg-slate-50"
      >
        <p className="text-lg text-slate-600 max-w-3xl mb-12 leading-relaxed">
          The dashboard is designed around how operators detect, investigate, and resolve incidents, from first signal to resolution.
        </p>
          <div className="space-y-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-200/50">
            <BrowserFrame url="solar-pulse.app/dashboard">
              <img 
                src={dashboardImg} 
                alt="SolarPulse Operations Dashboard showing live KPIs, trends, and anomaly detection" 
                className="w-full h-auto object-contain" 
              />
            </BrowserFrame>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-stretch">
            <div className="space-y-10">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">What the dashboard enables</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <PersonaCard 
                  icon={BarChart3} 
                  title="For Operations Teams" 
                  description="Monitor performance at a glance with live KPIs, trend charts, and structured anomaly history." 
                />
                <PersonaCard 
                  icon={Wrench} 
                  title="For Maintenance Crews" 
                  description="Receive alerts with context, including what changed, likely causes, and recommended next steps." 
                />
                <PersonaCard 
                  icon={ShieldCheck} 
                  title="For Managers" 
                  description="Export reports, track incident resolution, and maintain audit trails for operational accountability." 
                />
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm self-start h-full">
              <h4 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Key capabilities</h4>
              <ul className="space-y-5">
                {[
                  'Live KPI cards with deltas and clear update timestamps',
                  'Time-series trends with anomaly markers and operational context',
                  'Anomaly log with severity + observed vs expected comparisons',
                  'Active alerts workflow: acknowledge → assign → ticket → resolve',
                  'Filters for device and time range',
                  'Export/reporting actions'
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-slate-600 text-sm font-medium">
                    <span className="text-[#6B7280]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: AI */}
      <section id="ai" className="py-24 bg-[#F9F7FC]"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-20"> 
          <div className="mb-16"> 
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 mb-4"> 
              AI-Powered Anomaly Detection & Root Cause Analysis 
            </h2> 
            <p className="text-lg text-slate-600 max-w-2xl"> 
              Explainable, probabilistic detection designed for real operational workflows. 
            </p> 
          </div> 
      
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"> 
            {/* Left: AI UI Screenshot (Browser Frame) - 7 columns wide */} 
            <div className="lg:col-span-7"> 
              <BrowserFrame 
                url="solar-pulse.app/ai-incident-analysis" 
                className="shadow-[0_20px_50px_rgba(139,92,246,0.15)]" 
              > 
                <img 
                  src={anomalyImg} 
                  alt="AI-powered root cause analysis interface with confidence scoring and probabilistic recommendations" 
                  className="w-full h-auto object-contain" 
                /> 
              </BrowserFrame> 
            </div> 
      
            {/* Right: Explanation & Responsible AI - 5 columns wide */} 
            <div className="lg:col-span-5 flex flex-col gap-8"> 
              <div> 
                <h3 className="text-xl font-semibold text-slate-800 mb-6">What happens when an anomaly is detected</h3> 
                <div className="space-y-1"> 
                  <FeatureItem text="Incident summary highlighting what changed and potential impact" /> 
                  <FeatureItem text="Evidence timeline comparing observed and expected behavior" /> 
                  <FeatureItem text="Confidence score indicating detection reliability" /> 
                  <FeatureItem text="Ranked root causes with associated likelihoods" /> 
                  <FeatureItem text="Recommended actions to guide next steps" /> 
                  <FeatureItem text="Activity log supporting traceability and audits" /> 
                </div> 
              </div> 
      
              {/* Responsible AI Box */} 
              <div className="bg-white p-8 rounded-2xl border-2 border-teal-brand/30 shadow-sm relative overflow-hidden"> 
                {/* Subtle AI sparkle icon in background */} 
                <div className="absolute top-4 right-4 text-teal-brand/10"> 
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> 
                    <path d="M12 3L14.5 9L21 11.5L14.5 14L12 21L9.5 14L3 11.5L9.5 9L12 3Z" strokeLinecap="round" strokeLinejoin="round"/> 
                  </svg> 
                </div> 
                
                <h4 className="text-teal-brand-dark font-bold text-sm uppercase tracking-widest mb-4">Responsible AI</h4> 
                <ul className="space-y-3"> 
                  <li className="flex items-center gap-3 text-slate-700 text-[14px]"> 
                    <span className="text-teal-brand">✓</span> Probabilistic outputs clearly communicate uncertainty 
                  </li> 
                  <li className="flex items-center gap-3 text-slate-700 text-[14px]"> 
                    <span className="text-teal-brand">✓</span> Human validation is built into decision workflows 
                  </li> 
                  <li className="flex items-center gap-3 text-slate-700 text-[14px]"> 
                    <span className="text-teal-brand">✓</span> Operators retain control over final actions 
                  </li> 
                  <li className="flex items-center gap-3 text-slate-700 text-[14px]"> 
                    <span className="text-teal-brand">✓</span> Explainability supports faster and safer operational decisions 
                  </li> 
                </ul> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>

      {/* Summary Section - What This Project Demonstrates */} 
      <section className="py-24 bg-white"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-20"> 
          <div className="mb-16"> 
            <h2 className="text-4xl font-semibold tracking-tight text-slate-800 mb-4"> 
              What This Project Demonstrates 
            </h2> 
            <p className="text-lg text-slate-600"> 
              SolarPulse showcases AI Product Management through a production-oriented system. 
            </p> 
          </div> 
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
            {/* Card 1: Ownership */} 
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50"> 
              <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-brand mb-6"> 
                <Layers size={20} /> 
              </div> 
              <h4 className="text-lg font-bold text-slate-800 mb-3">Full-Stack Product Ownership</h4> 
              <p className="text-sm text-slate-600 leading-relaxed"> 
                Edge hardware → Cloud pipeline → AI models → React dashboard.
              </p> 
            </div> 
      
            {/* Card 2: Workflow */} 
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50"> 
              <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-brand mb-6"> 
                <Workflow size={20} /> 
              </div> 
              <h4 className="text-lg font-bold text-slate-800 mb-3">Operational UX Design</h4> 
              <p className="text-sm text-slate-600 leading-relaxed"> 
                Detect → Analyze → Recommend → Resolve (complete incident loop).
              </p> 
            </div> 
      
            {/* Card 3: AI Approach */} 
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50"> 
              <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-brand mb-6"> 
                <Cpu size={20} /> 
              </div> 
              <h4 className="text-lg font-bold text-slate-800 mb-3">Human-Centered AI</h4> 
              <p className="text-sm text-slate-600 leading-relaxed"> 
                Confidence scoring (87%) + explainable root causes + operator final decision.
              </p> 
            </div> 
          </div> 
        </div> 
      </section> 
      
      {/* Tech Stack Banner */} 
      <section id="tech" className="pb-24 bg-white"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-20"> 
          <div className="mt-12 border-t border-slate-100 pt-12"> 
            <div className="flex items-center gap-4 mb-12"> 
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-teal-brand whitespace-nowrap"> 
                Technical foundation 
              </h3> 
              <div className="h-[1px] w-full bg-slate-50"></div> 
            </div> 
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10"> 
              <div> 
                <h4 className="text-slate-800 font-bold text-sm mb-3 flex items-center gap-2"> 
                  <div className="w-1 h-1 rounded-full bg-teal-brand"></div> 
                  Edge 
                </h4> 
                <p className="text-slate-500 text-[13px] leading-relaxed"> 
                  ESP32 microcontroller, multi-sensor integration (Voltage, Temp, Light), and local LCD feedback. 
                </p> 
              </div> 
              
              <div> 
                <h4 className="text-slate-800 font-bold text-sm mb-3 flex items-center gap-2"> 
                  <div className="w-1 h-1 rounded-full bg-teal-brand"></div> 
                  Cloud 
                </h4> 
                <p className="text-slate-500 text-[13px] leading-relaxed"> 
                  Time-series data ingestion pipeline with scalable storage and API-ready architecture. 
                </p> 
              </div> 
              
              <div> 
                <h4 className="text-slate-800 font-bold text-sm mb-3 flex items-center gap-2"> 
                  <div className="w-1 h-1 rounded-full bg-teal-brand"></div> 
                  AI Layer 
                </h4> 
                <p className="text-slate-500 text-[13px] leading-relaxed"> 
                  Anomaly detection, confidence scoring, and probabilistic root cause ranking. 
                </p> 
              </div> 
              
              <div> 
                <h4 className="text-slate-800 font-bold text-sm mb-3 flex items-center gap-2"> 
                  <div className="w-1 h-1 rounded-full bg-teal-brand"></div> 
                  Product UI 
                </h4> 
                <p className="text-slate-500 text-[13px] leading-relaxed"> 
                  React-based monitoring dashboard featuring real-time KPIs and incident workflows. 
                </p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-800 mb-6">
            Let’s build better AI products
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Interested in how AI, data, and product systems come together to support clear, reliable decision-making?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:mariama.ba.pm@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-teal transition-all duration-300 group shadow-lg"
            >
              <Mail size={18} />
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/mariama-ba-product-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-semibold hover:border-teal-brand hover:text-teal-brand transition-all duration-300"
            >
              <Linkedin size={18} />
              LinkedIn Profile
              <ArrowUpRight size={14} className="opacity-50" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal-brand rounded-lg flex items-center justify-center text-slate-800 font-bold text-sm">SP</div>
            <span className="text-white font-semibold tracking-tight">SolarPulse</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 Mariama BA
          </p>
          <div className="flex gap-8 text-[13px] font-medium">
            <a href="#architecture" className="text-slate-400 hover:text-teal-brand transition-colors">Architecture</a>
            <a href="#dashboard" className="text-slate-400 hover:text-teal-brand transition-colors">Dashboard</a>
            <a href="#ai" className="text-slate-400 hover:text-teal-brand transition-colors">AI Detection</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
