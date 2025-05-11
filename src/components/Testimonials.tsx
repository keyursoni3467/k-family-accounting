
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Sarah Johnson",
      business: "Retail Shop Owner",
      content: "K Family Accounting transformed our financial processes. They're responsive, detail-oriented, and truly care about our business success. Our tax season has never been smoother!",
      rating: 5
    },
    {
      name: "Michael Thompson",
      business: "Restaurant Owner",
      content: "As a restaurant owner, I needed specialized accounting help. The team at K Family Accounting understands our industry and has helped us optimize our finances and save on taxes.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      business: "Construction Company",
      content: "We've worked with K Family Accounting for over 3 years. Their payroll services and financial guidance have been invaluable as we've grown our business in West Chester.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-kblue-500 mr-4"></div>
            <span className="text-kblue-500 font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <div className="h-1 w-12 bg-kblue-500 ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what small business owners in West Chester have to say about working with K Family Accounting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsList.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
