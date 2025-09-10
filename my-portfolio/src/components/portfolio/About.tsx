import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6 text-3d">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto shadow-glow"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-left">
            <Card className="bg-card/80 backdrop-blur-sm shadow-warm border-border/50 card-3d hover-lift">
              <CardContent className="p-8 transform-3d">
                <p className="text-cozy text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate software engineer currently pursuing my Bachelor's in Technology 
                  in Computer Science & Engineering at Premnagar Singh Institute of Technology, Kanpur. 
                  With a specialization in Cyber Security, I bring hands-on expertise in software 
                  development, debugging, and algorithmic problem-solving.
                </p>
                
                <p className="text-cozy text-lg text-muted-foreground leading-relaxed mb-6">
                  My journey in tech has been enriched by practical experiences, including my recent 
                  internship at OYE BUSY as a Web Development Intern, where I built responsive web 
                  applications and gained valuable real-world project experience.
                </p>
                
                <p className="text-cozy text-lg text-muted-foreground leading-relaxed">
                  I thrive in fast-paced, dynamic environments and am constantly seeking opportunities 
                  to learn, grow, and contribute to innovative solutions that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-slide-right">
            <div className="pattern-dots bg-gradient-cream rounded-2xl p-8 shadow-deep card-3d hover-lift float-animation">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-medium">Location:</span>
                  <span className="text-foreground">Kanpur, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-medium">Experience:</span>
                  <span className="text-foreground">Web Development Intern</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-medium">Specialization:</span>
                  <span className="text-foreground">Cyber Security</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-medium">Languages:</span>
                  <span className="text-foreground">Java, Python, C++</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;