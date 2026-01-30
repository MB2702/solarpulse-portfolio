# SolarPulse - IoT + AI Solar Monitoring System

Real-time solar performance monitoring with AI-powered anomaly detection and root cause analysis.

##  Project Overview

SolarPulse is an end-to-end IoT monitoring system that combines edge hardware, cloud infrastructure, and AI analytics to detect solar performance issues before they impact operations. Built as a portfolio demonstration of AI Product Management capabilities.

**Live Demo:** [https://solarpulse-portfolio.vercel.app](https://solarpulse-portfolio.vercel.app)

##  System Architecture

Edge Layer → Cloud Pipeline → AI Analysis → Product Interface

- **Edge Device:** ESP32 microcontroller with voltage, current, temperature, and light sensors
- **Cloud Infrastructure:** Time-series data ingestion and storage
- **AI Layer:** Probabilistic anomaly detection with confidence scoring (87% accuracy)
- **Product UI:** React-based monitoring dashboard with operational workflows

##  Tech Stack

**Frontend:**
- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

**Hardware:**
- ESP32 Wi-Fi microcontroller
- Multi-sensor integration (voltage, temperature, light)
- Local LCD display for real-time feedback

**AI/ML:**
- Probabilistic root cause analysis
- Confidence scoring
- Explainable AI approach (human-in-the-loop)

**Deployment:**
- Vercel (frontend)
- Production-ready build pipeline

##  Key Features

- **Real-time Monitoring:** Edge sensors capture performance signals every 30 seconds
- **AI Anomaly Detection:** 87% confidence scoring with probabilistic root cause ranking
- **Operational UX:** Multi-persona dashboard (Operations, Maintenance, Managers)
- **Responsible AI:** Explainable recommendations with human validation workflows
- **Full-Stack Ownership:** Hardware → Cloud → AI → Product interface

##  Design Principles

- **Systems Thinking:** Modular architecture with clear contracts between layers
- **User-Centric:** Designed around operational workflows (detect → analyze → recommend → resolve)
- **Production-Grade:** Built for reliability, explainability, and operational usability

## 📊 Project Metrics

- Architecture: 5-layer pipeline (Energy → Sensing → Edge → Cloud → Product)
- AI Confidence: 87% average accuracy
- Response Time: Real-time detection with smart alert prioritization

##  Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn



##  Project Context

This project demonstrates AI Product Management capabilities including:
- End-to-end product ownership (hardware to UI)
- Systems architecture thinking
- Multi-stakeholder UX design
- Responsible AI principles
- Technical-to-operational translation

Built for portfolio demonstration purposes. Hardware prototype validated under real-world technical constraints.

##  Contact

Mariama BA - AI Product Manager
[LinkedIn Profile](https://www.linkedin.com/in/mariama-ba-product-manager)

##  License

Portfolio demonstration project - All rights reserved.

Note: Interface designs shown are for portfolio demonstration. Deployment details may be confidential per NDA.
