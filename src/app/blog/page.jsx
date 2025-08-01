"use client";
import React from "react";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isVisible, setIsVisible] = React.useState({});
  const [scrollY, setScrollY] = React.useState(0);
  const [currentFeaturedPost, setCurrentFeaturedPost] = React.useState(0);
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedPost((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: "all", name: "All Posts", icon: "fas fa-th-large", count: 156 },
    {
      id: "threat-intelligence",
      name: "Threat Intelligence",
      icon: "fas fa-search",
      count: 28,
    },
    {
      id: "best-practices",
      name: "Security Best Practices",
      icon: "fas fa-shield-alt",
      count: 34,
    },
    {
      id: "industry-insights",
      name: "Industry Insights",
      icon: "fas fa-chart-line",
      count: 22,
    },
    {
      id: "product-updates",
      name: "Product Updates",
      icon: "fas fa-rocket",
      count: 18,
    },
    {
      id: "case-studies",
      name: "Case Studies",
      icon: "fas fa-file-alt",
      count: 15,
    },
    {
      id: "expert-interviews",
      name: "Expert Interviews",
      icon: "fas fa-microphone",
      count: 12,
    },
    {
      id: "tutorials",
      name: "Technical Tutorials",
      icon: "fas fa-code",
      count: 19,
    },
    {
      id: "compliance",
      name: "Compliance Guides",
      icon: "fas fa-clipboard-check",
      count: 8,
    },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Evolution of AI-Powered Cyber Threats in 2025",
      excerpt:
        "Exploring how artificial intelligence is reshaping the cybersecurity landscape and what organizations need to know to stay protected.",
      image: "/api/placeholder/800/400",
      category: "threat-intelligence",
      author: "Dr. Sarah Chen",
      date: "January 28, 2025",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "Threat Detection", "2025 Trends"],
    },
    {
      id: 2,
      title: "Zero Trust Architecture: Implementation Guide for Enterprises",
      excerpt:
        "A comprehensive guide to implementing zero trust security architecture in large-scale enterprise environments.",
      image: "/api/placeholder/800/400",
      category: "best-practices",
      author: "Michael Rodriguez",
      date: "January 25, 2025",
      readTime: "12 min read",
      tags: [
        "Zero Trust",
        "Enterprise Security",
        "Architecture",
        "Implementation",
      ],
    },
    {
      id: 3,
      title: "CODE_SEC Platform 3.0: Revolutionary Security Analytics",
      excerpt:
        "Introducing our latest platform update with enhanced AI capabilities, real-time threat visualization, and automated response systems.",
      image: "/api/placeholder/800/400",
      category: "product-updates",
      author: "Suryansh Srivastava",
      date: "January 22, 2025",
      readTime: "6 min read",
      tags: ["Product Update", "Analytics", "AI", "Platform"],
    },
  ];

  const blogPosts = [
    {
      id: 4,
      title: "Ransomware Defense Strategies for Financial Institutions",
      excerpt:
        "Learn how financial institutions can protect themselves against sophisticated ransomware attacks with multi-layered defense strategies.",
      image: "/api/placeholder/400/250",
      category: "best-practices",
      author: "Emily Johnson",
      date: "January 20, 2025",
      readTime: "10 min read",
      tags: ["Ransomware", "Financial Services", "Defense", "Banking"],
      featured: false,
    },
    {
      id: 5,
      title: "GDPR Compliance in the Age of Cloud Computing",
      excerpt:
        "Navigate the complexities of GDPR compliance when using cloud services and ensure your data protection strategies meet regulatory requirements.",
      image: "/api/placeholder/400/250",
      category: "compliance",
      author: "Dr. Sarah Chen",
      date: "January 18, 2025",
      readTime: "7 min read",
      tags: ["GDPR", "Cloud Security", "Compliance", "Data Protection"],
      featured: false,
    },
    {
      id: 6,
      title: "Interview: CISO Perspectives on Emerging Threats",
      excerpt:
        "Exclusive interview with Fortune 500 CISOs discussing the most pressing cybersecurity challenges facing enterprises today.",
      image: "/api/placeholder/400/250",
      category: "expert-interviews",
      author: "Michael Rodriguez",
      date: "January 15, 2025",
      readTime: "15 min read",
      tags: ["CISO", "Interview", "Enterprise", "Leadership"],
      featured: false,
    },
    {
      id: 7,
      title: "Building Secure APIs: A Developer's Guide",
      excerpt:
        "Essential security practices for API development, including authentication, authorization, rate limiting, and vulnerability prevention.",
      image: "/api/placeholder/400/250",
      category: "tutorials",
      author: "Alex Thompson",
      date: "January 12, 2025",
      readTime: "14 min read",
      tags: ["API Security", "Development", "Authentication", "Best Practices"],
      featured: false,
    },
    {
      id: 8,
      title: "Case Study: Preventing a Multi-Million Dollar Breach",
      excerpt:
        "How CODE_SEC's threat detection platform helped a major retailer prevent a sophisticated attack that could have cost millions.",
      image: "/api/placeholder/400/250",
      category: "case-studies",
      author: "Jennifer Liu",
      date: "January 10, 2025",
      readTime: "9 min read",
      tags: ["Case Study", "Threat Detection", "Retail", "Prevention"],
      featured: false,
    },
    {
      id: 9,
      title: "The State of Cybersecurity in Healthcare 2025",
      excerpt:
        "Analyzing the unique cybersecurity challenges facing healthcare organizations and the regulatory landscape shaping security practices.",
      image: "/api/placeholder/400/250",
      category: "industry-insights",
      author: "Dr. Maria Garcia",
      date: "January 8, 2025",
      readTime: "11 min read",
      tags: ["Healthcare", "Industry Analysis", "HIPAA", "Medical Devices"],
      featured: false,
    },
    {
      id: 10,
      title: "Advanced Threat Hunting with Machine Learning",
      excerpt:
        "Deep dive into using machine learning algorithms for proactive threat hunting and anomaly detection in enterprise networks.",
      image: "/api/placeholder/400/250",
      category: "tutorials",
      author: "Dr. Sarah Chen",
      date: "January 5, 2025",
      readTime: "16 min read",
      tags: ["Threat Hunting", "Machine Learning", "Analytics", "Detection"],
      featured: false,
    },
    {
      id: 11,
      title: "Supply Chain Security: Lessons from Recent Attacks",
      excerpt:
        "Examining recent supply chain attacks and developing comprehensive strategies to secure your software supply chain.",
      image: "/api/placeholder/400/250",
      category: "threat-intelligence",
      author: "Robert Kim",
      date: "January 3, 2025",
      readTime: "13 min read",
      tags: ["Supply Chain", "Software Security", "Risk Management", "Vendors"],
      featured: false,
    },
    {
      id: 12,
      title: "CODE_SEC Integration with Microsoft Azure Sentinel",
      excerpt:
        "Step-by-step guide to integrating CODE_SEC's security platform with Microsoft Azure Sentinel for enhanced SIEM capabilities.",
      image: "/api/placeholder/400/250",
      category: "tutorials",
      author: "Alex Thompson",
      date: "December 30, 2024",
      readTime: "12 min read",
      tags: ["Integration", "Azure", "SIEM", "Microsoft"],
      featured: false,
    },
  ];

  const authors = [
    {
      id: "suryansh-srivastava",
      name: "Suryansh Srivastava",
      title: "CEO & Founder",
      bio: "Visionary leader with 15+ years in cybersecurity. Former CISO at Fortune 500 companies.",
      image: "/api/placeholder/100/100",
      expertise: ["Leadership", "Strategy", "Enterprise Security"],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "sarah-chen",
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "PhD in Computer Science from Stanford. Expert in AI-driven security solutions.",
      image: "/api/placeholder/100/100",
      expertise: ["AI/ML", "Threat Detection", "Research"],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "michael-rodriguez",
      name: "Michael Rodriguez",
      title: "Chief Security Officer",
      bio: "Former NSA analyst with 20+ years in cybersecurity and incident response.",
      image: "/api/placeholder/100/100",
      expertise: [
        "Incident Response",
        "Threat Intelligence",
        "Enterprise Security",
      ],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "emily-johnson",
      name: "Emily Johnson",
      title: "VP of Product Security",
      bio: "Product security expert with extensive experience in secure development practices.",
      image: "/api/placeholder/100/100",
      expertise: ["Product Security", "DevSecOps", "Secure Development"],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const trendingTags = [
    "Zero Trust",
    "AI Security",
    "Cloud Security",
    "Ransomware",
    "GDPR",
    "Threat Hunting",
    "DevSecOps",
    "Compliance",
    "API Security",
    "Supply Chain",
  ];

  const relatedArticles = [
    {
      title: "Understanding Zero Trust Network Architecture",
      category: "best-practices",
    },
    {
      title: "Cloud Security Fundamentals for Enterprises",
      category: "tutorials",
    },
    {
      title: "The Future of Cybersecurity: 2025 Predictions",
      category: "industry-insights",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
  };

  const getCategoryColor = (category) => {
    const colors = {
      "threat-intelligence": "text-red-400 bg-red-500/20",
      "best-practices": "text-blue-400 bg-blue-500/20",
      "industry-insights": "text-purple-400 bg-purple-500/20",
      "product-updates": "text-green-400 bg-green-500/20",
      "case-studies": "text-yellow-400 bg-yellow-500/20",
      "expert-interviews": "text-pink-400 bg-pink-500/20",
      tutorials: "text-cyan-400 bg-cyan-500/20",
      compliance: "text-orange-400 bg-orange-500/20",
    };
    return colors[category] || "text-gray-400 bg-gray-500/20";
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
      <header
        className="relative z-50 px-6 py-4 transition-all duration-300 border-b border-gray-800/50"
        style={{
          backgroundColor:
            scrollY > 50 ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              <div className="w-5 h-5 bg-black rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CODE_SEC
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/solutions"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </a>
            <a href="/blog" className="text-blue-400 font-medium">
              Blog
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105 font-medium">
              <i className="fas fa-user-circle"></i>
              <span>Log In</span>
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25">
              Start Free Trial
            </button>
          </div>

          <button
            className="md:hidden text-white hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/solutions"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Solutions
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                About
              </a>
              <a href="/blog" className="text-blue-400 font-medium">
                Blog
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Cybersecurity Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of emerging threats with expert analysis, industry
            insights, and practical security guidance from the CODE_SEC team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <i className="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Articles
          </h2>

          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentFeaturedPost * 100}%)`,
              }}
            >
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                              post.category
                            )}`}
                          >
                            {
                              categories.find((cat) => cat.id === post.category)
                                ?.name
                            }
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4 text-white hover:text-blue-400 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <i className="fas fa-user text-blue-400"></i>
                              <span className="text-gray-300">
                                {post.author}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <i className="fas fa-calendar text-purple-400"></i>
                              <span className="text-gray-300">{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <i className="fas fa-clock text-green-400"></i>
                              <span className="text-gray-300">
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
                          Read Article
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeaturedPost(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentFeaturedPost === index
                      ? "bg-blue-500"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-blue-400">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <i className={`${category.icon} text-sm`}></i>
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Tags */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-purple-400">
                  Trending Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-gray-700/50 hover:bg-purple-500/20 text-gray-300 hover:text-purple-400 px-3 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Get the latest cybersecurity insights delivered to your inbox
                  weekly.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Author Spotlight */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-green-400">
                  Author Spotlight
                </h3>
                <div className="space-y-4">
                  {authors.slice(0, 2).map((author) => (
                    <div
                      key={author.id}
                      className="flex items-center space-x-3"
                    >
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-12 h-12 rounded-full border-2 border-blue-500"
                      />
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          {author.name}
                        </h4>
                        <p className="text-gray-400 text-xs">{author.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory === "all"
                    ? "All Articles"
                    : categories.find((cat) => cat.id === selectedCategory)
                        ?.name}
                </h2>
                <div className="text-gray-400">
                  {filteredPosts.length} articles found
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={`bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 group border border-gray-700/50 hover:border-blue-500/50 ${
                      isVisible.articles
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                            post.category
                          )}`}
                        >
                          {
                            categories.find((cat) => cat.id === post.category)
                              ?.name
                          }
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500/50 transition-colors">
                          <i className="fas fa-bookmark text-sm"></i>
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <i className="fas fa-user"></i>
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <i className="fas fa-calendar"></i>
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <i className="fas fa-clock"></i>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm flex items-center space-x-2">
                          <span>Read More</span>
                          <i className="fas fa-arrow-right"></i>
                        </button>
                        <div className="flex items-center space-x-3">
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            <i className="fas fa-heart text-sm"></i>
                          </button>
                          <button className="text-gray-400 hover:text-blue-400 transition-colors">
                            <i className="fas fa-share text-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section
        id="related"
        data-animate
        className={`py-16 px-6 bg-gray-900/50 backdrop-blur-sm transition-all duration-1000 ${
          isVisible.related
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <div
                key={index}
                className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 border border-gray-700/50 ${
                  isVisible.related
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                    article.category
                  )} mb-4 inline-block`}
                >
                  {categories.find((cat) => cat.id === article.category)?.name}
                </span>
                <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors cursor-pointer mb-4">
                  {article.title}
                </h3>
                <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm flex items-center space-x-2">
                  <span>Read Article</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-sm py-16 px-6 border-t border-gray-800/50">
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
                Stay informed with the latest cybersecurity insights, threat
                intelligence, and industry best practices from our team of
                experts.
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
                title: "Blog Categories",
                links: [
                  { name: "Threat Intelligence", href: "#" },
                  { name: "Best Practices", href: "#" },
                  { name: "Industry Insights", href: "#" },
                  { name: "Product Updates", href: "#" },
                  { name: "Case Studies", href: "#" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "White Papers", href: "#" },
                  { name: "Webinars", href: "#" },
                  { name: "Documentation", href: "#" },
                  { name: "API Reference", href: "#" },
                  { name: "Support", href: "/contact" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "Careers", href: "#" },
                  { name: "Press", href: "#" },
                  { name: "Contact", href: "/contact" },
                  { name: "Privacy Policy", href: "#" },
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
                  Terms of Service
                </a>
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
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;