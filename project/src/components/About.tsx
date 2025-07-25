import { useState, useEffect } from "react";
import { Target, Zap, Users, TrendingUp, Calendar } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    growth: 0,
    years: 0,
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
          years: Math.floor(targets.years * progress),
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
      description:
        "Data-driven strategies tailored to your business goals and market dynamics.",
    },
    {
      icon: Zap,
      title: "Creative Excellence",
      description:
        "Innovative campaigns that capture attention and drive meaningful engagement.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We build lasting partnerships based on trust.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description:
        "ROI-focused campaigns with transparent reporting and continuous optimization.",
    },
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
    "Measurable results",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      id: 1,
      videoId: "IG9MrH8ctAA",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About HitchMedia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital marketing experts committed to
            helping businesses thrive in the digital landscape through
            innovative strategies and exceptional execution.
          </p>
        </div>

        {/* shitty youtube video */}
        <div className="max-w-7xl mx-auto px-4 mb-10 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Watch {">>"} How we are Booking 50+ Exclusive Appointments of Attorneys/Law firms every Month Consistently from last 2 years !!
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Video Section - 70% width */}
            <div className="w-full lg:w-[70%]">
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {videos.map((video) => (
                      <div key={video.id} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                          <div className="aspect-video w-full">
                            <iframe
                              className="w-full h-full rounded-2xl"
                              src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {videos.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
                    >
                      <ChevronLeft size={24} className="text-gray-600" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
                    >
                      <ChevronRight size={24} className="text-gray-600" />
                    </button>

                    <div className="flex justify-center mt-8 space-x-2">
                      {videos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentSlide
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <a href="https://calendly.com/official-hitchmedia/30-min-consult">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-pulse-scale">
                    <Calendar className="h-5 w-5" />
                    <span>Confirm a 1v1 Call with us Now!!</span>
                    <span className="text-gray-900">Close Extra 15-20 Deals in next 90 days! </span>
                  </button>
                </a>
              </div>
            </div>

            {/* Process Section - 30% width */}
            <div className="w-full lg:w-[30%]">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                  9 Step Process
                </h3>

                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <p className="text-lg font-semibold text-blue-600">
                      You just focus on Closings !!
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Winning Campaign
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        High-Ticket Funnel
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Pre-Screening
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Concierge Team
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Qualified Borrowers
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Appointments
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Live Transfers
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-green-500 mr-3 text-xl">✔️</span>
                      <span className="text-gray-700 font-medium">
                        Inbound Calls
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-3 text-xl">💸</span>
                      <span className="text-gray-700 font-bold">
                        Closed Deals
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        

        {/* Mission & Values */}
        {/* <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At HitchMedia, we believe every business has a unique story worth telling. Our mission is to amplify your brand's voice through innovative digital marketing strategies that not only capture attention but convert it into meaningful relationships and sustainable growth. We combine cutting-edge technology with creative storytelling to help businesses navigate the ever-evolving digital landscape, ensuring they don't just keep up with change—they lead it. Your success is our passion, and we're committed to delivering results that exceed expectations while building lasting partnerships based on trust, transparency, and shared vision for the future.
            </p>
          </div>

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
        </div> */}
      </div>
    </section>
  );
};

export default About;
