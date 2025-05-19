
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-fade-in');
          elements.forEach(el => {
            el.classList.add('opacity-100');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 opacity-0 animate-fade-in">
            Let's Bring Your <span className="text-burgundy">Vision</span> to Life
          </h2>
          
          <div className="grid gap-10 md:gap-16">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg mb-8">I'd love to hear from you! Whether you have a question about my work, want to discuss a potential project, or just want to say hi - feel free to reach out.</p>
                <p className="font-medium text-xl mb-12">Whatever it is, I am all ears.</p>
              </div>
              
              <div className="mt-10 space-y-8">
                <div className="flex flex-col items-center justify-center gap-6">
                  <Button 
                    variant="default"
                    size="lg"
                    className="bg-burgundy hover:bg-black transition-colors text-base group flex items-center gap-3 px-8 py-6"
                    asChild
                  >
                    <a href="mailto:jmendozagon@my.smccd.edu">
                      <Mail className="h-5 w-5 group-hover:animate-pulse" />
                      <span>Contact Me</span>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <div className="mt-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <p className="text-black/60">Looking forward to bring your ideas to life</p>
                    <div className="mt-6">
                      <span className="inline-block w-16 h-1 bg-burgundy"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
