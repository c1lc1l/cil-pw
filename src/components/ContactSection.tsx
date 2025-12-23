import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

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
    <section className="py-24 px-4 bg-gradient-to-b from-background via-coffee/5 to-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-coffee/30 bg-coffee/10 text-coffee-light text-sm font-mono mb-4">
            contact.init()
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground">
            Let's Collaborate
          </h2>
          <p className="text-muted-foreground text-lg">
            Got a project in mind? Want to talk cloud architecture? Let's connect and build something amazing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-secondary border-border focus:border-coffee-light focus:ring-coffee/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-secondary border-border focus:border-coffee-light focus:ring-coffee/20"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message
              </label>
              <Textarea
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                required
                className="bg-secondary border-border focus:border-coffee-light focus:ring-coffee/20 resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="deploy"
              size="lg"
              className="w-full"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deploying Message...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Message Deployed!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Deploy Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
