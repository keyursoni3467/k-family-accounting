
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-kblue-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold text-center px-2">Trusted Advisors</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-kblue-500 mr-4"></div>
              <span className="text-kblue-500 font-medium uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Accounting Partner in West Chester, Ohio
            </h2>
            <p className="text-gray-700 mb-4">
              K Family Accounting was founded with a simple mission: to provide small businesses with expert financial guidance and personalized service that larger firms simply can't offer.
            </p>
            <p className="text-gray-700 mb-6">
              Located in West Chester, Ohio, we understand the unique challenges local businesses face. Our team combines years of experience with a genuine passion for helping our clients succeed. We don't just work with numbers—we work with people, building lasting relationships based on trust and results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "98%", label: "Client Retention" },
                { value: "24/7", label: "Client Support" }
              ].map((stat, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="text-2xl font-bold text-kblue-500">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button className="bg-kblue-500 hover:bg-kblue-600" asChild>
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
