import {
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";

const ContactSection = () => {
  // const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* left : contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-glow">Email:</span>
                <a
                  href="mailto:mhdShazeb19@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mhdShazeb19@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-glow">Phone:</span>
                <a
                  href="tel:+917860456467"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7860456467
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-glow">Address:</span>
                <address className="text-muted-foreground hover:text-primary transition-colors">
                  Pune, Maharashtra, India
                </address>
              </div>
            </div>

            {/* contact icons */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center items-center space-x-4">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>

                <a href="#" target="_blank">
                  <Twitter />
                </a>

                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* right : send message */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="flex items-center gap-2">
                <label htmlFor="name" className="text-glow w-1/4">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="name" className="text-glow w-1/4">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="name" className="text-glow w-1/4">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
