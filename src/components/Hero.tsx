
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional <span className="text-kblue-500">Accounting</span> Services for Small Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              K Family Accounting provides expert tax, payroll, and financial services tailored for small businesses in West Chester, Ohio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-kblue-500 hover:bg-kblue-600 text-lg py-6 px-8" asChild>
                <a href="#contact">Get a Free Consultation</a>
              </Button>
              <Button variant="outline" className="border-kblue-500 text-kblue-500 hover:bg-kblue-50 text-lg py-6 px-8" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-kblue-400 to-kblue-600 opacity-75 blur"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">We Specialize In:</h3>
                <ul className="space-y-3">
                  {[
                    "Sales Tax Preparation",
                    "Payroll Services",
                    "Individual & Corporate Taxes",
                    "Bookkeeping & Accounting",
                    "Financial Advisory"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-kblue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
