
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show the consent banner after a small delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-600">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={acceptAll}>
            Accept All
          </Button>
          <Button variant="default" size="sm" className="bg-mavBlue hover:bg-blue-700" onClick={acceptAll}>
            Accept Necessary Only
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
