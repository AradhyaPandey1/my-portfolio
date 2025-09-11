import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-coffee relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-organic opacity-20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-cozy">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-deep">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary-foreground">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Email</div>
                    <a 
                      href="mailto:arad737038108@gmail.com"
                      className="text-primary-foreground hover:text-accent transition-colors"
                    >
                      aradhyapandey122@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Phone</div>
                    <span className="text-primary-foreground">+91 7379788108</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">LinkedIn</div>
                    <a 
                      href="https://linkedin.com/in/aradhya-pandey-030431246"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:text-accent transition-colors"
                    >
                      linkedin.com/in/aradhya-pandey-030431246
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Location</div>
                    <span className="text-primary-foreground">Kanpur, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-primary-foreground/80 text-cozy mb-6">
                Open to internships, freelance projects, and full-time opportunities
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="shadow-warm hover:shadow-glow transition-warm"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Quick Email
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-deep">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-primary-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-primary-foreground/90">
                    First Name
                  </Label>
                  <Input 
                    id="firstName"
                    className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-primary-foreground/90">
                    Last Name
                  </Label>
                  <Input 
                    id="lastName"
                    className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground/90">
                  Email
                </Label>
                <Input 
                  id="email"
                  type="email"
                  className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-primary-foreground/90">
                  Subject
                </Label>
                <Input 
                  id="subject"
                  className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary-foreground/90">
                  Message
                </Label>
                <Textarea 
                  id="message"
                  rows={4}
                  className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white shadow-warm hover:shadow-glow transition-warm"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
