import { ArrowRight, BookOpen, DollarSign, Leaf, Stethoscope, Zap, ShoppingBag } from 'lucide-react';
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

export default function Solutions() {
  const solutions = [
    {
      icon: ShoppingBag,
      title: 'Lamfi',
      subtitle: 'Student marketplace for buying, selling, and trading campus goods & services',
      description: 'A trusted, verified marketplace for Nigerian university students to safely buy, sell, and exchange items and services within their campus community.',
      link: '/lamfi',
    },
    {
      icon: BookOpen,
      title: 'EdTech',
      subtitle: 'Low-data educational platforms & skill-acquisition software',
      description: 'Democratizing access to world-class technical education for African youth, regardless of their location.',
    },
    {
      icon: DollarSign,
      title: 'FinTech',
      subtitle: 'Localized payment gateways & offline transaction tools',
      description: 'Bridging the gap between traditional cash economies and the digital future without alienating the unbanked.',
    },
    {
      icon: Leaf,
      title: 'AgriTech',
      subtitle: 'Supply chain optimization & data-driven yield forecasting',
      description: 'Empowering smallholder farmers with AI tools to predict weather patterns and connect directly to markets.',
    },
    {
      icon: Stethoscope,
      title: 'HealthTech',
      subtitle: 'AI-driven diagnostics & telemedicine',
      description: 'Reducing mortality rates by providing "clinic-in-your-pocket" capabilities for underserved regions.',
    },
    {
      icon: Zap,
      title: 'Digital Platforms',
      subtitle: 'Scalable infrastructure & localized tech systems',
      description: 'Building robust digital foundations to support the growth of African businesses and communities.',
    },
  ];

  const solutionsImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/R5CQJKqI2GHsNAPnGkyoE6-img-1_1771937791000_na1fn_aGVyby1vZmZpY2UtdGVhbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L1I1Q1FKS3FJMkdIc05BUG5Ha3lvRTYtaW1nLTFfMTc3MTkzNzc5MTAwMF9uYTFmbl9hR1Z5YnkxdlptWnBZMlV0ZEdWaGJRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HuurXOawGyvOKW9X3vNrmTllYAlSUEBhwmuLjJVR3BHZtkbzER7lXUX0ckN3HdI2~kpG5AoUwz6yWsaPsrknPuq2Yeup66ngDnu8fewkm88yJlpJeA-VqE1GmMRYMfePMXSj0Yf-GAKW7u9Z~B2SttTfwNm0hBjPm0M5V8j5or9NzHp0tIrYxtDbWoO-ySC4p4lxATcwCnd9t2FiOKU5V1RSo55hn4OekUlMGwdPSCDZwzMoX1PKDCcc1EjkoH2lu6ipHrLCy-1MgE3IZd5QFeeuPW7noCTSLouC46FBBBZEZJRf4qEzLU2u~0l0dyjInYxYV5VrxbPUTkJVeN2Wxg__';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-accent text-sm font-semibold tracking-widest">OUR SOLUTIONS</span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Driving Impact Across <span className="text-accent">Key Sectors</span>
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                7to7 Tech Hub deploys its expertise across the most critical pillars of African development, building the infrastructure for a modern, digital Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Explore Solutions <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative h-96 rounded-xl overflow-hidden">
              <img 
                src={solutionsImageUrl} 
                alt="Solutions" 
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="bg-background rounded-xl p-8 border border-border hover:border-accent/50 transition-colors">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-accent text-sm font-semibold mb-4">{solution.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed mb-6">{solution.description}</p>
                  <a href={solution.link || '#'} className="text-accent text-sm font-medium hover:underline">Learn more →</a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to partner with us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building the digital backbone of Africa's future. Our experts are ready to collaborate on high-impact projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Contact Our Experts <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
