import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-48 pb-12 border-b border-border">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 max-w-3xl">
            Have a question or partnership opportunity? We'd love to hear from you. Reach out to our team and let's explore how we can work together.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Contact Information */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:hello@7to7.tech" className="text-foreground/70 hover:text-accent transition-colors">
                      hello@7to7.tech
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href="tel:+254798985410" className="text-foreground/70 hover:text-accent transition-colors">
                      +254 798 985 410
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Locations</h3>
                    <div className="text-foreground/70 space-y-2">
                      <p>Lagos, Nigeria</p>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
