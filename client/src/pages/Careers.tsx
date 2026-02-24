import { MapPin, Briefcase, Heart, Zap, TrendingUp, Users, Code, Lightbulb, Share2, ArrowRight } from 'lucide-react';
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

export default function Careers() {
  const benefits = [
    { icon: Heart, title: 'High Impact', description: 'Work on solutions that directly affect millions of lives, from financial inclusion to healthcare access.' },
    { icon: Zap, title: 'Technical Challenges', description: 'Solve complex problems using cutting-edge AI, distributed systems, and low-latency infrastructure.' },
    { icon: TrendingUp, title: 'Rapid Growth', description: 'Advance your career with direct mentorship, continuous learning, and leadership opportunities.' },
  ];

  const values = [
    { title: 'Radical Localization', description: 'Building solutions that respect and integrate local nuances and specific community needs across Africa.' },
    { title: 'Resilience', description: 'Finding creative paths forward in challenging environments. We don\'t just solve problems; we outlast them.' },
    { title: 'Open Collaboration', description: 'Ego-free teamwork where the best idea wins, regardless of hierarchy or background.' },
    { title: 'Tech Excellence', description: 'Committed to writing clean, maintainable, and high-performance code that sets the standard.' },
  ];

  const jobs = [
    {
      title: 'Senior Software Engineer',
      location: 'Lagos, Nigeria / Remote',
      type: 'Competitive + Equity',
      description: 'Lead the development of our core platform infrastructure using Rust, Go, and React. You\'ll architect systems that serve millions.',
    },
    {
      title: 'AI Researcher',
      location: 'Nairobi, Kenya / Remote',
      type: 'Competitive + Equity',
      description: 'Develop localized AI models that understand African languages, behaviors, and market dynamics.',
    },
    {
      title: 'Product Designer',
      location: 'Cape Town, SA / Remote',
      type: 'Competitive + Equity',
      description: 'Design intuitive, accessible products for low-bandwidth environments. Your work will reach millions.',
    },
  ];

  const careersImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/R5CQJKqI2GHsNAPnGkyoE6-img-3_1771937788000_na1fn_Y2FyZWVycy1oZXJvLXRlYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L1I1Q1FKS3FJMkdIc05BUG5Ha3lvRTYtaW1nLTNfMTc3MTkzNzc4ODAwMF9uYTFmbl9ZMkZ5WldWeWN5MW9aWEp2TFhSbFlXMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FumdWJyvS29N8aGY9NtnQ-OF540-nvqbbVUVGblahShgVeCB0VorWv4A6MIsvyMSA-l1XwMIcDVVmdSEdImBXDRllIRBl5ynUVyimLAxYLxCU2h43m8eMAkjX43I2YYP6aeiwVuN9IdrbqkKoUaGPch6usigieqRU163Jiw5D3yO5Y46iSwAkEF2cRvDt4ZgKbKGF6hBSoBBSV04O9ShMxStqCjeglPqTkVpZ-uO6ejL-au~6mJyQ9mHxoCq7qxSbqWqrUScJjnXki5GUPFdbQd4LxCLi0PSOSmNbH60dKGKs9PZldx81NOg5vb2C2sbedWQB4WA94-VLLaC830FSg__';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={careersImageUrl} 
            alt="Team" 
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        </div>

        <motion.div 
          className="container relative z-10 flex flex-col justify-center min-h-[500px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build the Future of <span className="text-accent">Africa</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Join a mission-driven team of engineers and innovators dedicated to solving the continent's most pressing technical challenges through radical innovation.
          </motion.p>
          <motion.button variants={fadeUp} className="px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 w-fit">
            View Open Roles
          </motion.button>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest">WHY JOIN US?</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">Impact, Innovation, & Growth</h2>
            <p className="text-muted-foreground">
              We provide the environment for you to do the best work of your career while making a real difference across the continent.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="card-base">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Culture & Values</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are defined by how we work together and the principles that guide our decision-making every day.
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div variants={fadeUp} key={index} className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-accent mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold">Open Roles</h2>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm border border-border rounded-lg hover:border-accent transition-colors">
                Remote Friendly
              </button>
              <button className="px-4 py-2 text-sm border border-border rounded-lg hover:border-accent transition-colors">
                Full Time
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="card-base">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70 mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-accent" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-foreground/70">{job.description}</p>
                  </div>
                  <button className="px-6 py-2 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Don't see a fit? <span className="text-accent font-semibold">Send us an open application</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
