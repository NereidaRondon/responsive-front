import React from 'react';
import Header from '../layout/Header';
import Counter from '../features/Counter';
import MainButton from '../features/MainButton';

const LandingPage = (): JSX.Element => {
  return (
    <div>
      <div className="yellowBlock"></div>
      {/* yellowBlock and other styles are in file: index.css */}
      <Header />
      <section className="z-10 flex flex-col px-8 py-8 sm:px-16 xl:px-36 xl:py-16">
        <div className="flex flex-wrap justify-between">
          <h1 className="mb-6 w-full break-words text-center text-3xl leading-normal tracking-wide sm:mb-8 sm:w-3/4 sm:text-start sm:text-4xl lg:text-4xl lg:leading-relaxed xl:mb-0 xl:w-2/5 xl:text-5xl xl:leading-relaxed">
            Chicago&apos;s <span className="text-primary">Free</span> Medical
            Check-Up and Weight Loss Consultation
          </h1>
          <Counter />
        </div>
        <p className="my-6 w-full leading-relaxed sm:mb-4 sm:mt-8 sm:w-3/4 sm:text-lg xl:mb-6 xl:mt-6 xl:w-2/5">
          Limited spots available due to the Physicians schedule and the high
          demand for service. No credit card or insurance required.
        </p>
        <MainButton overwrite={''} />
      </section>
    </div>
  );
};

export default LandingPage;
