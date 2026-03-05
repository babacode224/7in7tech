import { ArrowRight, Stethoscope, Leaf, DollarSign, BookOpen, ZapIcon, Truck, Heart, Zap, Users, Mail, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const AfricaMap = lazy(() => import('@/components/AfricaMap'));

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

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const heroImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/R5CQJKqI2GHsNAPnGkyoE6-img-1_1771937791000_na1fn_aGVyby1vZmZpY2UtdGVhbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L1I1Q1FKS3FJMkdIc05BUG5Ha3lvRTYtaW1nLTFfMTc3MTkzNzc5MTAwMF9uYTFmbl9hR1Z5YnkxdlptWnBZMlV0ZEdWaGJRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HuurXOawGyvOKW9X3vNrmTllYAlSUEBhwmuLjJVR3BHZtkbzER7lXUX0ckN3HdI2~kpG5AoUwz6yWsaPsrknPuq2Yeup66ngDnu8fewkm88yJlpJeA-VqE1GmMRYMfePMXSj0Yf-GAKW7u9Z~B2SttTfwNm0hBjPm0M5V8j5or9NzHp0tIrYxtDbWoO-ySC4p4lxATcwCnd9t2FiOKU5V1RSo55hn4OekUlMGwdPSCDZwzMoX1PKDCcc1EjkoH2lu6ipHrLCy-1MgE3IZd5QFeeuPW7noCTSLouC46FBBBZEZJRf4qEzLU2u~0l0dyjInYxYV5VrxbPUTkJVeN2Wxg__';
  
  const africaMapUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/R5CQJKqI2GHsNAPnGkyoE6-img-5_1771937784000_na1fn_YWZyaWNhLW1hcC1hY2NlbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L1I1Q1FKS3FJMkdIc05BUG5Ha3lvRTYtaW1nLTVfMTc3MTkzNzc4NDAwMF9uYTFmbl9ZV1p5YVdOaExXMWhjQzFoWTJObGJuUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pMNIjdL6C5JrYfi3EXKdcOUaDl-8m0Lx4giYKXazyzcUdJ9GfbmscyRcukA95KtdWLsdmq4SkPmmn-VRDzSagqWLajjCrvCs02D4Des0Ea~2ftiQO6kWYcbO5ETsZdTkDi81PqJSebpjudwbPQehwmFVDJHjFFMrybAUO~9S4WBWXxs4Nll~Z3f4Hz5HpG6FfGJy6BQCwc3MXxbR-U2B1FxrgwdHT-nrrtnUh0~ZIzZ-sBqpH8CryiGQn4Rvvr3fp~CtlZYwBq2wQHe7G2LJEKsB2ywbNPymSOcNP2XnIA6uuIt-svJrvs9RPbmVRQpsjbuB73sP8Un~dy-SVC2T5g__';

  // 7to7 Approach - 4 Steps
  const approach = [
    { 
      number: '01',
      title: 'Problem Analysis', 
      description: 'Identifying foundational challenges and understanding real-world market needs.' 
    },
    { 
      number: '02',
      title: 'Strategic Design', 
      description: 'Architecting purposeful solutions tailored for resilience and maximum efficiency.' 
    },
    { 
      number: '03',
      title: 'Technology Build', 
      description: 'Engineering robust and scalable platforms using advanced, localized tech.' 
    },
    { 
      number: '04',
      title: 'Growth & Scale', 
      description: 'Deploying and expanding integrated solutions to drive sustainable African impact.' 
    },
  ];

  // All Sectors with Original Descriptions
  const sectors = [
    { 
      icon: BookOpen, 
      label: 'EdTech', 
      title: 'Low-data educational platforms & skill-acquisition software',
      description: 'Democratizing access to world-class technical education for African youth, regardless of their location.' 
    },
    { 
      icon: DollarSign, 
      label: 'FinTech', 
      title: 'Localized payment gateways & offline transaction tools',
      description: 'Bridging the gap between traditional cash economies and the digital future without alienating the unbanked.' 
    },
    { 
      icon: Leaf, 
      label: 'AgriTech', 
      title: 'Supply chain optimization & data-driven yield forecasting',
      description: 'Empowering smallholder farmers with AI tools to predict weather patterns and connect directly to markets.' 
    },
    { 
      icon: Stethoscope, 
      label: 'HealthTech', 
      title: 'AI-driven diagnostics & telemedicine',
      description: 'Reducing mortality rates by providing "clinic-in-your-pocket" capabilities for underserved regions.' 
    },
    { 
      icon: ZapIcon, 
      label: 'Digital Platforms', 
      title: 'Scalable infrastructure & localized tech systems',
      description: 'Building robust digital foundations to support the growth of African businesses and communities.' 
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: '7to7 Tech Hub transformed how we approach healthcare delivery in rural areas. Their telemedicine solution has reached over 5,000 patients in the past year alone.',
      author: 'Dr. Amara Okonkwo',
      title: 'Healthcare Director, East Africa'
    },
    {
      quote: 'The fintech platform they built for us seamlessly bridges the gap between traditional commerce and digital payments. Our transaction volume increased by 300%.',
      author: 'James Kipchoge',
      title: 'CEO, Market Solutions Ltd'
    },
    {
      quote: 'Working with 7to7 on our agricultural data platform was game-changing. Farmers now have real-time insights to optimize their yields and reduce waste.',
      author: 'Zainab Hassan',
      title: 'Founder, AgriConnect Kenya'
    },
  ];

  // Team Members
  const team = [
    {
      name: 'Amara Okonkwo',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in African tech innovation and digital transformation.'
    },
    {
      name: 'Kwame Mensah',
      role: 'CTO & Co-Founder',
      bio: 'AI specialist and software architect passionate about building resilient systems for Africa.'
    },
    {
      name: 'Zainab Hassan',
      role: 'Head of Product',
      bio: 'Product strategist focused on user-centric design and solving real African problems.'
    },
    {
      name: 'James Kipchoge',
      role: 'Head of Partnerships',
      bio: 'Strategic relationship builder connecting 7to7 with key stakeholders across the continent.'
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage('Thank you for subscribing! Check your email for updates.');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            alt="Team collaboration" 
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        </div>

        <motion.div 
          className="container relative z-10 flex flex-col justify-center min-h-[600px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advancing Africa's Digital Future <span className="text-accent">Through Purpose-Driven Innovation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-foreground/80 mb-8 leading-relaxed">
              We design and scale high-impact technology solutions across education, finance, agriculture, health, and digital systems - building integrated platforms that address foundational challenges, improve operational efficiency, expand access to essential services, and create sustainable economic value across African markets.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="cta-primary flex items-center justify-center gap-2">
                Learn More About Our Impact <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Re-engineering Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-line mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Re-engineering the <span className="text-accent">African Experience</span>
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                7to7 Tech Hub Limited is a mission-driven technology powerhouse dedicated to re-engineering the African experience through high-impact, localized digital solutions. We specialize in the development of advanced software, Artificial Intelligence (AI), and hybrid technical frameworks designed specifically for the "common African user."
              </p>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                <p className="text-foreground italic font-semibold">
                  "Our existence is defined by a single mandate: Solving real problems, not creating digital noise."
                </p>
              </div>

              <p className="text-foreground/70 mb-8 leading-relaxed">
                While global technology often assumes high-bandwidth environments and Western consumer behaviors, 7to7 Tech Hub operates on the ground. We identify systemic friction points in African society and apply lean, robust, and intelligent technology to resolve them.
              </p>
            </div>
            <div className="relative min-h-[400px] h-full rounded-xl overflow-hidden aspect-square md:aspect-auto">
              <Suspense fallback={<div className="flex items-center justify-center h-full w-full text-foreground/50">Loading Map...</div>}>
                <AfricaMap />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* The 7to7 Approach Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="accent-line"></div>
            </div>
            <h2 className="section-title">The 7to7 Approach</h2>
            <p className="text-muted-foreground text-lg">From Idea to Scalable Execution</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {approach.map((step, index) => (
              <motion.div variants={fadeUp} key={index} className="card-base">
                <div className="text-4xl font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Driving Impact Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Driving Impact Across Key Sectors</h2>
            <p className="text-muted-foreground">7to7 Tech Hub deploys its expertise across the most critical pillars of African development, building the infrastructure for a modern, digital Africa.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div variants={fadeUp} key={index} className="card-base hover:border-accent/50 transition-colors">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{sector.label}</h3>
                  <p className="text-sm text-accent/80 font-medium mb-3">{sector.title}</p>
                  <p className="text-foreground/70 text-sm">{sector.description}</p>
                  <a href="#" className="text-accent text-sm font-medium mt-4 inline-block hover:underline">Learn more →</a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">Hear from partners and clients who are transforming their sectors with our solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-base">
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-accent">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-muted-foreground">Passionate innovators and technologists dedicated to transforming Africa's digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-base text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-bold mb-6 italic">
              "The brilliance of Africa lies in its resilience. Our technology is simply the mirror that reflects and amplifies that brilliance to the world."
            </p>
            <p className="text-accent font-semibold mb-8">— 7to7 Tech Hub</p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container text-center">
          <h2 className="section-title mb-6">Join Us in Building Africa's Future</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're looking for passionate engineers, designers, and innovators to help us redefine what's possible in African tech.
          </p>
          <button className="cta-primary inline-flex items-center gap-2">
            Explore Opportunities <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Stay Updated on Africa's Digital Future</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for insights, updates, and opportunities to join us in building transformative technology solutions.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button 
                type="submit"
                className="cta-primary px-6 py-3 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {subscribeMessage && (
              <div className="flex items-center justify-center gap-2 text-accent">
                <CheckCircle2 size={18} />
                <p className="text-sm">{subscribeMessage}</p>
              </div>
            )}

            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
