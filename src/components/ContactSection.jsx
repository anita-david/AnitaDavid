import { MapPin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import cn from "../lib/utils";
import { Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send("service_2xnh1ho", "template_lr8s3mg", formData, "etcBhqQyM5ZZfX5Se")
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" }); // clear form
        setIsSubmitting(false);
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "Your message could not be sent.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:anitafunmilayo@gmail.com"
                  >
                    anitafunmilayo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+2347013828981"
                  >
                    +2347013828981
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Ibadan, Nigeria
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/anitaoluwafunmilayodavid/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/the_anita_david" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/the_anita_david/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" action="">
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-left"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Anita David..."
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-left"
                  htmlFor="name"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-left"
                  htmlFor="name"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
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
}

export default ContactSection;
