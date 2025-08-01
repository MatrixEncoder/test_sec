"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("general");
  const [selectedOffice, setSelectedOffice] = React.useState("san-francisco");
  const [isVisible, setIsVisible] = React.useState({});
  const [scrollY, setScrollY] = React.useState(0);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [supportTicketOpen, setSupportTicketOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    department: "sales",
    subject: "",
    message: "",
    priority: "medium",
  });
  const [activeFaq, setActiveFaq] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const offices = [
    {
      id: "san-francisco",
      name: "San Francisco HQ",
      address: "123 Market Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@codesec.com",
      timezone: "PST",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
      employees: "200+",
      image: "/api/placeholder/400/250",
      description: "Our global headquarters and main R&D center",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      departments: ["Sales", "Engineering", "Support", "Executive"],
      emergencyPhone: "+1 (555) 911-HELP",
    },
    {
      id: "london",
      name: "London Office",
      address: "25 Old Broad Street, London EC2N 1HN, UK",
      phone: "+44 20 7123 4567",
      email: "london@codesec.com",
      timezone: "GMT",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
      employees: "75+",
      image: "/api/placeholder/400/250",
      description: "European operations and customer success center",
      coordinates: { lat: 51.5074, lng: -0.1278 },
      departments: ["Sales", "Support", "Customer Success"],
      emergencyPhone: "+44 20 7911 HELP",
    },
    {
      id: "singapore",
      name: "Singapore Office",
      address: "1 Raffles Place, Singapore 048616",
      phone: "+65 6123 4567",
      email: "singapore@codesec.com",
      timezone: "SGT",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      employees: "50+",
      image: "/api/placeholder/400/250",
      description: "Asia-Pacific hub for sales and support",
      coordinates: { lat: 1.3521, lng: 103.8198 },
      departments: ["Sales", "Support", "Partnerships"],
      emergencyPhone: "+65 6911 HELP",
    },
    {
      id: "tokyo",
      name: "Tokyo Office",
      address: "1-1-1 Shibuya, Tokyo 150-0002, Japan",
      phone: "+81 3 1234 5678",
      email: "tokyo@codesec.com",
      timezone: "JST",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM JST",
      employees: "30+",
      image: "/api/placeholder/400/250",
      description: "Japan market expansion and local support",
      coordinates: { lat: 35.6762, lng: 139.6503 },
      departments: ["Sales", "Support"],
      emergencyPhone: "+81 3 911 HELP",
    },
  ];

  const teamDirectory = [
    {
      name: "Sarah Johnson",
      position: "VP of Sales",
      department: "Sales",
      email: "sarah.johnson@codesec.com",
      phone: "+1 (555) 123-4501",
      image: "/api/placeholder/150/150",
      office: "San Francisco",
      bio: "Leading our global sales strategy with 12+ years in enterprise software",
      linkedin: "#",
      availability: "online",
    },
    {
      name: "Michael Chen",
      position: "Director of Customer Success",
      department: "Support",
      email: "michael.chen@codesec.com",
      phone: "+1 (555) 123-4502",
      image: "/api/placeholder/150/150",
      office: "San Francisco",
      bio: "Ensuring customer success and satisfaction across all touchpoints",
      linkedin: "#",
      availability: "online",
    },
    {
      name: "Emma Williams",
      position: "Head of Partnerships",
      department: "Partnerships",
      email: "emma.williams@codesec.com",
      phone: "+44 20 7123 4501",
      image: "/api/placeholder/150/150",
      office: "London",
      bio: "Building strategic partnerships to expand our global reach",
      linkedin: "#",
      availability: "away",
    },
    {
      name: "David Park",
      position: "Technical Support Manager",
      department: "Support",
      email: "david.park@codesec.com",
      phone: "+65 6123 4501",
      image: "/api/placeholder/150/150",
      office: "Singapore",
      bio: "Leading technical support operations across APAC region",
      linkedin: "#",
      availability: "online",
    },
    {
      name: "Lisa Rodriguez",
      position: "Talent Acquisition Lead",
      department: "Careers",
      email: "lisa.rodriguez@codesec.com",
      phone: "+1 (555) 123-4503",
      image: "/api/placeholder/150/150",
      office: "San Francisco",
      bio: "Building world-class teams to drive our mission forward",
      linkedin: "#",
      availability: "online",
    },
    {
      name: "James Thompson",
      position: "Enterprise Sales Director",
      department: "Sales",
      email: "james.thompson@codesec.com",
      phone: "+44 20 7123 4502",
      image: "/api/placeholder/150/150",
      office: "London",
      bio: "Helping enterprises transform their security posture",
      linkedin: "#",
      availability: "busy",
    },
  ];

  const supportStatus = {
    general: { status: "online", responseTime: "< 2 hours", queue: 3 },
    technical: { status: "online", responseTime: "< 30 minutes", queue: 1 },
    sales: { status: "online", responseTime: "< 15 minutes", queue: 0 },
    emergency: { status: "online", responseTime: "< 5 minutes", queue: 0 },
  };

  const faqs = [
    {
      category: "General",
      question: "What is CODE_SEC and what services do you offer?",
      answer:
        "CODE_SEC is a leading cybersecurity platform that provides AI-powered threat detection, application security testing, data protection, and compliance solutions for enterprises worldwide.",
    },
    {
      category: "Technical",
      question: "How do I integrate CODE_SEC with my existing security tools?",
      answer:
        "Our platform offers comprehensive APIs and pre-built integrations with popular security tools like Splunk, ServiceNow, and major SIEM solutions. Our technical team can assist with custom integrations.",
    },
    {
      category: "Billing",
      question: "What are your pricing plans and payment options?",
      answer:
        "We offer flexible pricing based on your organization size and needs. Contact our sales team for a customized quote. We accept major credit cards, wire transfers, and purchase orders.",
    },
    {
      category: "Support",
      question: "What support options are available?",
      answer:
        "We provide 24/7 technical support, dedicated customer success managers, comprehensive documentation, training programs, and emergency response services for critical issues.",
    },
    {
      category: "Security",
      question: "How does CODE_SEC ensure the security of my data?",
      answer:
        "We maintain SOC 2 Type II, ISO 27001, and other security certifications. All data is encrypted in transit and at rest, with strict access controls and regular security audits.",
    },
    {
      category: "Implementation",
      question: "How long does it take to implement CODE_SEC?",
      answer:
        "Most implementations take 2-4 weeks depending on complexity. Our customer success team provides dedicated onboarding support to ensure smooth deployment.",
    },
  ];

  const customerStories = [
    {
      company: "TechCorp Inc.",
      industry: "Financial Services",
      challenge:
        "Needed to secure 500+ applications and achieve SOC 2 compliance",
      solution: "Implemented CODE_SEC platform with automated security testing",
      result:
        "90% reduction in vulnerabilities, SOC 2 compliance achieved in 3 months",
      quote: "CODE_SEC transformed our security posture completely.",
      contact: "Available for reference calls",
      logo: "/api/placeholder/120/60",
    },
    {
      company: "GlobalHealth Systems",
      industry: "Healthcare",
      challenge:
        "HIPAA compliance and protection of patient data across multiple systems",
      solution:
        "Deployed comprehensive data protection and monitoring solution",
      result: "HIPAA compliance maintained, zero data breaches in 2 years",
      quote: "The peace of mind CODE_SEC provides is invaluable.",
      contact: "Case study available",
      logo: "/api/placeholder/120/60",
    },
    {
      company: "InnovateLabs",
      industry: "Technology",
      challenge:
        "Rapid scaling required robust security without slowing development",
      solution: "Integrated DevSecOps platform with CI/CD pipeline",
      result: "Security testing automated, deployment speed increased 3x",
      quote: "CODE_SEC enabled us to scale securely and rapidly.",
      contact: "Reference available",
      logo: "/api/placeholder/120/60",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message. We'll get back to you within " +
        supportStatus[formData.department]?.responseTime || "24 hours"
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "text-green-400";
      case "away":
        return "text-yellow-400";
      case "busy":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "online":
        return "fas fa-circle";
      case "away":
        return "fas fa-clock";
      case "busy":
        return "fas fa-minus-circle";
      default:
        return "fas fa-circle";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0">
          {[...Array.from({ length: 60 })].map((_, i) => (
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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
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
            <a
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
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
            We're here to help you secure your digital future. Reach out to our
            team of experts for support, sales inquiries, partnerships, or
            career opportunities.
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                &lt; 15min
              </div>
              <div className="text-gray-300 text-sm">Sales Response</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-gray-300 text-sm">Global Offices</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-300 text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section
        id="contact-methods"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible["contact-methods"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Preferred Contact Method
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-comments text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Live Chat
              </h3>
              <p className="text-gray-300 mb-6">
                Get instant help from our support team
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Online Now</span>
              </div>
              <button
                onClick={() => setChatOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full"
              >
                Start Chat
              </button>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-ticket-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Support Ticket
              </h3>
              <p className="text-gray-300 mb-6">
                Submit detailed technical issues
              </p>
              <div className="text-blue-400 text-sm mb-4">
                Response: &lt; 2 hours
              </div>
              <button
                onClick={() => setSupportTicketOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full"
              >
                Create Ticket
              </button>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                Phone Support
              </h3>
              <p className="text-gray-300 mb-6">
                Speak directly with our experts
              </p>
              <div className="text-purple-400 text-sm mb-4">24/7 Available</div>
              <a
                href="tel:+15551234567"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full inline-block"
              >
                Call Now
              </a>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-exclamation-triangle text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Emergency</h3>
              <p className="text-gray-300 mb-6">Critical security incidents</p>
              <div className="text-red-400 text-sm mb-4">
                Response: &lt; 5 minutes
              </div>
              <a
                href="tel:+15559111111"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full inline-block"
              >
                Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section
        id="contact-forms"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible["contact-forms"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Forms by Department
          </h2>

          {/* Department Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2">
              {[
                { id: "sales", name: "Sales", icon: "fas fa-handshake" },
                { id: "support", name: "Support", icon: "fas fa-life-ring" },
                {
                  id: "partnerships",
                  name: "Partnerships",
                  icon: "fas fa-users",
                },
                { id: "careers", name: "Careers", icon: "fas fa-briefcase" },
                { id: "general", name: "General", icon: "fas fa-envelope" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-blue-400">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
                  Inquiry
                </h3>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      supportStatus[activeTab]?.status === "online"
                        ? "bg-green-400 animate-pulse"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  <span className="text-sm text-gray-300">
                    Response time:{" "}
                    {supportStatus[activeTab]?.responseTime || "24 hours"}
                  </span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Brief subject line"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white resize-none"
                    placeholder="Please provide detailed information about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">* Required fields</div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
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
            Global Office Locations
          </h2>

          {/* Office Selector */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(office.id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 text-center ${
                    selectedOffice === office.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <div className="font-medium">{office.name.split(" ")[0]}</div>
                  <div className="text-xs opacity-75">{office.timezone}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Office Details */}
          {offices.map(
            (office) =>
              selectedOffice === office.id && (
                <div
                  key={office.id}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div
                    className={`${
                      isVisible.offices
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    } transition-all duration-1000`}
                  >
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-blue-400 mb-4">
                        Interactive Map
                      </h4>
                      <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <i className="fas fa-map-marked-alt text-4xl text-blue-400 mb-2"></i>
                          <p className="text-gray-300">
                            Interactive map would be here
                          </p>
                          <p className="text-sm text-gray-400">
                            Lat: {office.coordinates.lat}, Lng:{" "}
                            {office.coordinates.lng}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isVisible.offices
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                    } transition-all duration-1000`}
                  >
                    <h3 className="text-3xl font-bold mb-4 text-blue-400">
                      {office.name}
                    </h3>
                    <p className="text-gray-300 mb-6">{office.description}</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-map-marker-alt text-red-400 w-5"></i>
                        <span className="text-gray-300">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-phone text-green-400 w-5"></i>
                        <a
                          href={`tel:${office.phone}`}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-envelope text-blue-400 w-5"></i>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-clock text-yellow-400 w-5"></i>
                        <span className="text-gray-300">{office.hours}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-users text-purple-400 w-5"></i>
                        <span className="text-gray-300">
                          {office.employees} employees
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-exclamation-triangle text-red-400 w-5"></i>
                        <span className="text-gray-300">
                          Emergency: {office.emergencyPhone}
                        </span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-purple-400 mb-4">
                        Departments
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {office.departments.map((dept, index) => (
                          <span
                            key={index}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
                        Schedule Visit
                      </button>
                      <button className="border border-gray-600 hover:border-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Team Directory */}
      <section
        id="team"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.team
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamDirectory.map((member, index) => (
              <div
                key={member.name}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group ${
                  isVisible.team
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full`}
                    >
                      <i
                        className={`${getStatusIcon(
                          member.availability
                        )} text-xs ${getStatusColor(member.availability)}`}
                      ></i>
                      <span
                        className={`text-xs ${getStatusColor(
                          member.availability
                        )}`}
                      >
                        {member.availability}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {member.department} • {member.office}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-envelope text-blue-400 w-4"></i>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-phone text-green-400 w-4"></i>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={member.linkedin}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.faq
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ${
                    isVisible.faq
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {faq.category}
                      </span>
                      <span className="font-medium text-white">
                        {faq.question}
                      </span>
                    </div>
                    <i
                      className={`fas fa-chevron-${
                        activeFaq === index ? "up" : "down"
                      } text-gray-400 transition-transform duration-300`}
                    ></i>
                  </button>

                  {activeFaq === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section
        id="success-stories"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible["success-stories"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Customer Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div
                key={story.company}
                className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible["success-stories"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="h-12 object-contain"
                  />
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {story.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {story.company}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">Result:</h4>
                    <p className="text-gray-300 text-sm">{story.result}</p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-blue-500 pl-4 mb-6">
                  <p className="text-gray-300 italic">"{story.quote}"</p>
                </blockquote>

                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm">
                    {story.contact}
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section
        id="social"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.social
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Connect With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400">
                Follow Us on Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "Twitter",
                    icon: "fab fa-twitter",
                    followers: "50K+",
                    color: "blue",
                  },
                  {
                    name: "LinkedIn",
                    icon: "fab fa-linkedin",
                    followers: "25K+",
                    color: "blue",
                  },
                  {
                    name: "GitHub",
                    icon: "fab fa-github",
                    followers: "15K+",
                    color: "gray",
                  },
                  {
                    name: "YouTube",
                    icon: "fab fa-youtube",
                    followers: "10K+",
                    color: "red",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center group"
                  >
                    <i
                      className={`${social.icon} text-3xl text-${social.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    ></i>
                    <h4 className="font-bold text-white mb-2">{social.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {social.followers} followers
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400">
                Additional Resources
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Knowledge Base",
                    icon: "fas fa-book",
                    description: "Comprehensive documentation and guides",
                  },
                  {
                    name: "Community Forum",
                    icon: "fas fa-users",
                    description: "Connect with other users and experts",
                  },
                  {
                    name: "Status Page",
                    icon: "fas fa-heartbeat",
                    description: "Real-time system status and updates",
                  },
                  {
                    name: "Security Portal",
                    icon: "fas fa-shield-alt",
                    description: "Security advisories and updates",
                  },
                ].map((resource) => (
                  <a
                    key={resource.name}
                    href="#"
                    className="flex items-center space-x-4 bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`${resource.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{resource.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {resource.description}
                      </p>
                    </div>
                    <i className="fas fa-arrow-right text-purple-400 ml-auto group-hover:translate-x-2 transition-transform duration-300"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CODE_SEC
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                The future of cybersecurity, today.
              </p>
              <div className="text-sm text-gray-400">
                <p>24/7 Support Available</p>
                <p>Emergency: +1 (555) 911-HELP</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Quick Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Sales: +1 (555) 123-SALE</li>
                <li>Support: +1 (555) 123-HELP</li>
                <li>Partnerships: +1 (555) 123-PART</li>
                <li>Careers: +1 (555) 123-JOBS</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Office Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>San Francisco: 8AM-6PM PST</li>
                <li>London: 9AM-5PM GMT</li>
                <li>Singapore: 9AM-6PM SGT</li>
                <li>Tokyo: 9AM-6PM JST</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">
                Emergency Contact
              </h4>
              <div className="bg-red-900/30 border border-red-500/50 p-4 rounded-lg">
                <p className="text-red-400 font-bold mb-2">
                  Critical Security Issues
                </p>
                <p className="text-white text-lg">+1 (555) 911-HELP</p>
                <p className="text-gray-400 text-sm">Available 24/7/365</p>
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

      {/* Live Chat Modal */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-white">Live Chat Support</h3>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white text-sm"></i>
                  </div>
                  <span className="font-medium text-white">Support Agent</span>
                </div>
                <p className="text-gray-300">
                  Hello! How can I help you today?
                </p>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Ticket Modal */}
      {supportTicketOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">
                Create Support Ticket
              </h3>
              <button
                onClick={() => setSupportTicketOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ticket Type
                    </label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white">
                      <option>Technical Issue</option>
                      <option>Bug Report</option>
                      <option>Feature Request</option>
                      <option>Account Issue</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Priority
                    </label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Brief description of the issue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white resize-none"
                    placeholder="Please provide detailed information about your issue..."
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setSupportTicketOpen(false)}
                    className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Create Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);}`}</style>
    </div>
  );
}

export default MainComponent;