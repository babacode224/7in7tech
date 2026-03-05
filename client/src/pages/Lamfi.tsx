import { CheckCircle, MessageCircle, Shield, Zap, Users, TrendingUp, ArrowRight, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Lamfi() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const heroImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/qIis4s7cfgCk955o9VEKY8-img-1_1771942429000_na1fn_bGFtZmktaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L3FJaXM0czdjZmdDazk1NW85VkVLWTgtaW1nLTFfMTc3MTk0MjQyOTAwMF9uYTFmbl9iR0Z0Wm1rdGFHVnlidy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gvQUQ5eUd-skbFcnAY1YhYyCQocgK8sIciVx58DIP~msZT-4TtzUJaYsKh7bM7Y0NUA0BS27OtmNukKmp60hsLdkLjrPNnNZLbUYMhSCiNjP9nN-f2357vwvlHiTqdP3SireHRzNujEvKJn-lQwV9VNT1JRwKPmNA1gNQph39-tsA000yRFX~gwVUiQ-n0DPvuheDJJ2uSTVyVlXZ2CFJoxAg2mxs7xNrSsJAGn0CkCmDC3J73GjazTX9HQsMJCYGXqNOtJbls5K5cxHyE9W7X5Ei8RH6YuL0uDTnpNOTsWOi3-EdV8BrJ9xKcVY1IibGno~Tp4KMPgnL5xHnGg2oQ__';
  const mockupImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/ms0jJe3PHhgc2nX8prAW1a/sandbox/qIis4s7cfgCk955o9VEKY8-img-2_1771942418000_na1fn_bGFtZmktYXBwLW1vY2t1cA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXMwakplM1BIaGdjMm5YOHByQVcxYS9zYW5kYm94L3FJaXM0czdjZmdDazk1NW85VkVLWTgtaW1nLTJfMTc3MTk0MjQxODAwMF9uYTFmbl9iR0Z0Wm1rdFlYQndMVzF2WTJ0MWNBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m36aCCQh1VtEDHae42TZKKg8jj5kmPjS6WanO9cj-YI8sHYUvtWAHm7m4ByhiQazJjDD1R9ooAawoyggI30cCgLD-3h5~0Y85ZYi39sYO~fnLyg9z7Oq96RbATNCHx4--5XZLJwRzzD3~740DD279gvbaOuRkhnYFGJe6UpPRrKxe2NvdxL-6TvWz0fD5Lk0VLWlTmpnbcO432EA5hZm0eSRvidyjFeJCbD23AP~H5hPmzK~a57VmJZwNv8PjKfQC5JCcd8UsnZu-oiY1~QQUpds9QJgN~Cq~kX5Tvmw3bg7bt91AS10HqJIxcqJbt8uylj4cXJUBqxDT8kn-0XVNQ__';

  const problems = [
    {
      icon: Shield,
      title: 'Safety & Trust Issues',
      description: 'Informal channels like WhatsApp groups lack accountability and verification, creating high fraud risks.',
    },
    {
      icon: Zap,
      title: 'Low Visibility',
      description: 'Services and goods are difficult to discover through word-of-mouth and fragmented channels.',
    },
    {
      icon: TrendingUp,
      title: 'Information Asymmetry',
      description: 'Impossible to evaluate quality or reliability of goods and services before purchase.',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Student Marketplace',
      description: 'Buy and sell items with confidence. All users are verified students or NYSC members.',
      items: ['Student ID verification', 'Verified badges', 'Campus-only listings'],
    },
    {
      icon: MessageCircle,
      title: 'In-App Chat',
      description: 'Communicate directly with buyers and sellers through secure, item-linked conversations.',
      items: ['Real-time messaging', 'Listing-specific chats', 'Safe communication'],
    },
    {
      icon: Users,
      title: 'Student Services Marketplace',
      description: 'Offer skills like tutoring, graphic design, repairs, and more to earn extra income.',
      items: ['Service listings', 'Booking management', 'Ratings & reviews'],
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Sign Up & Verify',
      description: 'Register with your phone number and verify with your Student ID or NYSC call-up letter.',
    },
    {
      number: '2',
      title: 'Browse or List',
      description: 'Explore items and services from verified students, or create your own listings.',
    },
    {
      number: '3',
      title: 'Connect & Chat',
      description: 'Message sellers or buyers directly to ask questions and negotiate prices.',
    },
    {
      number: '4',
      title: 'Meet & Transact',
      description: 'Meet at a safe campus location and complete the transaction offline.',
    },
  ];

  const testimonials = [
    {
      name: 'Chioma O.',
      school: 'University of Lagos',
      quote: 'I sold my textbooks within days of listing them. The verification system made me feel safe trading with other students.',
      rating: 5,
    },
    {
      name: 'Tunde A.',
      school: 'OAU, Ile-Ife',
      quote: 'Found affordable furniture from a verified seller. No haggling on WhatsApp—just clear prices and direct communication.',
      rating: 5,
    },
    {
      name: 'Zainab M.',
      school: 'BUA, Zaria',
      quote: 'Offering tutoring services on Lamfi has been amazing. Students trust me because I\'m verified, and I\'ve earned extra income.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl}
            alt="Lamfi student marketplace"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>

        <div className="container relative z-10 flex flex-col justify-center min-h-[500px]">
          <div className="mb-6">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest">STUDENT MARKETPLACE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Trusted Marketplace for <span className="text-yellow-500">Campus Life</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Lamfi is a verified student marketplace where Nigerian university students and NYSC members can safely buy, sell, and trade goods and services within their campus community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#waitlist" className="px-6 py-3 rounded-lg font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-300 hover:scale-105 w-fit">
              Join the Waitlist
            </a>
            <a href="#how-it-works" className="px-6 py-3 rounded-lg font-semibold border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 w-fit">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest">THE PROBLEM</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">Why Students Need Lamfi</h2>
            <p className="text-muted-foreground max-w-3xl">
              Currently, buying and selling among students happens through informal, fragmented channels like WhatsApp groups and word-of-mouth. This creates trust issues, low visibility, and information gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-8 border border-border hover:border-yellow-500/50 transition-colors">
                  <Icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-foreground/70">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="mb-12">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest">THE SOLUTION</span>
            <h2 className="text-4xl font-bold mt-4">Lamfi: Your Campus Marketplace</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-background rounded-xl p-8 border border-border">
                  <Icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle size={16} className="text-yellow-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* App Mockup */}
          <div className="rounded-xl overflow-hidden border border-border">
            <img 
              src={mockupImageUrl}
              alt="Lamfi app mockup"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container">
          <div className="mb-12">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest">HOW IT WORKS</span>
            <h2 className="text-4xl font-bold mt-4">Get Started in 4 Simple Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-yellow-500" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="mb-12">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest">STUDENT VOICES</span>
            <h2 className="text-4xl font-bold mt-4">What Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Be Among the First</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Lamfi is coming soon to Nigerian universities. Join the waitlist to get early access and exclusive updates.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Join Waitlist <Mail size={18} />
              </button>
            </form>

            {submitted && (
              <div className="p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 font-medium">
                ✓ Thanks for joining! Check your email for updates.
              </div>
            )}

            <p className="text-sm text-foreground/60">
              No spam. We'll only send you updates about Lamfi's launch and exclusive features.
            </p>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Coming Next</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">Phase 2: Student Housing Hub</h3>
              <p className="text-foreground/70">
                Find off-campus housing with verified student reviews. Simplifying the search for safe, affordable accommodation.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">Phase 3: Campus Networking</h3>
              <p className="text-foreground/70">
                Connect with peers, join academic groups, and build your professional network within your campus community.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">Phase 4: Advanced Features</h3>
              <p className="text-foreground/70">
                Premium accounts, in-app payments, and advanced monetization features for sellers and service providers.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">Expansion Plans</h3>
              <p className="text-foreground/70">
                Scale beyond Nigeria to other African universities, creating a continent-wide student marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Campus Revolution?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Lamfi is building the future of student commerce. Be part of it.
          </p>
          <a href="#waitlist" className="inline-block px-8 py-4 rounded-lg font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-300 hover:scale-105">
            Join the Waitlist Now <ArrowRight className="inline ml-2" size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
