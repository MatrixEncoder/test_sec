"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState({});
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [currentStat, setCurrentStat] = React.useState(0);
  const [realTimeStats, setRealTimeStats] = React.useState({
    threatsBlocked: 1247892,
    attacksDetected: 3456,
    vulnerabilitiesFixed: 892,
    systemsProtected: 15678,
    responseTime: 0.8,
  });

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

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate stats
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Real-time stats updater
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats((prev) => ({
        threatsBlocked:
          prev.threatsBlocked + Math.floor(Math.random() * 50) + 10,
        attacksDetected:
          prev.attacksDetected + Math.floor(Math.random() * 5) + 1,
        vulnerabilitiesFixed:
          prev.vulnerabilitiesFixed + Math.floor(Math.random() * 3),
        systemsProtected:
          prev.systemsProtected + Math.floor(Math.random() * 10),
        responseTime: Math.max(
          0.1,
          prev.responseTime + (Math.random() - 0.5) * 0.2
        ),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote:
        "CODE_SEC has transformed our security posture. Their platform detected vulnerabilities we never knew existed and helped us achieve SOC 2 compliance in record time.",
      author: "Sarah Johnson",
      position: "CISO",
      company: "TechCorp Inc.",
      image: "/api/placeholder/80/80",
      rating: 5,
    },
    {
      quote:
        "The best investment we've made in cybersecurity. The ROI was evident within the first month, and their support team is exceptional.",
      author: "Michael Chen",
      position: "CTO",
      company: "InnovateLabs",
      image: "/api/placeholder/80/80",
      rating: 5,
    },
    {
      quote:
        "Suryansh and his team truly understand enterprise security challenges. They're not just vendors, they're strategic partners in our security journey.",
      author: "Emily Rodriguez",
      position: "VP of Security",
      company: "GlobalTech Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
    },
    {
      quote:
        "CODE_SEC's AI-powered threat detection has been a game-changer. We've reduced false positives by 90% and our response time is now under 2 minutes.",
      author: "David Park",
      position: "Security Director",
      company: "FinanceFirst Bank",
      image: "/api/placeholder/80/80",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "5000+",
      label: "Enterprise Customers",
      icon: "fas fa-building",
      color: "text-blue-400",
    },
    {
      number: "99.9%",
      label: "Platform Uptime",
      icon: "fas fa-clock",
      color: "text-green-400",
    },
    {
      number: "500M+",
      label: "Threats Blocked Daily",
      icon: "fas fa-shield-alt",
      color: "text-red-400",
    },
    {
      number: "150+",
      label: "Countries Served",
      icon: "fas fa-globe",
      color: "text-purple-400",
    },
    {
      number: "24/7",
      label: "Security Monitoring",
      icon: "fas fa-eye",
      color: "text-yellow-400",
    },
    {
      number: "< 1min",
      label: "Threat Response Time",
      icon: "fas fa-bolt",
      color: "text-pink-400",
    },
    {
      number: "$2B+",
      label: "Assets Protected",
      icon: "fas fa-dollar-sign",
      color: "text-indigo-400",
    },
    {
      number: "95%",
      label: "Vulnerability Reduction",
      icon: "fas fa-chart-line",
      color: "text-cyan-400",
    },
  ];

  const features = [
    {
      icon: "fas fa-robot",
      title: "AI-Powered Security",
      description:
        "Advanced machine learning algorithms that adapt to new threats in real-time, providing proactive protection against zero-day vulnerabilities.",
      benefits: [
        "99.7% threat detection accuracy",
        "Automated incident response",
        "Predictive threat analysis",
        "Continuous learning capabilities",
      ],
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud-Native Architecture",
      description:
        "Built for the modern cloud infrastructure with seamless integration across AWS, Azure, Google Cloud, and hybrid environments.",
      benefits: [
        "Multi-cloud support",
        "Auto-scaling capabilities",
        "99.99% availability SLA",
        "Global edge deployment",
      ],
    },
    {
      icon: "fas fa-code",
      title: "DevSecOps Integration",
      description:
        "Seamlessly integrate security into your development pipeline with our comprehensive DevSecOps tools and automation.",
      benefits: [
        "CI/CD pipeline integration",
        "Automated security testing",
        "Real-time vulnerability scanning",
        "Developer-friendly APIs",
      ],
    },
    {
      icon: "fas fa-chart-bar",
      title: "Advanced Analytics",
      description:
        "Comprehensive security analytics and reporting with customizable dashboards and real-time threat intelligence.",
      benefits: [
        "Real-time dashboards",
        "Custom reporting",
        "Threat intelligence feeds",
        "Compliance tracking",
      ],
    },
    {
      icon: "fas fa-users-cog",
      title: "Expert Support",
      description:
        "24/7 support from certified security experts with dedicated account management and proactive monitoring.",
      benefits: [
        "24/7 expert support",
        "Dedicated account manager",
        "Proactive monitoring",
        "Security consulting",
      ],
    },
    {
      icon: "fas fa-lock",
      title: "Zero Trust Security",
      description:
        "Implement comprehensive zero trust architecture with identity verification, device compliance, and micro-segmentation.",
      benefits: [
        "Identity verification",
        "Device compliance",
        "Micro-segmentation",
        "Continuous authentication",
      ],
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      icon: "fas fa-university",
      description:
        "Protect sensitive financial data and ensure regulatory compliance with specialized banking security solutions.",
      clients: "500+ Banks & Credit Unions",
      compliance: ["PCI DSS", "SOX", "GDPR", "FFIEC"],
    },
    {
      name: "Healthcare",
      icon: "fas fa-heartbeat",
      description:
        "Secure patient data and medical systems with HIPAA-compliant security solutions designed for healthcare.",
      clients: "300+ Healthcare Organizations",
      compliance: ["HIPAA", "HITECH", "FDA", "GDPR"],
    },
    {
      name: "Technology",
      icon: "fas fa-microchip",
      description:
        "Protect intellectual property and secure development environments for technology companies and startups.",
      clients: "1000+ Tech Companies",
      compliance: ["ISO 27001", "SOC 2", "GDPR", "CCPA"],
    },
    {
      name: "Government",
      icon: "fas fa-flag-usa",
      description:
        "Meet stringent government security requirements with FedRAMP authorized solutions and clearance support.",
      clients: "50+ Government Agencies",
      compliance: ["FedRAMP", "FISMA", "NIST", "CJIS"],
    },
    {
      name: "E-commerce",
      icon: "fas fa-shopping-cart",
      description:
        "Secure online transactions and customer data with specialized e-commerce security solutions.",
      clients: "800+ E-commerce Sites",
      compliance: ["PCI DSS", "GDPR", "CCPA", "SOC 2"],
    },
    {
      name: "Manufacturing",
      icon: "fas fa-industry",
      description:
        "Protect industrial control systems and operational technology with specialized manufacturing security.",
      clients: "200+ Manufacturing Plants",
      compliance: ["NIST", "IEC 62443", "ISO 27001", "NERC CIP"],
    },
  ];

  const partnerships = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/120/60",
      type: "Technology Partner",
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/120/60",
      type: "Cloud Partner",
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/120/60",
      type: "Cloud Partner",
    },
    {
      name: "Salesforce",
      logo: "/api/placeholder/120/60",
      type: "Integration Partner",
    },
    {
      name: "ServiceNow",
      logo: "/api/placeholder/120/60",
      type: "Integration Partner",
    },
    {
      name: "Splunk",
      logo: "/api/placeholder/120/60",
      type: "Technology Partner",
    },
    {
      name: "CrowdStrike",
      logo: "/api/placeholder/120/60",
      type: "Security Partner",
    },
    { name: "Okta", logo: "/api/placeholder/120/60", type: "Identity Partner" },
  ];

  const newsItems = [
    {
      date: "January 15, 2025",
      title: "CODE_SEC Raises $100M Series C, Valued at $2B",
      summary:
        "Leading cybersecurity firm secures major funding round to accelerate AI development and global expansion.",
      source: "TechCrunch",
      category: "Funding",
    },
    {
      date: "January 10, 2025",
      title: "Named Leader in Gartner Magic Quadrant for Application Security",
      summary:
        "CODE_SEC recognized for completeness of vision and ability to execute in application security testing market.",
      source: "Gartner",
      category: "Recognition",
    },
    {
      date: "January 5, 2025",
      title: "New AI-Powered Threat Detection Reduces False Positives by 95%",
      summary:
        "Revolutionary machine learning algorithms set new industry standard for threat detection accuracy.",
      source: "Security Week",
      category: "Product",
    },
    {
      date: "December 20, 2024",
      title: "CODE_SEC Expands to Asia-Pacific with Singapore Office",
      summary:
        "Global expansion continues with new regional headquarters to serve growing APAC customer base.",
      source: "Business Wire",
      category: "Expansion",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        {/* Moving grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          }}
        />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header with parallax */}
      <header
        className="relative z-50 px-6 py-4 transition-all duration-300 border-b border-gray-800/50"
        style={{
          backgroundColor:
            scrollY > 50 ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo with glow effect */}
          <div className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 animate-glow">
              <div className="w-5 h-5 bg-black rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CODE_SEC
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Solutions", href: "/solutions" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105 font-medium">
              <i className="fas fa-user-circle"></i>
              <span>Log In</span>
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 hover:scale-105">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${
                isMenuOpen ? "fa-times" : "fa-bars"
              } text-xl transition-all duration-300`}
            ></i>
          </button>
        </nav>

        {/* Mobile Menu with slide animation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Solutions", href: "/solutions" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 font-medium"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="text-gray-300 hover:text-white transition-all duration-300 text-left hover:translate-x-2 font-medium">
                Log In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium w-fit shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <main className="relative">
        <div className="relative z-10 px-6 pt-2 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Main content */}
              <div className="max-w-4xl">
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-2 animate-pulse">
                    🚀 Trusted by 5000+ Enterprise Customers Worldwide
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                    opacity: Math.max(0, 1 - scrollY / 500),
                  }}
                >
                  The Future of
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Cyber Security
                  </span>
                  <br />
                  is Here
                </h1>

                <p
                  className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl leading-relaxed"
                  style={{
                    transform: `translateY(${scrollY * 0.15}px)`,
                    opacity: Math.max(0, 1 - scrollY / 400),
                  }}
                >
                  Protect your business with our billion-dollar AI-powered
                  cybersecurity platform. Trusted by Fortune 500 companies to
                  secure their most critical assets with 99.9% threat detection
                  accuracy and sub-minute response times.
                </p>

                <div
                  className="flex flex-col md:flex-row gap-6 mb-6"
                  style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                    opacity: Math.max(0, 1 - scrollY / 300),
                  }}
                >
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center space-x-2">
                    <span>Start Free Trial</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="border-2 border-gray-600 hover:border-blue-500 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 flex items-center space-x-2">
                    <i className="fas fa-play"></i>
                    <span>Watch Demo</span>
                  </button>
                </div>

                {/* Live Stats Ticker */}
                <div
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-2xl"
                  style={{
                    transform: `translateY(${scrollY * 0.25}px)`,
                    opacity: Math.max(0, 1 - scrollY / 250),
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">
                        Live Security Stats
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      Updated every 30 seconds
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.slice(0, 4).map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-bold ${stat.color}`}>
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Real-time Threat Statistics */}
              <div
                className="lg:block hidden"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  opacity: Math.max(0, 1 - scrollY / 400),
                }}
              >
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      Real-Time Threat Monitor
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <span className="text-red-400 text-sm font-medium">
                        LIVE
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Threats Blocked Today */}
                    <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-shield-alt text-red-400 text-xl"></i>
                          <span className="text-white font-medium">
                            Threats Blocked Today
                          </span>
                        </div>
                        <div className="text-red-400 text-sm">
                          ↑ +{Math.floor(Math.random() * 50) + 10}/min
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-red-400 font-mono">
                        {realTimeStats.threatsBlocked.toLocaleString()}
                      </div>
                    </div>

                    {/* Active Attacks Detected */}
                    <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 border border-orange-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-exclamation-triangle text-orange-400 text-xl"></i>
                          <span className="text-white font-medium">
                            Active Attacks
                          </span>
                        </div>
                        <div className="text-orange-400 text-sm">CRITICAL</div>
                      </div>
                      <div className="text-3xl font-bold text-orange-400 font-mono">
                        {realTimeStats.attacksDetected.toLocaleString()}
                      </div>
                    </div>

                    {/* Vulnerabilities Fixed */}
                    <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-400 text-xl"></i>
                          <span className="text-white font-medium">
                            Vulnerabilities Fixed
                          </span>
                        </div>
                        <div className="text-green-400 text-sm">
                          AUTO-RESOLVED
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-400 font-mono">
                        {realTimeStats.vulnerabilitiesFixed.toLocaleString()}
                      </div>
                    </div>

                    {/* Systems Protected */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-server text-blue-400 text-xl"></i>
                          <span className="text-white font-medium">
                            Systems Protected
                          </span>
                        </div>
                        <div className="text-blue-400 text-sm">MONITORED</div>
                      </div>
                      <div className="text-3xl font-bold text-blue-400 font-mono">
                        {realTimeStats.systemsProtected.toLocaleString()}
                      </div>
                    </div>

                    {/* Average Response Time */}
                    <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-bolt text-purple-400 text-xl"></i>
                          <span className="text-white font-medium">
                            Avg Response Time
                          </span>
                        </div>
                        <div className="text-purple-400 text-sm">REAL-TIME</div>
                      </div>
                      <div className="text-3xl font-bold text-purple-400 font-mono">
                        {realTimeStats.responseTime.toFixed(1)}s
                      </div>
                    </div>
                  </div>

                  {/* Global Threat Map Indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">
                        Global Threat Activity
                      </span>
                      <span className="text-yellow-400 text-sm">
                        HIGH ACTIVITY
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["US", "EU", "APAC"].map((region, i) => (
                        <div
                          key={region}
                          className="bg-gray-800/50 rounded p-2 text-center"
                        >
                          <div className="text-xs text-gray-400 mb-1">
                            {region}
                          </div>
                          <div
                            className={`w-2 h-2 rounded-full mx-auto ${
                              i === 0
                                ? "bg-red-400 animate-pulse"
                                : i === 1
                                ? "bg-yellow-400"
                                : "bg-green-400"
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-40 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </main>

      {/* Rotating Stats Section */}
      <section className="relative z-10 px-6 py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-300">
              Real-time security metrics from our global platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  currentStat === index ? "scale-110 opacity-100" : "opacity-70"
                }`}
              >
                <div
                  className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <i className={`${stat.icon} text-2xl`}></i>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section
        id="features"
        data-animate
        className={`py-24 px-6 transition-all duration-3000 ${
          isVisible.features
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose CODE_SEC?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive cybersecurity platform combines cutting-edge AI
              technology with expert human intelligence to provide unparalleled
              protection for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl group border border-gray-700/50 hover:border-blue-500/50 ${
                  isVisible.features
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className="fas fa-check text-green-400"></i>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        data-animate
        className={`py-24 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-3000 ${
          isVisible.industries
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized security solutions tailored for your industry's unique
              challenges and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group border border-gray-700/50 hover:border-blue-500/50 ${
                  isVisible.industries
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${industry.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="mb-4">
                  <div className="text-blue-400 font-medium mb-2">
                    {industry.clients}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {industry.compliance.map((comp, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section
        id="testimonials"
        data-animate
        className={`py-24 px-6 transition-all duration-3000 ${
          isVisible.testimonials
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from security leaders who
              trust CODE_SEC
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-yellow-400 text-xl mx-1"
                      ></i>
                    )
                  )}
                </div>
                <blockquote className="text-2xl text-gray-200 italic leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-gray-300">
                    {testimonials[activeTestimonial].position}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section
        id="partnerships"
        data-animate
        className={`py-24 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-3000 ${
          isVisible.partnerships
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-300">
              Integrated with the world's leading technology platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerships.map((partner, i) => (
              <div
                key={partner.name}
                className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group border border-gray-700/50 hover:border-blue-500/50 ${
                  isVisible.partnerships
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-12 object-contain mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-400 text-sm">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section
        id="news"
        data-animate
        className={`py-24 px-6 transition-all duration-3000 ${
          isVisible.news
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-300">
              Stay informed about our latest developments and industry insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, i) => (
              <div
                key={item.title}
                className={`bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 group border border-gray-700/50 hover:border-blue-500/50 ${
                  isVisible.news
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    Source: {item.source}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1">
                    <span>Read More</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies that trust CODE_SEC to protect their
            digital assets. Start your free trial today and experience the
            future of cybersecurity.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <i className="fas fa-rocket"></i>
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-500 text-white px-12 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 flex items-center justify-center space-x-2">
              <i className="fas fa-calendar"></i>
              <span>Schedule Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                30 Days
              </div>
              <div className="text-gray-300">Free Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                5 Min
              </div>
              <div className="text-gray-300">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        data-animate
        className={`bg-gray-900/95 backdrop-blur-sm py-16 px-6 transition-all duration-3000 border-t border-gray-800/50 ${
          isVisible.footer
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
        id="footer"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CODE_SEC
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The world's most advanced cybersecurity platform, trusted by
                Fortune 500 companies to protect their most critical digital
                assets. Founded by Suryansh Srivastava.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "fab fa-twitter", href: "#" },
                  { icon: "fab fa-linkedin", href: "#" },
                  { icon: "fab fa-github", href: "#" },
                  { icon: "fab fa-youtube", href: "#" },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Solutions",
                links: [
                  { name: "Application Security", href: "/solutions" },
                  { name: "Threat Detection", href: "/solutions" },
                  { name: "Data Protection", href: "/solutions" },
                  { name: "Compliance", href: "/solutions" },
                  { name: "Consulting", href: "/solutions" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "Leadership", href: "/about" },
                  { name: "Careers", href: "#" },
                  { name: "Press", href: "#" },
                  { name: "Investors", href: "#" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Blog", href: "/blog" },
                  { name: "Documentation", href: "#" },
                  { name: "Case Studies", href: "#" },
                  { name: "Webinars", href: "#" },
                  { name: "Support", href: "/contact" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-6 text-blue-400 text-lg">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                &copy; 2025 CODE_SEC. All rights reserved. CEO: Suryansh
                Srivastava
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse">
          <i className="fas fa-comment text-xl"></i>
        </button>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
          <i className="fas fa-question text-xl"></i>
        </button>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
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
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;