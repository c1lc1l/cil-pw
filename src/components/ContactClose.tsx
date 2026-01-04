import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Loader2, Check, Coffee } from "lucide-react";
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
      description: "I'll get back to you soon—probably after my next coffee.",
    });
    
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="py-28 md:py-36 px-6 relative">
      {/* Warm closing gradient - like café closing time */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-espresso/[0.05] to-coffee-espresso/[0.08] pointer-events-none" />
      
      <div className="max-w-xl mx-auto relative z-10">
        {/* Closing statement - café warmth */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <Coffee className="w-5 h-5 text-coffee-warm/70" />
            <div className="flex-1 separator-coffee" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            If this work resonates, let's talk.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm open to consulting, speaking, or collaborating on cloud and serverless projects.{" "}
            <span className="text-muted-foreground/50 font-serif italic">
              The café's still open.
            </span>
          </p>
        </motion.div>

        {/* Form - warm, focused */}
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
                className="bg-coffee-espresso/30 border-coffee-brown/30 focus:border-coffee-warm/60 focus:ring-coffee-warm/20 h-12 placeholder:text-muted-foreground/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="bg-coffee-espresso/30 border-coffee-brown/30 focus:border-coffee-warm/60 focus:ring-coffee-warm/20 h-12 placeholder:text-muted-foreground/40"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <Textarea
              id="message"
              placeholder="What would you like to discuss?"
              rows={5}
              required
              className="bg-coffee-espresso/30 border-coffee-brown/30 focus:border-coffee-warm/60 focus:ring-coffee-warm/20 resize-none placeholder:text-muted-foreground/40"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="h-12 px-8 bg-coffee-brown hover:bg-coffee-warm text-cream transition-all duration-300"
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
