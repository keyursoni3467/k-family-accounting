
import {
  Calculator,
  FileText,
  Receipt,
  Users,
  PiggyBank,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const servicesList = [
    {
      title: "Tax Services",
      description: "Comprehensive tax planning and preparation for individuals and businesses with year-round support.",
      icon: FileText,
      items: ["Individual Tax Returns", "Corporate Tax Filing", "Tax Planning", "Sales Tax Compliance"]
    },
    {
      title: "Payroll Services",
      description: "Complete payroll processing including tax filing, direct deposits, and year-end reporting.",
      icon: Users,
      items: ["Payroll Processing", "Tax Filing & Deposits", "W-2 & 1099 Preparation", "Compliance Assistance"]
    },
    {
      title: "Bookkeeping",
      description: "Accurate and timely bookkeeping services to keep your business finances organized and compliant.",
      icon: Receipt,
      items: ["Monthly Bookkeeping", "Account Reconciliation", "Financial Statement Preparation", "QuickBooks Setup"]
    },
    {
      title: "Accounting",
      description: "Professional accounting services to help you understand your financial position and make informed decisions.",
      icon: Calculator,
      items: ["Financial Statement Analysis", "Cash Flow Management", "Budget Preparation", "Profit Enhancement"]
    },
    {
      title: "Financial Advisory",
      description: "Strategic financial guidance to help your business grow and thrive in today's competitive landscape.",
      icon: PiggyBank,
      items: ["Business Planning", "Cash Flow Analysis", "Financial Projections", "Growth Strategies"]
    },
    {
      title: "Business Consulting",
      description: "Expert advice to help optimize your business operations and maximize profitability.",
      icon: DollarSign,
      items: ["Business Structure Advice", "Startup Guidance", "Financial Analysis", "Cost Reduction Strategies"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-kblue-500 mr-4"></div>
            <span className="text-kblue-500 font-medium uppercase tracking-wider text-sm">Our Services</span>
            <div className="h-1 w-12 bg-kblue-500 ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Financial Solutions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a full range of accounting and financial services designed to help small businesses thrive in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:border-kblue-300 hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-md bg-kblue-100 text-kblue-500 mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-kblue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
