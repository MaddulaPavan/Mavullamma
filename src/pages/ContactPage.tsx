import React from 'react';
import PageHeader from '@/components/PageHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <PageHeader 
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to our team with any inquiries."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
      />
      
      {/* Rest of the contact page content */}
      <div className={`section-padding ${isMobile ? 'pt-8' : 'pt-12 md:pt-16'}`}>
        {/* Contact page content would go here */}
      </div>
    </div>
  );
};

export default ContactPage;
