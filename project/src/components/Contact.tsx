import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/hitch-media-29a866309/", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/hitchmedia7", color: "hover:text-pink-600" },
    // { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61559806435904",
      color: "hover:text-blue-800",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start Your Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team
            of experts and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2 xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">official.hitchmedia@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 9755638324</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Dehradun, Uttrakhand 560064
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1 xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-gray-100 rounded-xl p-4 text-gray-600 ${social.color} transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-2`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-8 w-8" />
                    <span className="text-sm font-medium">
                      {social.icon === Linkedin ? 'LinkedIn' : 
                       social.icon === Instagram ? 'Instagram' : 
                       social.icon === Twitter ? 'Twitter' : 'Facebook'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="md:col-span-1 xl:col-span-1">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-white h-full flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <MessageCircle className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">Need Quick Help?</h3>
                  <p className="text-green-100">Chat with us on WhatsApp</p>
                </div>
              </div>
              <a
                href="https://wa.me/+919755638324"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center space-x-2 w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;