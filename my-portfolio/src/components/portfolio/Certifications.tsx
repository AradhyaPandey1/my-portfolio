import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AI & Responsible AI (Badges)",
      provider: "Google Cloud",
      badge: "Multiple Badges",
      status: "VERIFY"
    },
    {
      title: "Fundamentals of Digital Marketing",
      provider: "Google",
      badge: "Certification",
      status: "Verified"
    },
    {
      title: "C++, Python OOPs, HTML/CSS/JS",
      provider: "Infosys Springboard",
      badge: "Multiple Courses",
      status: "Completed"
    },
    {
      title: "Multiple Badges",
      provider: "Salesforce Trailblazer", 
      badge: "Trailblazer Badges",
      status: "VERIFY"
    },
    {
      title: "Responsive Web Design (300 hrs)",
      provider: "FreeCodeCamp",
      badge: "Certificate",
      status: "Certified"
    },
    {
      title: "Ethical Hacking Workshop",
      provider: "IIT Kanpur",
      badge: "Workshop Certificate",
      status: "Completed"
    }
  ];

  const additionalInfo = [
    "Completed a 300-hour course certification on responsive web design from freeCodeCamp.org",
    "Completed a 2-day offline workshop on Ethical Hacking at IIT Kanpur"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card/90 backdrop-blur-sm shadow-deep border-border/50 hover:shadow-glow transition-warm group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="font-playfair text-lg text-primary leading-tight mb-2">
                      {cert.title}
                    </CardTitle>
                    <p className="text-accent font-medium text-sm">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-cream border-accent/30 w-full justify-center"
                  >
                    {cert.badge}
                  </Badge>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        cert.status === 'Verified' || cert.status === 'Certified' || cert.status === 'Completed'
                          ? 'border-green-500 text-green-700' 
                          : 'border-accent text-accent'
                      }`}
                    >
                      {cert.status}
                    </Badge>
                    
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-12">
          <Card className="bg-gradient-cream/50 backdrop-blur-sm shadow-deep border-border/50 pattern-dots">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl text-primary text-center mb-6">
                Additional Training
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {additionalInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-cozy text-muted-foreground leading-relaxed">
                      {info}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;