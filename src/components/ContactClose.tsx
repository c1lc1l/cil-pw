import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactClose = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent",
      description: "I'll get back to you soon.",
    });
    
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-xl mx-auto">
        {/* Closing statement - personal, quiet */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xl text-foreground mb-4">
            If this work resonates, let's talk.
          </p>
          <p className="text-muted-foreground">
            I'm open to consulting, speaking, or collaborating on cloud and serverless projects.
          </p>
        </motion.div>

        {/* Form - minimal, focused */}
        <motion.form
          onSubmit={handleSubmit}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                required
                className="bg-secondary/30 border-border focus:border-coffee-light/50 h-12"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="bg-secondary/30 border-border focus:border-coffee-light/50 h-12"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <Textarea
              id="message"
              placeholder="What would you like to discuss?"
              rows={4}
              required
              className="bg-secondary/30 border-border focus:border-coffee-light/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="h-12 px-8 bg-coffee hover:bg-coffee-light text-primary-foreground transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending
              </>
            ) : isSubmitted ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Sent
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactClose;
