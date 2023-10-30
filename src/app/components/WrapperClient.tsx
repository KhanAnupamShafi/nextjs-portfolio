import React from 'react';
import Header from './Header';
import { Providers } from './Provider';
import SocialBar from './SocialBar';

const WrapperClient = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Providers>
      <div className="w-full md:fixed z-50 dark:bg-[#0e1630] bg-white">
        <div className="left-0 top-0">
          <Header />
        </div>
      </div>
      <SocialBar />
      {children}
    </Providers>
  );
};

export default WrapperClient;
