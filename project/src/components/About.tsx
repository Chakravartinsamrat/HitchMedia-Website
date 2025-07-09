import React, { useState, useEffect } from 'react';
import { Target, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    growth: 0,
    years: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 25, projects: 10, growth: 120, years: 2 };
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          growth: Math.floor(targets.growth * progress),
          years: Math.floor(targets.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);
    };

    // Trigger animations on component mount
    const timeout = setTimeout(() => {
      animateCounters();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Data-driven strategies tailored to your business goals and market dynamics."
    },
    {
      icon: Zap,
      title: "Creative Excellence",
      description: "Innovative campaigns that capture attention and drive meaningful engagement."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We build lasting partnerships based on trust."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "ROI-focused campaigns with transparent reporting and continuous optimization."
    }
  ];

  const marqueeValues = [
    "Innovation-driven solutions",
    "Transparent communication", 
    "Results-oriented approach",
    "Continuous learning & adaptation",
    "Client success commitment",
    "Ethical business practices",
    "Data-driven strategies",
    "Creative excellence",
    "Client-centric approach",
    "Measurable results"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About HitchMedia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital marketing experts committed to helping businesses thrive in the digital landscape through innovative strategies and exceptional execution.
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              {counters.clients}+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              {counters.projects}+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              {counters.growth}%
            </div>
            <div className="text-gray-600 font-medium">Average Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
              {counters.years}+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>


        {/* Mission & Values */}
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At HitchMedia, we believe every business has a unique story worth telling. Our mission is to amplify your brand's voice through innovative digital marketing strategies that not only capture attention but convert it into meaningful relationships and sustainable growth. We combine cutting-edge technology with creative storytelling to help businesses navigate the ever-evolving digital landscape, ensuring they don't just keep up with change—they lead it. Your success is our passion, and we're committed to delivering results that exceed expectations while building lasting partnerships based on trust, transparency, and shared vision for the future.
            </p>
          </div>

          {/* Values Marquee */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h3>
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl py-6">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...marqueeValues, ...marqueeValues].map((value, index) => (
                  <div key={index} className="flex items-center mx-8">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;