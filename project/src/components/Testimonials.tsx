import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Star } from 'lucide-react';

// Import local videos
import testi1 from '../../assets/testi1.e82d758a64514d97c08d.mp4';
import testi2 from '../../assets/testi2.bb347dd5614a143d657f.mp4';
import testi3 from '../../assets/testi3.f4a502c6ee8c57e833bf.mp4';

import thumb1 from '../../assets/thumbnails/naman.png';
import thumb2 from '../../assets/thumbnails/vasudev.png';
import thumb3 from '../../assets/thumbnails/ujjwal.png';


const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const testimonials = [
    {
      id: 1,
      client: "Naman Chauhan",
      company: "OSS Construction",
      rating: 5,
      video: testi1,
      thumbnail: thumb1,
      quote: "HitchMedia transformed our digital presence completely. Our conversion rates increased by 300% within 6 months!",
      description: "As a startup, we needed a marketing partner who understood our vision and could deliver results quickly."
    },
    {
      id: 2,
      client: "Vasudev Chauhan",
      company: "Yatri Travels",
      rating: 5,
      video: testi2,
      thumbnail: thumb2,
      quote: "Professional, results-driven, and incredibly innovative. Best marketing agency we've ever worked with!",
      description: "Working with HitchMedia has been a game-changer for our business. Their data-driven approach and creative solutions have helped us reach new heights."
    },
    {
      id: 3,
      client: "Ujjawal Singh Tomar",
      company: "Graphic Designer",
      rating: 5,
      video: testi3,
      thumbnail: thumb3,
      quote: "Their creative approach and attention to detail exceeded all our expectations. Highly recommended!",
      description: "The team at HitchMedia understood our brand aesthetic perfectly and created campaigns that truly resonated with our target audience."
    },
    // {
    //   id: 4,
    //   client: "David Park",
    //   company: "Local Business Co.",
    //   rating: 5,
    //   video: testi1, // Reusing first video for fourth testimonial
    //   thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   quote: "ROI improved by 250% thanks to HitchMedia's strategic digital marketing campaigns.",
    //   description: "HitchMedia helped us transition from traditional marketing to digital with incredible success. Their expertise made the process seamless."
    // }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (isPlaying[index]) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !isMuted[index];
      setIsMuted(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  useEffect(() => {
    // Only auto-advance if no videos are playing
    const interval = setInterval(() => {
      if (!Object.values(isPlaying).some(playing => playing)) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear directly from our satisfied clients about their success stories.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    {/* Grid Layout: Text Left, Video Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                      {/* Text Content - Left Side */}
                      <div className="p-8 flex flex-col justify-center order-2 lg:order-1">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        
                        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                          {testimonial.description}
                        </p>
                        
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">{testimonial.client}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Video Content - Right Side */}
                      <div className="relative order-1 lg:order-2">
                        <div className="aspect-square w-full h-full">
                          <video
                            ref={el => videoRefs.current[index] = el}
                            className="w-full h-full object-cover"
                            poster={testimonial.thumbnail}
                            muted={isMuted[index]}
                            onPlay={() => setIsPlaying(prev => ({ ...prev, [index]: true }))}
                            onPause={() => setIsPlaying(prev => ({ ...prev, [index]: false }))}
                            onEnded={() => setIsPlaying(prev => ({ ...prev, [index]: false }))}
                          >
                            <source src={testimonial.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          
                          {/* Video Controls Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200">
                            <button
                              onClick={() => togglePlay(index)}
                              className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-4 transform hover:scale-110 transition-all duration-200 shadow-lg"
                            >
                              {isPlaying[index] ? <Pause size={24} /> : <Play size={24} />}
                            </button>
                          </div>
                          
                          {/* Mute Button */}
                          <div className="absolute bottom-4 right-4">
                            <button
                              onClick={() => toggleMute(index)}
                              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                            >
                              {isMuted[index] ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;