
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_name: formData.businessName,
          message: formData.message
        });
        
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Something went wrong",
          description: "We couldn't submit your message. Please try again later.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you as soon as possible.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          message: "",
        });
      }
    } catch (err) {
      console.error('Exception when submitting form:', err);
      toast({
        title: "Something went wrong",
        description: "We couldn't submit your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding gradient-blue text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-white mr-4"></div>
              <span className="text-white font-medium uppercase tracking-wider text-sm">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Business Finances?
            </h2>
            <p className="mb-8 text-white/90">
              Contact us today for a free consultation. We'll discuss your business needs and show you how K Family Accounting can help you achieve your financial goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-white/90">West Chester, Ohio</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-white/90">info@kfamilyaccounting.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-white/90">(513) 602-7740</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-white/90">Monday - Friday: 9AM - 5PM</p>
                  <p className="text-white/90">Weekend: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Input
                    name="businessName"
                    placeholder="Business Name"
                    className="w-full"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="How can we help your business?"
                    className="w-full min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-kblue-500 hover:bg-kblue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
