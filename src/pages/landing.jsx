import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";

const LandingPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
          zIndex: 1
        }}
      />
      
      <main className="relative z-10 flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
        <section className="text-center">
          <h1 className="flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
            Naukri Dhundhna Ab Easy Hai, Boss!
            <span className="flex items-center gap-2 sm:gap-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Job Dhundo Ke Saath
            </span>
          </h1>
          <p className="text-gray-400 sm:mt-4 text-[2xl] sm:text-2xl font-bold">
            The most reliable platform to find the right job for your skills.
          </p>
        </section>

        <div className="flex gap-6 justify-center">
          <Link to={"/jobs"}>
            <Button variant="blue" size="xl" className="bg-opacity-90 hover:bg-opacity-100">
              Find Jobs
            </Button>
          </Link>
          <Link to={"/post-job"}>
            <Button variant="destructive" size="xl" className="bg-opacity-90 hover:bg-opacity-100">
              Post a Job
            </Button>
          </Link>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="font-bold text-gray-100">For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Search and apply for jobs, track applications, and more.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="font-bold text-gray-100">For Employers</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Post jobs, manage applications, and find the best candidates.
            </CardContent>
          </Card>
        </section>

        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`}
              className="border-gray-800"
            >
              <AccordionTrigger className="text-gray-100 hover:text-gray-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
};

export default LandingPage;