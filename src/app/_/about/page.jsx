"use client";
import React from "react";

function MainComponent() {
  const [activeTimelineItem, setActiveTimelineItem] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState({});
  const [scrollY, setScrollY] = React.useState(0);
  const [activeOffice, setActiveOffice] = React.useState("headquarters");

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

  const leadership = [
    {
      name: "Suryansh Srivastava",
      position: "Chief Executive Officer & Founder",
      image: "/api/placeholder/300/300",
      bio: "Visionary leader with 15+ years in cybersecurity. Former CISO at Fortune 500 companies. MIT graduate with expertise in AI-driven security solutions.",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Forbes 30 Under 30",
        "Cybersecurity Leader of the Year 2024",
        "MIT Technology Review Innovator",
      ],
    },
    {
      name: "Dr. Sarah Chen",
      position: "Chief Technology Officer",
      image: "/api/placeholder/300/300",
      bio: "PhD in Computer Science from Stanford. Former Principal Engineer at Google. Expert in machine learning and threat detection algorithms.",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "IEEE Fellow",
        "Top 100 Women in Tech",
        "20+ Patents in AI Security",
      ],
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Security Officer",
      image: "/api/placeholder/300/300",
      bio: "Former NSA cybersecurity analyst with 20+ years experience. Specialized in enterprise security architecture and incident response.",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "CISSP Certified",
        "Former NSA",
        "Security Expert of the Year",
      ],
    },
    {
      name: "Emily Johnson",
      position: "Chief Operating Officer",
      image: "/api/placeholder/300/300",
      bio: "Operations expert with MBA from Wharton. Previously scaled operations at three successful tech startups from seed to IPO.",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Wharton MBA",
        "3x Startup Exits",
        "Operations Excellence Award",
      ],
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Suryansh Srivastava establishes CODE_SEC with a vision to revolutionize cybersecurity",
      milestone: "Seed funding of $2M raised",
      icon: "fas fa-rocket",
    },
    {
      year: "2020",
      title: "First Product Launch",
      description:
        "Released our flagship application security testing platform",
      milestone: "100+ enterprise customers acquired",
      icon: "fas fa-shield-alt",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description:
        "Raised $15M Series A to expand our AI-powered threat detection capabilities",
      milestone: "Team grew to 50+ employees",
      icon: "fas fa-chart-line",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Opened offices in London and Singapore, serving 500+ global customers",
      milestone: "ISO 27001 certification achieved",
      icon: "fas fa-globe",
    },
    {
      year: "2023",
      title: "Series B Success",
      description: "Secured $50M Series B funding, valued at $500M",
      milestone: "1000+ enterprise customers",
      icon: "fas fa-trophy",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description:
        "Recognized as Gartner Magic Quadrant Leader in Application Security",
      milestone: "Billion-dollar platform milestone",
      icon: "fas fa-crown",
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding AI capabilities and preparing for IPO",
      milestone: "5000+ customers worldwide",
      icon: "fas fa-star",
    },
  ];

  const offices = [
    {
      id: "headquarters",
      name: "San Francisco HQ",
      address: "123 Market Street, San Francisco, CA 94105",
      employees: "200+",
      image: "/api/placeholder/400/250",
      description: "Our global headquarters and main R&D center",
    },
    {
      id: "london",
      name: "London Office",
      address: "25 Old Broad Street, London EC2N 1HN, UK",
      employees: "75+",
      image: "/api/placeholder/400/250",
      description: "European operations and customer success center",
    },
    {
      id: "singapore",
      name: "Singapore Office",
      address: "1 Raffles Place, Singapore 048616",
      employees: "50+",
      image: "/api/placeholder/400/250",
      description: "Asia-Pacific hub for sales and support",
    },
  ];

  const values = [
    {
      title: "Security First",
      description:
        "We prioritize security in everything we do, from our products to our internal processes",
      icon: "fas fa-shield-alt",
      color: "blue",
    },
    {
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in cybersecurity technology",
      icon: "fas fa-lightbulb",
      color: "purple",
    },
    {
      title: "Transparency",
      description:
        "We believe in open communication and honest relationships with our customers and team",
      icon: "fas fa-eye",
      color: "green",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our work and never settle for good enough",
      icon: "fas fa-star",
      color: "yellow",
    },
    {
      title: "Collaboration",
      description:
        "We work together as one team to achieve our shared mission of securing the digital world",
      icon: "fas fa-users",
      color: "red",
    },
    {
      title: "Customer Success",
      description:
        "Our customers' success is our success. We're committed to their security and growth",
      icon: "fas fa-heart",
      color: "pink",
    },
  ];

  const awards = [
    {
      title: "Gartner Magic Quadrant Leader",
      year: "2024",
      category: "Application Security Testing",
      icon: "fas fa-trophy",
    },
    {
      title: "Forbes Cloud 100",
      year: "2024",
      category: "Top Private Cloud Companies",
      icon: "fas fa-cloud",
    },
    {
      title: "Cybersecurity Excellence Awards",
      year: "2023",
      category: "Best Cybersecurity Company",
      icon: "fas fa-medal",
    },
    {
      title: "Deloitte Technology Fast 500",
      year: "2023",
      category: "Fastest Growing Tech Company",
      icon: "fas fa-rocket",
    },
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "GDPR Compliant", description: "Data Protection Regulation" },
    { name: "HIPAA Compliant", description: "Healthcare Data Security" },
    { name: "FedRAMP", description: "Federal Risk Authorization" },
    { name: "PCI DSS", description: "Payment Card Industry Security" },
  ];

  const testimonials = [
    {
      quote:
        "CODE_SEC has transformed our security posture. Their platform detected vulnerabilities we never knew existed.",
      author: "Jane Smith",
      position: "CISO, TechCorp Inc.",
      company: "Fortune 500 Financial Services",
    },
    {
      quote:
        "The best investment we've made in cybersecurity. The ROI was evident within the first month.",
      author: "David Wilson",
      position: "CTO, InnovateLabs",
      company: "Healthcare Technology",
    },
    {
      quote:
        "Suryansh and his team truly understand enterprise security challenges. They're not just vendors, they're partners.",
      author: "Maria Garcia",
      position: "VP Security, GlobalTech",
      company: "Manufacturing Conglomerate",
    },
  ];

  const stats = [
    { number: "5000+", label: "Enterprise Customers", icon: "fas fa-building" },
    { number: "99.9%", label: "Platform Uptime", icon: "fas fa-clock" },
    { number: "500M+", label: "Threats Blocked", icon: "fas fa-shield-alt" },
    { number: "150+", label: "Countries Served", icon: "fas fa-globe" },
    { number: "24/7", label: "Security Monitoring", icon: "fas fa-eye" },
    { number: "< 1min", label: "Threat Response Time", icon: "fas fa-bolt" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-400",
      purple: "from-purple-500 to-purple-600 text-purple-400",
      green: "from-green-500 to-green-600 text-green-400",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-400",
      red: "from-red-500 to-red-600 text-red-400",
      pink: "from-pink-500 to-pink-600 text-pink-400",
    };
    return colors[color] || colors.blue;
  };

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
            <a href="/about" className="text-blue-400 font-medium">
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
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
            About CODE_SEC
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Founded with a vision to revolutionize cybersecurity, CODE_SEC has
            grown from a startup to a billion-dollar platform trusted by
            thousands of enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="relative z-10 px-6 py-12 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section
        id="mission"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.mission
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide enterprise-grade cybersecurity solutions that adapt
                to evolving threats and protect businesses of all sizes in the
                digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To create a world where every organization can operate securely
                in the digital realm, free from the fear of cyber threats.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Our Purpose
              </h3>
              <p className="text-gray-300">
                Empowering organizations to innovate fearlessly by providing
                comprehensive, intelligent, and proactive cybersecurity
                solutions.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 ${
                    isVisible.mission
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      getColorClasses(value.color).split(" ")[0]
                    } ${
                      getColorClasses(value.color).split(" ")[1]
                    } rounded-lg flex items-center justify-center mb-6`}
                  >
                    <i className={`${value.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        id="leadership"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.leadership
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={leader.name}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group ${
                  isVisible.leadership
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    {leader.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">{leader.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-yellow-400 mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-400 flex items-center space-x-2"
                        >
                          <i className="fas fa-star text-yellow-400"></i>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={leader.linkedin}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                      href={leader.twitter}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section
        id="timeline"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.timeline
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div
                      className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 ${
                        isVisible.timeline
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-20"
                      }`}
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-3">{item.description}</p>
                      <div className="text-sm text-purple-400 font-medium">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-black">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section
        id="awards"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.awards
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-yellow-400">
                Industry Awards
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div
                    key={award.title}
                    className={`flex items-center space-x-4 bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/80 transition-all duration-500 ${
                      isVisible.awards
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <i className={`${award.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-400">
                        {award.title}
                      </h4>
                      <p className="text-gray-300">{award.category}</p>
                      <p className="text-sm text-gray-400">{award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-green-400">
                Certifications & Compliance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 ${
                      isVisible.awards
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-certificate text-xl text-white"></i>
                    </div>
                    <h4 className="font-bold text-green-400 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-gray-400">{cert.description}</p>
                  </div>
                ))}
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
            Global Presence
          </h2>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(office.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeOffice === office.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          {offices.map(
            (office) =>
              activeOffice === office.id && (
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
                      className="w-full h-64 object-cover rounded-lg"
                    />
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
                    <p className="text-gray-300 mb-4">{office.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-map-marker-alt text-red-400"></i>
                        <span className="text-gray-300">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-users text-blue-400"></i>
                        <span className="text-gray-300">
                          {office.employees} employees
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.testimonials
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 ${
                  isVisible.testimonials
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <i className="fas fa-quote-left text-3xl text-blue-400 mb-4"></i>
                  <p className="text-gray-300 italic">{testimonial.quote}</p>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="font-bold text-blue-400">
                    {testimonial.author}
                  </h4>
                  <p className="text-purple-400 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture & Careers */}
      <section
        id="culture"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.culture
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={`${
                isVisible.culture
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              } transition-all duration-1000`}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Company Culture
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                At CODE_SEC, we believe that great security solutions come from
                great people. Our culture is built on innovation, collaboration,
                and a shared commitment to protecting the digital world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span className="text-gray-300">
                    Remote-first work environment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span className="text-gray-300">
                    Continuous learning and development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span className="text-gray-300">
                    Competitive compensation and equity
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span className="text-gray-300">
                    Comprehensive health and wellness benefits
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${
                isVisible.culture
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000`}
            >
              <img
                src="/api/placeholder/500/400"
                alt="Company culture"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Join Our Team</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our
              passion for cybersecurity and innovation. Explore opportunities to
              make a real impact in protecting the digital world.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
                View Open Positions
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                Learn About Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

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
              <h4 className="font-bold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Application Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Threat Detection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
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