"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("general");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState({});
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [chatMessages, setChatMessages] = React.useState([
    { type: "bot", message: "Hello! How can I help you today?", time: "now" },
  ]);
  const [chatInput, setChatInput] = React.useState("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const newMessage = { type: "user", message: chatInput, time: "now" };
    setChatMessages((prev) => [...prev, newMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        message:
          "Thank you for your message. A support agent will be with you shortly.",
        time: "now",
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const offices = [
    {
      id: "headquarters",
      name: "San Francisco HQ",
      address: "123 Market Street, Suite 500",
      city: "San Francisco, CA 94105",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "sf@codesec.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
      timezone: "Pacific Time",
      image: "/api/placeholder/400/250",
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    {
      id: "london",
      name: "London Office",
      address: "25 Old Broad Street, Floor 12",
      city: "London EC2N 1HN",
      country: "United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@codesec.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
      timezone: "Greenwich Mean Time",
      image: "/api/placeholder/400/250",
      coordinates: { lat: 51.5074, lng: -0.1278 },
    },
    {
      id: "singapore",
      name: "Singapore Office",
      address: "1 Raffles Place, Level 30",
      city: "Singapore 048616",
      country: "Singapore",
      phone: "+65 6123 4567",
      email: "singapore@codesec.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      timezone: "Singapore Time",
      image: "/api/placeholder/400/250",
      coordinates: { lat: 1.3521, lng: 103.8198 },
    },
  ];

  const contactMethods = [
    {
      icon: "fas fa-phone",
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: "+1 (555) 123-4567",
      hours: "24/7 Emergency | Mon-Fri 8AM-8PM PST",
      color: "blue",
    },
    {
      icon: "fas fa-envelope",
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@codesec.com",
      hours: "Response within 4 hours",
      color: "green",
    },
    {
      icon: "fas fa-comments",
      title: "Live Chat",
      description: "Chat with our support agents",
      details: "Available now",
      hours: "Mon-Fri 6AM-10PM PST",
      color: "purple",
    },
    {
      icon: "fas fa-ticket-alt",
      title: "Support Tickets",
      description: "Create and track support requests",
      details: "Customer Portal",
      hours: "24/7 Ticket System",
      color: "red",
    },
  ];

  const inquiryTypes = [
    {
      id: "general",
      title: "General Inquiry",
      icon: "fas fa-info-circle",
      email: "info@codesec.com",
      responseTime: "Within 24 hours",
    },
    {
      id: "sales",
      title: "Sales & Pricing",
      icon: "fas fa-dollar-sign",
      email: "sales@codesec.com",
      responseTime: "Within 2 hours",
    },
    {
      id: "support",
      title: "Technical Support",
      icon: "fas fa-wrench",
      email: "support@codesec.com",
      responseTime: "Within 1 hour",
    },
    {
      id: "partnership",
      title: "Partnerships",
      icon: "fas fa-handshake",
      email: "partners@codesec.com",
      responseTime: "Within 48 hours",
    },
    {
      id: "media",
      title: "Media & Press",
      icon: "fas fa-newspaper",
      email: "press@codesec.com",
      responseTime: "Within 24 hours",
    },
    {
      id: "careers",
      title: "Careers",
      icon: "fas fa-briefcase",
      email: "careers@codesec.com",
      responseTime: "Within 1 week",
    },
  ];

  const emergencyContacts = [
    {
      title: "Security Incident",
      phone: "+1 (555) 911-HELP",
      email: "security@codesec.com",
      description: "Report security breaches or incidents",
    },
    {
      title: "System Outage",
      phone: "+1 (555) 911-DOWN",
      email: "outage@codesec.com",
      description: "Report platform or service outages",
    },
    {
      title: "Critical Support",
      phone: "+1 (555) 911-CRIT",
      email: "critical@codesec.com",
      description: "Enterprise customers critical issues",
    },
  ];

  const socialLinks = [
    {
      platform: "Twitter",
      icon: "fab fa-twitter",
      url: "#",
      color: "text-blue-400",
    },
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "#",
      color: "text-blue-600",
    },
    {
      platform: "GitHub",
      icon: "fab fa-github",
      url: "#",
      color: "text-gray-400",
    },
    {
      platform: "YouTube",
      icon: "fab fa-youtube",
      url: "#",
      color: "text-red-500",
    },
    {
      platform: "Discord",
      icon: "fab fa-discord",
      url: "#",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0">
          {[...Array.from({ length: 40 })].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 py-4 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CODE_SEC
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/solutions"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Solutions
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a href="/contact" className="text-blue-400 font-medium">
              Contact
            </a>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help you secure your business. Reach out to our team
            of experts for support, sales inquiries, or partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section
        id="contact-methods"
        data-animate
        className={`py-12 px-6 transition-all duration-1000 ${
          isVisible["contact-methods"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible["contact-methods"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() =>
                  method.title === "Live Chat" && setIsChatOpen(true)
                }
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-lg flex items-center justify-center mb-4`}
                >
                  <i className={`${method.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {method.description}
                </p>
                <div className="text-blue-400 font-medium mb-2">
                  {method.details}
                </div>
                <div className="text-xs text-gray-400">{method.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Send us a Message
              </h2>

              {/* Inquiry Type Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {inquiryTypes.slice(0, 3).map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setActiveTab(type.id);
                      setFormData((prev) => ({
                        ...prev,
                        inquiryType: type.id,
                      }));
                    }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === type.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <i className={`${type.icon} text-sm`}></i>
                    <span>{type.title}</span>
                  </button>
                ))}
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check-circle text-green-400"></i>
                    <span className="text-green-400">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Inquiry Types */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {inquiryTypes.map((type) => (
                    <div
                      key={type.id}
                      className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${type.icon} text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-400">
                          {type.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-1">
                          {type.email}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {type.responseTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-400">
                  Emergency Contacts
                </h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div
                      key={index}
                      className="border-b border-red-500/20 pb-4 last:border-b-0"
                    >
                      <h4 className="font-bold text-red-400 mb-2">
                        {contact.title}
                      </h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-phone text-red-400"></i>
                          <span className="text-white font-medium">
                            {contact.phone}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-envelope text-red-400"></i>
                          <span className="text-gray-300">{contact.email}</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section
        id="offices"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.offices
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Global Offices
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={office.id}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 ${
                  isVisible.offices
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      {office.name}
                    </h3>
                    <p className="text-gray-200">{office.country}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-map-marker-alt text-red-400 mt-1"></i>
                      <div>
                        <p className="text-gray-300">{office.address}</p>
                        <p className="text-gray-300">{office.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <i className="fas fa-phone text-blue-400"></i>
                      <span className="text-gray-300">{office.phone}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <i className="fas fa-envelope text-green-400"></i>
                      <span className="text-gray-300">{office.email}</span>
                    </div>

                    <div className="flex items-start space-x-3">
                      <i className="fas fa-clock text-yellow-400 mt-1"></i>
                      <div>
                        <p className="text-gray-300">{office.hours}</p>
                        <p className="text-gray-400 text-sm">
                          {office.timezone}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Support & Resources
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-book text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Documentation
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive guides and API documentation
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Browse Docs →
              </button>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-400">
                Training
              </h3>
              <p className="text-gray-300 mb-4">
                Security training and certification programs
              </p>
              <button className="text-green-400 hover:text-green-300 transition-colors">
                View Courses →
              </button>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Community
              </h3>
              <p className="text-gray-300 mb-4">
                Join our community forum and discussions
              </p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                Join Community →
              </button>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Premium Support
              </h3>
              <p className="text-gray-300 mb-4">
                24/7 dedicated support for enterprise customers
              </p>
              <button className="text-red-400 hover:text-red-300 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Follow Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Follow us on social media for the latest updates, security insights,
            and company news.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                style={{ backgroundColor: "rgba(55, 65, 81, 0.8)" }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest security insights and product updates delivered to
              your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Live Support</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleChatSend}
                className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <i className="fas fa-comment text-xl"></i>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CODE_SEC
                </span>
              </div>
              <p className="text-gray-400">
                The future of cybersecurity, today.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Quick Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-phone text-blue-400"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-green-400"></i>
                  <span>info@codesec.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-red-400"></i>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Portal
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Business Hours</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>
                  <div className="font-medium text-gray-300">Support</div>
                  <div>24/7 Emergency</div>
                  <div>Mon-Fri 8AM-8PM PST</div>
                </div>
                <div className="mt-4">
                  <div className="font-medium text-gray-300">Sales</div>
                  <div>Mon-Fri 9AM-6PM PST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 CODE_SEC. All rights reserved. CEO: Suryansh
              Srivastava
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;