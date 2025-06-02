import React from 'react';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="relative bg-black py-8 md:py-12">
      <div className="container-custom relative z-10 text-center">
        <div className="mb-6">{title}</div>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
