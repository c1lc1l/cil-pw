import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Mail, MessageSquare, User, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "@/components/SectionHeader";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form after a delay
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-light/20 to-transparent" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <SectionHeader
          tag="contact.init()"
          title={
            <>
              <span className="block">Let's</span>
              <span className="block text-gradient">Collaborate</span>
            </>
          }
          subtitle="Got a project in mind? Want to talk cloud architecture? Let's connect and build something amazing."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border">
            {/* Form glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
              style={{ boxShadow: "inset 0 0 80px hsl(25 40% 30% / 0.1)" }}
            />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-coffee-light" />
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-border focus:border-coffee-light focus:ring-coffee/20 h-12"
                  />
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-coffee-light" />
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-secondary/50 border-border focus:border-coffee-light focus:ring-coffee/20 h-12"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-coffee-light" />
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  required
                  className="bg-secondary/50 border-border focus:border-coffee-light focus:ring-coffee/20 resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  variant="deploy"
                  size="lg"
                  className="w-full h-14 text-base"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Deploying Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Deployed!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Deploy Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
