import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import heroImage from "@/assets/hero-coffee-cottagecore.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-coffee opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center transform-3d">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-primary-foreground mb-6 text-3d animate-slide-up float-animation">
            Aradhya Pandey
          </h1>
          <div className="text-script text-2xl md:text-3xl text-accent-foreground mb-8 animate-slide-left stagger-animation">
            Software Developer & Cyber Security Enthusiast
          </div>
          <p className="text-cozy text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-right stagger-animation">
            Passionate and detail-oriented software engineer with a strong foundation in computer science 
            and specialization in Cyber Security. Experienced in Java, Python, and C++, thriving in 
            fast-paced, dynamic environments to build innovative solutions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up stagger-animation">
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-warm hover:shadow-glow transition-3d button-3d hover-lift"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-warm transition-3d button-3d hover-lift"
              asChild
            >
              <a href="/Resume.pdf" download="Aradhya_Pandey_Resume.pdf">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-slide-up stagger-animation">
            <a 
              href="https://linkedin.com/in/aradhya-pandey-030431246" 
              className="text-primary-foreground hover:text-accent transition-3d hover-lift float-animation"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: '1s' }}
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:arad737038108@gmail.com"
              className="text-primary-foreground hover:text-accent transition-3d hover-lift float-animation"
              style={{ animationDelay: '1.2s' }}
            >
              <Mail className="h-8 w-8" />
            </a>
            <a 
              href="#" 
              className="text-primary-foreground hover:text-accent transition-3d hover-lift float-animation"
              style={{ animationDelay: '1.4s' }}
            >
              <Github className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;