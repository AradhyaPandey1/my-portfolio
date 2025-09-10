import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-forest/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-sm shadow-deep border-border/50 hover:shadow-glow transition-warm">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="font-playfair text-2xl text-primary mb-2">
                    Web Development Intern
                  </CardTitle>
                  <div className="flex items-center gap-2 text-accent font-semibold text-lg">
                    <span>OYE BUSY</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>April 2024 - June 2024</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                <ul className="space-y-3 text-cozy text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Completed a 6-week Web Development internship, gaining hands-on experience with modern web technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Built responsive web pages using HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gained hands-on experience in real-world project tasks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gradient-cream border-accent/30">HTML</Badge>
                  <Badge variant="secondary" className="bg-gradient-cream border-accent/30">CSS</Badge>
                  <Badge variant="secondary" className="bg-gradient-cream border-accent/30">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-gradient-cream border-accent/30">Responsive Design</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;