import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-gradient-forest/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-sm shadow-deep border-border/50 hover:shadow-glow transition-warm">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-warm p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-playfair text-2xl text-primary mb-2">
                    Bachelor of Technology (B. TECH)
                  </CardTitle>
                  <div className="text-accent font-semibold text-lg mb-2">
                    Computer Science & Engineering (CSE)
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Premnagar Singh Institute of Technology, Kanpur, India
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">Dec 2022 - Aug 2026</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">Kanpur, India</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Academic Performance</div>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-cream border-accent/30 px-4 py-2"
                    >
                      CGPA: 75%
                    </Badge>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Specialization</div>
                    <Badge 
                      variant="outline" 
                      className="border-primary text-primary px-4 py-2"
                    >
                      Cyber Security
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-cream/50 p-6 rounded-lg pattern-dots">
                <h4 className="font-semibold text-foreground mb-3">Key Coursework & Focus Areas:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-cozy text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Database Management Systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Software Engineering</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-cozy text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Network Security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cryptography & Encryption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Object-Oriented Programming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;