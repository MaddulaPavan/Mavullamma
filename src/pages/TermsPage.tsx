
import React from 'react';
import { Book } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  const termsSections = [
    {
      title: "Vehicle Condition",
      content: "All vehicles sold by Mavullamma Cars are sold in 'as-is' condition unless otherwise specified in writing. While we make every effort to disclose known issues, buyers are encouraged to thoroughly inspect vehicles before purchase."
    },
    {
      title: "Insurance Transfer",
      content: "The transfer of insurance policies for purchased vehicles is solely the buyer's responsibility. Mavullamma Cars can provide guidance on the process but cannot be held liable for any issues arising from insurance transfers."
    },
    {
      title: "Financing",
      content: "Vehicle financing is subject to eligibility criteria and document approval by our partner financing institutions. Approval of financing is not guaranteed and depends on the buyer's credit history and other factors determined by the financing company."
    },
    {
      title: "Documentation",
      content: "All documents provided by the buyer must be accurate, complete, and valid. Submission of false or inaccurate information may result in cancellation of the purchase agreement and possible legal consequences."
    },
    {
      title: "Post-Sale Responsibility",
      content: "Once a vehicle is sold and delivered, the buyer assumes full responsibility for the vehicle including all maintenance, repairs, and legal compliance. Mavullamma Cars will honor only those warranties explicitly stated in writing at the time of purchase."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Terms and Conditions" 
        subtitle="Important information about your purchase and our services"
        bgImage="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3"
      />
      
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Book className="w-6 h-6 text-mavBlue" />
                  <h2 className="text-2xl font-bold">Terms and Conditions</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Please read these terms and conditions carefully before purchasing a vehicle or using our services. 
                  By proceeding with a purchase or service, you agree to be bound by these terms.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  {termsSections.map((section, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">{section.title}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{section.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">
                If you have any questions about our terms and conditions, please <Link to="/contact" className="text-mavBlue hover:underline">contact us</Link>.
              </p>
              <Link to="/" className="text-mavBlue hover:underline font-medium">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
