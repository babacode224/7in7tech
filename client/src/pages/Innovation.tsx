import { Zap, Smartphone, Wifi, RotateCcw, MapPin, Brain, Code, Cpu, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Innovation() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Advanced AI & Machine Learning',
      description: 'Developing localized models that understand African nuances, dialects, and behavioral patterns to bridge the gap in digital accessibility.',
      features: ['Natural Language Processing', 'Behavioral Analytics'],
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Building high-performance, scalable platforms using modern frameworks like Rust, Go, and React, ensuring low-latency experiences across all devices.',
      features: ['Distributed Systems', 'Microservices Architecture'],
    },
    {
      icon: Cpu,
      title: 'Infrastructure Hybridization',
      description: 'Combining edge computing with cloud capabilities for low-bandwidth environments, ensuring your application stays functional anywhere.',
      features: ['Edge Data Syncing', 'Localized Server Clusters'],
    },
  ];

  const resilience = [
    { icon: Smartphone, title: 'Mobile-First', description: 'Optimized for high-density mobile usage across all screen sizes and bandwidth constraints.' },
    { icon: Wifi, title: 'Offline-First', description: 'Functional without constant internet connectivity. Local data sync ensures zero downtime.' },
    { icon: RotateCcw, title: 'Resilient', description: 'Auto-recovery and fault tolerance in visible networks.' },
    { icon: MapPin, title: 'Localized', description: 'Region-specific suitability and processing.' },
  ];

  const innovationImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/R5CQJKqI2GHsNAPnGkyoE6-img-4_1771937808000_na1fn_aW5ub3ZhdGlvbi10ZWNoLXN0YWNr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L1I1Q1FKS3FJMkdIc05BUG5Ha3lvRTYtaW1nLTRfMTc3MTkzNzgwODAwMF9uYTFmbl9hVzV1YjNaaGRHbHZiaTEwWldOb0xYTjBZV05yLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ooOlkH5q9pJQGBA-q8tSmAuX5mYPev6u~KNTQkshWU2XrI7XvVWBIf~ANlvauHuDau-o86nKV5Nu0O~Bpm5RH5ldhWgECivWO3Asy5B-ANricOsgjU~x-A782TdtdHPvSFT6DMI2nElww0pEH6KhZGCFp3s72dBEV9aB58jszEwA~pu-tM6ynNAHyaVhBr7euBDcUEiXYJ5gJWR0Jf9QSpduEbbTxlHV2YyuHcTSyBWeGKyDtLoRUiU83itEARyK6PvagrfZvrG-7JX8plqdRe2iAj0sW3jNAxomTdfHZdq~djD6yF0lFoJsq30AxjzhrZSkyTGb0cwTFZH3S7AuTw__';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-12 border-b border-border">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-accent text-sm font-semibold tracking-widest">FUTURE-READY ENGINEERING</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6">
            Innovation <span className="text-accent">Hub</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 max-w-3xl">
            Pioneering high-performance technical capabilities engineered for the African digital landscape. Our stack is designed for resilience, speed, and massive scale.
          </motion.p>
        </motion.div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Capabilities & Innovation Stack</h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="card-base">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                  <p className="text-foreground/70 mb-6">{cap.description}</p>
                  <ul className="space-y-2">
                    {cap.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle size={16} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Resilience Section */}
          <div className="bg-card rounded-xl p-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Built for Resilience & <span className="text-accent">Regional Realities</span>
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Our architecture isn't just "cloud-native"—it's "reality-native." We prioritize Mobile-First and Offline-First patterns to ensure zero downtime in low-bandwidth environments.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Intelligent Data Synchronization</p>
                      <p className="text-sm text-foreground/70">Sophisticated conflict resolution for offline data entry.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Edge-Computing Acceleration</p>
                      <p className="text-sm text-foreground/70">Processing data closer to the user to minimize latency spikes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Progressive Enhancement</p>
                      <p className="text-sm text-foreground/70">Ensuring core features work on even the most basic smart devices.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-xl overflow-hidden">
                <img 
                  src={innovationImageUrl} 
                  alt="Innovation tech stack" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resilience Pillars */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {resilience.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="bg-background rounded-xl p-6 border border-border text-center">
                  <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="section-title mb-6">Join the Technical Revolution</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're looking for world-class engineers to help us redefine the African tech stack. If you're passionate about building resilient systems for real-world challenges, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105">
              View Engineering Roles
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold bg-transparent border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300">
              Technical Roadmap
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
