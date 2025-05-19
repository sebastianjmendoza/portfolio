
import { useEffect, useRef, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const OtherWork = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Immediately enable scrolling in case it was disabled
    document.body.style.overflow = '';
    
    // Set loaded state on mount
    setPageLoaded(true);
    
    // Force scroll to top with multiple approaches
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Check if we came from a manual navigation
    const fromManualNav = sessionStorage.getItem('manualNavigation');
    if (fromManualNav) {
      // Clear the flag
      sessionStorage.removeItem('manualNavigation');
      
      // Apply additional fixes for the specific scenario
      setTimeout(() => {
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
        
        // Force another scroll reset
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Make page visible
        if (pageRef.current) {
          pageRef.current.style.visibility = 'visible';
          pageRef.current.style.opacity = '1';
        }
      }, 50);
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-auto">
      <Header />
      <div 
        ref={pageRef}
        className={`opacity-0 transition-opacity duration-1000 ${pageLoaded ? 'opacity-100' : ''}`}
        style={{ minHeight: '100vh' }}
      >
        <section className="pt-32 pb-20">
          <div className="section-container max-w-7xl mx-auto px-6">
            <h1 className="section-title text-4xl md:text-5xl font-playfair font-bold text-center mb-6">Other Work</h1>
            <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
              A collection of various projects and designs that showcase different styles and techniques I've explored over the years.
            </p>
            
            <Gallery />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OtherWork;
