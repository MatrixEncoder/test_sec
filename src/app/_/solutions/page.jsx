"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("application-security");
  const [selectedPricing, setSelectedPricing] = React.useState("professional");
  const [isVisible, setIsVisible] = React.useState({});
  const [scrollY, setScrollY] = React.useState(0);
  const [activeDemoTab, setActiveDemoTab] =
    React.useState("vulnerability-scan");

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

  const solutions = [
    {
      id: "application-security",
      title: "Application Security Testing",
      icon: "fas fa-shield-alt",
      color: "blue",
      description:
        "Comprehensive application security testing and monitoring to protect your software from vulnerabilities.",
      features: [
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Interactive Application Security Testing (IAST)",
        "Software Composition Analysis (SCA)",
        "API Security Testing",
        "Mobile Application Security",
        "Container Security Scanning",
        "CI/CD Pipeline Integration",
      ],
      benefits: [
        "Reduce security vulnerabilities by 95%",
        "Accelerate secure development lifecycle",
        "Automated security testing",
        "Real-time vulnerability detection",
        "Compliance with security standards",
      ],
    },
    {
      id: "threat-detection",
      title: "Threat Detection & Response",
      icon: "fas fa-eye",
      color: "purple",
      description:
        "AI-powered threat detection and response systems that identify and neutralize security risks in real-time.",
      features: [
        "Advanced Threat Analytics",
        "Machine Learning Detection",
        "Behavioral Analysis",
        "Incident Response Automation",
        "Threat Intelligence Integration",
        "SIEM Integration",
        "24/7 Security Operations Center",
        "Forensic Analysis Tools",
      ],
      benefits: [
        "Detect threats 10x faster",
        "Reduce false positives by 80%",
        "Automated incident response",
        "Real-time threat intelligence",
        "Comprehensive security visibility",
      ],
    },
    {
      id: "data-protection",
      title: "Data Protection & Encryption",
      icon: "fas fa-lock",
      color: "red",
      description:
        "Advanced encryption and data protection solutions to keep your sensitive information secure.",
      features: [
        "End-to-End Encryption",
        "Data Loss Prevention (DLP)",
        "Database Security",
        "File Encryption",
        "Key Management System",
        "Data Classification",
        "Privacy Controls",
        "Backup Encryption",
      ],
      benefits: [
        "Military-grade encryption",
        "Prevent data breaches",
        "Regulatory compliance",
        "Automated data classification",
        "Zero-trust architecture",
      ],
    },
    {
      id: "vulnerability-management",
      title: "Vulnerability Management",
      icon: "fas fa-bug",
      color: "green",
      description:
        "Proactive vulnerability identification, assessment, and remediation across your entire infrastructure.",
      features: [
        "Continuous Vulnerability Scanning",
        "Risk-Based Prioritization",
        "Patch Management",
        "Asset Discovery",
        "Compliance Reporting",
        "Remediation Tracking",
        "Third-Party Risk Assessment",
        "Cloud Security Posture Management",
      ],
      benefits: [
        "Reduce attack surface by 90%",
        "Prioritize critical vulnerabilities",
        "Automated patch deployment",
        "Complete asset visibility",
        "Streamlined compliance",
      ],
    },
    {
      id: "security-consulting",
      title: "Security Consulting",
      icon: "fas fa-users",
      color: "yellow",
      description:
        "Expert security consulting services to help you build and maintain a robust cybersecurity program.",
      features: [
        "Security Architecture Review",
        "Risk Assessment",
        "Penetration Testing",
        "Security Strategy Development",
        "Incident Response Planning",
        "Security Training Programs",
        "Compliance Consulting",
        "Security Maturity Assessment",
      ],
      benefits: [
        "Expert security guidance",
        "Customized security strategy",
        "Hands-on penetration testing",
        "Comprehensive risk assessment",
        "Industry best practices",
      ],
    },
    {
      id: "compliance-solutions",
      title: "Compliance Solutions",
      icon: "fas fa-clipboard-check",
      color: "indigo",
      description:
        "Comprehensive compliance management solutions for various industry standards and regulations.",
      features: [
        "GDPR Compliance",
        "HIPAA Compliance",
        "SOX Compliance",
        "PCI DSS Compliance",
        "ISO 27001 Certification",
        "NIST Framework",
        "Automated Compliance Reporting",
        "Audit Trail Management",
      ],
      benefits: [
        "Ensure regulatory compliance",
        "Automated compliance monitoring",
        "Reduce audit preparation time",
        "Comprehensive documentation",
        "Risk mitigation",
      ],
    },
  ];

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic vulnerability scanning",
        "Email support",
        "Monthly security reports",
        "Up to 5 applications",
        "Standard integrations",
      ],
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced threat detection",
        "24/7 phone support",
        "Weekly security reports",
        "Up to 25 applications",
        "Premium integrations",
        "Custom dashboards",
        "API access",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Full security suite",
        "Dedicated security team",
        "Real-time monitoring",
        "Unlimited applications",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "SLA guarantees",
      ],
      popular: false,
    },
  ];

  const caseStudies = [
    {
      company: "TechCorp Inc.",
      industry: "Financial Services",
      challenge:
        "Needed to secure their mobile banking application and meet PCI DSS compliance requirements.",
      solution:
        "Implemented comprehensive application security testing and compliance monitoring.",
      results: [
        "99.9% reduction in security vulnerabilities",
        "Achieved PCI DSS compliance in 3 months",
        "50% faster deployment cycles",
        "$2M saved in potential breach costs",
      ],
      logo: "/api/placeholder/120/60",
    },
    {
      company: "HealthSystem Plus",
      industry: "Healthcare",
      challenge:
        "Required HIPAA compliance and protection of sensitive patient data across multiple applications.",
      solution:
        "Deployed data protection suite with end-to-end encryption and compliance monitoring.",
      results: [
        "100% HIPAA compliance achieved",
        "Zero data breaches in 2 years",
        "75% reduction in compliance costs",
        "Improved patient trust scores",
      ],
      logo: "/api/placeholder/120/60",
    },
    {
      company: "RetailGiant",
      industry: "E-commerce",
      challenge:
        "Faced increasing cyber threats and needed real-time threat detection for their online platform.",
      solution:
        "Implemented AI-powered threat detection and response system with 24/7 monitoring.",
      results: [
        "95% faster threat detection",
        "80% reduction in false positives",
        "$5M prevented in potential losses",
        "99.99% platform uptime",
      ],
      logo: "/api/placeholder/120/60",
    },
  ];

  const integrations = [
    { name: "AWS", icon: "fab fa-aws", category: "Cloud" },
    { name: "Azure", icon: "fab fa-microsoft", category: "Cloud" },
    { name: "Google Cloud", icon: "fab fa-google", category: "Cloud" },
    { name: "Jenkins", icon: "fab fa-jenkins", category: "CI/CD" },
    { name: "GitHub", icon: "fab fa-github", category: "DevOps" },
    { name: "Docker", icon: "fab fa-docker", category: "Containers" },
    {
      name: "Kubernetes",
      icon: "fas fa-dharmachakra",
      category: "Orchestration",
    },
    { name: "Slack", icon: "fab fa-slack", category: "Communication" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500",
      purple: "from-purple-500 to-purple-600 text-purple-400 border-purple-500",
      red: "from-red-500 to-red-600 text-red-400 border-red-500",
      green: "from-green-500 to-green-600 text-green-400 border-green-500",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-400 border-yellow-500",
      indigo: "from-indigo-500 to-indigo-600 text-indigo-400 border-indigo-500",
    };
    return colors[color] || colors.blue;
  };

  const activeSolution = solutions.find((s) => s.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0">
          {[...Array.from({ length: 30 })].map((_, i) => (
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
            <a href="/solutions" className="text-blue-400 font-medium">
              Solutions
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
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
            Comprehensive Security Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with our complete suite of cybersecurity
            solutions. From application security to compliance management, we've
            got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Explore Solutions
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Navigation */}
      <section className="relative z-10 px-6 py-12 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === solution.id
                    ? `bg-gradient-to-r ${
                        getColorClasses(solution.color).split(" ")[0]
                      } ${
                        getColorClasses(solution.color).split(" ")[1]
                      } text-white`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <i className={`${solution.icon} text-lg`}></i>
                <span className="hidden md:inline">{solution.title}</span>
              </button>
            ))}
          </div>

          {/* Active Solution Details */}
          {activeSolution && (
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      getColorClasses(activeSolution.color).split(" ")[0]
                    } ${
                      getColorClasses(activeSolution.color).split(" ")[1]
                    } rounded-lg flex items-center justify-center`}
                  >
                    <i
                      className={`${activeSolution.icon} text-2xl text-white`}
                    ></i>
                  </div>
                  <h2 className="text-3xl font-bold">{activeSolution.title}</h2>
                </div>
                <p className="text-gray-300 text-lg mb-8">
                  {activeSolution.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {activeSolution.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <i className="fas fa-check text-green-400"></i>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">
                    Benefits
                  </h3>
                  <div className="space-y-4">
                    {activeSolution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <i className="fas fa-star text-yellow-400 mt-1"></i>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full bg-gradient-to-r ${
                    getColorClasses(activeSolution.color).split(" ")[0]
                  } ${
                    getColorClasses(activeSolution.color).split(" ")[1]
                  } text-white py-4 rounded-lg hover:scale-105 transition-all duration-300 font-medium`}
                >
                  Learn More About {activeSolution.title}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section
        id="demo"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.demo
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Demos
          </h2>

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "vulnerability-scan",
                "threat-detection",
                "compliance-check",
              ].map((demo) => (
                <button
                  key={demo}
                  onClick={() => setActiveDemoTab(demo)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeDemoTab === demo
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {demo
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </button>
              ))}
            </div>

            <div className="bg-black/50 rounded-lg p-6 min-h-[400px] border border-gray-700">
              {activeDemoTab === "vulnerability-scan" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-green-400">
                      Vulnerability Scan Results
                    </h3>
                    <span className="text-sm text-gray-400">
                      Last scan: 2 minutes ago
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">3</div>
                      <div className="text-sm text-gray-300">
                        Critical Issues
                      </div>
                    </div>
                    <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">
                        7
                      </div>
                      <div className="text-sm text-gray-300">Medium Issues</div>
                    </div>
                    <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">
                        15
                      </div>
                      <div className="text-sm text-gray-300">Low Issues</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-red-900/20 border-l-4 border-red-500 rounded">
                      <span className="text-red-400">
                        SQL Injection vulnerability detected
                      </span>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                        CRITICAL
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                      <span className="text-yellow-400">
                        Outdated SSL certificate
                      </span>
                      <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">
                        MEDIUM
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeDemoTab === "threat-detection" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-400">
                      Real-time Threat Detection
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-400">
                        Live monitoring
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-900/20 border border-red-500/30 rounded">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-exclamation-triangle text-red-400"></i>
                        <div>
                          <div className="text-red-400 font-medium">
                            Suspicious login attempt blocked
                          </div>
                          <div className="text-xs text-gray-400">
                            IP: 192.168.1.100 | 2 minutes ago
                          </div>
                        </div>
                      </div>
                      <button className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Investigate
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-900/20 border border-yellow-500/30 rounded">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-shield-alt text-yellow-400"></i>
                        <div>
                          <div className="text-yellow-400 font-medium">
                            Unusual data access pattern detected
                          </div>
                          <div className="text-xs text-gray-400">
                            User: admin@company.com | 5 minutes ago
                          </div>
                        </div>
                      </div>
                      <button className="text-xs bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeDemoTab === "compliance-check" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-400">
                      Compliance Dashboard
                    </h3>
                    <span className="text-sm text-gray-400">
                      Last updated: 1 hour ago
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">GDPR Compliance</span>
                        <span className="text-green-400 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">HIPAA Compliance</span>
                        <span className="text-green-400 font-bold">100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">PCI DSS</span>
                        <span className="text-yellow-400 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SOX Compliance</span>
                        <span className="text-green-400 font-bold">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.pricing
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Security Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 transition-all duration-500 hover:scale-105 ${
                  tier.popular ? "ring-2 ring-blue-500 relative" : ""
                } ${
                  isVisible.pricing
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <i className="fas fa-check text-green-400"></i>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                      : "border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                  }`}
                >
                  {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible["case-studies"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 ${
                  isVisible["case-studies"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">
                      {study.company}
                    </h3>
                    <p className="text-gray-400">{study.industry}</p>
                  </div>
                  <img
                    src={study.logo}
                    alt={`${study.company} logo`}
                    className="w-16 h-8 object-contain opacity-70"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-red-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-green-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-purple-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start space-x-2"
                      >
                        <i className="fas fa-arrow-right text-blue-400 mt-1 text-xs"></i>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section
        id="integrations"
        data-animate
        className={`py-20 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.integrations
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Seamless Integrations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group ${
                  isVisible.integrations
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <i
                  className={`${integration.icon} text-4xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300 mb-4`}
                ></i>
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {integration.name}
                </h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Need a custom integration? We've got you covered.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Request Integration
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies that trust CODE_SEC to protect their
            digital assets.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              Schedule Consultation
            </button>
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
              <h4 className="font-bold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
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