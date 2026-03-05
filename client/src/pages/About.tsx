import { MapPin, Code, Users, Network, Search, TrendingUp, Sparkles, Zap } from 'lucide-react';
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

export default function About() {
  const coreValues = [
    { icon: MapPin, title: 'Radical Localization', description: 'Tailoring global tech standards to local realities.' },
    { icon: Code, title: 'Resilience by Design', description: 'Building systems that thrive in variable environments.' },
    { icon: Users, title: 'Empathetic Innovation', description: 'Designing solutions with deep user understanding.' },
    { icon: Network, title: 'Ecosystem Thinking', description: 'Connecting data across industries and borders.' },
  ];

  const impactAreas = [
    { icon: Search, title: 'Identify', description: 'Finding the untapped diamonds in the rough through community scouting.' },
    { icon: Code, title: 'Develop', description: 'Intensive mentorship and skill acceleration programs.' },
    { icon: TrendingUp, title: 'Scale', description: 'Connecting startups with global venture networks and partners.' },
    { icon: Sparkles, title: 'Empower', description: 'Creating leaders who go back and seed their own communities.' },
  ];

  const teamImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/R5CQJKqI2GHsNAPnGkyoE6-img-3_1771937788000_na1fn_Y2FyZWVycy1oZXJvLXRlYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L1I1Q1FKS3FJMkdIc05BUG5Ha3lvRTYtaW1nLTNfMTc3MTkzNzc4ODAwMF9uYTFmbl9ZMkZ5WldWeWN5MW9aWEp2TFhSbFlXMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FumdWJyvS29N8aGY9NtnQ-OF540-nvqbbVUVGblahShgVeCB0VorWv4A6MIsvyMSA-l1XwMIcDVVmdSEdImBXDRllIRBl5ynUVyimLAxYLxCU2h43m8eMAkjX43I2YYP6aeiwVuN9IdrbqkKoUaGPch6usigieqRU163Jiw5D3yO5Y46iSwAkEF2cRvDt4ZgKbKGF6hBSoBBSV04O9ShMxStqCjeglPqTkVpZ-uO6ejL-au~6mJyQ9mHxoCq7qxSbqWqrUScJjnXki5GUPFdbQd4LxCLi0PSOSmNbH60dKGKs9PZldx81NOg5vb2C2sbedWQB4WA94-VLLaC830FSg__';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-28 pb-12 border-b border-border overflow-hidden">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6">About Us</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 max-w-3xl">
            7to7 Tech Hub is a globally recognized innovation centre that has been the main catalyst for regional technology acceleration. We empower local talent and bridge the gap in the global technology ecosystem through sustainable innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-6 mb-12">
            <div className="accent-line"></div>
            <h2 className="text-3xl font-bold">Who We Are</h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="card-base">
              <h3 className="text-2xl font-semibold text-accent mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To identify and nurture high-potential tech talent from underserved regions, equipping them with the tools and networks needed to compete on a global stage.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="card-base">
              <h3 className="text-2xl font-semibold text-accent mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                A world where geographical boundaries do not limit technological potential, and local innovation drives global solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">CORE VALUES</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="bg-background rounded-xl p-6 border border-border">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Core Philosophy Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Our Core Philosophy: Built for the Continent</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground/70 leading-relaxed mb-8">
                While global technology often assumes high-bandwidth environments and Western consumer behaviors, 7to7 Tech Hub operates on the ground. We identify systemic friction points in African society and apply lean, robust, and intelligent technology to resolve them.
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-500 font-bold">⚠</span>
                  </div>
                  <h3 className="text-2xl font-semibold">The Challenge</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Traditional "Big Tech" often overlooks the raw potential found in emerging markets. This "innovation gap" creates a cycle of dependency and brain drain, where local talent must leave their communities to find success.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-accent">The 7to7 Approach</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We flip the script. Instead of forcing global models onto local markets, we use our 7-pillar framework to build self-sustaining tech ecosystems from the ground up, ensuring that innovation stays and grows locally.
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden">
              <img 
                src={teamImageUrl} 
                alt="Team collaboration" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Impact</h2>
            <p className="text-muted-foreground">More than numbers, we measure success through human potential.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="bg-background rounded-xl p-8 border border-border text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-sm text-foreground/70">{area.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
