import { Link } from 'wouter';
import { Home } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center">
        <div className="container text-center py-20">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>

          <Link href="/">
            <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105">
              <Home size={18} />
              Back to Home
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
