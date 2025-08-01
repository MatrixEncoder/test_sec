"use client";
import React from "react";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isVisible, setIsVisible] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const articlesPerPage = 6;

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

  const categories = [
    { id: "all", name: "All Articles", icon: "fas fa-globe", count: 24 },
    {
      id: "application-security",
      name: "Application Security",
      icon: "fas fa-shield-alt",
      count: 8,
    },
    {
      id: "threat-detection",
      name: "Threat Detection",
      icon: "fas fa-search",
      count: 6,
    },
    {
      id: "compliance",
      name: "Compliance",
      icon: "fas fa-clipboard-check",
      count: 4,
    },
    {
      id: "industry-news",
      name: "Industry News",
      icon: "fas fa-newspaper",
      count: 3,
    },
    {
      id: "technical-guides",
      name: "Technical Guides",
      icon: "fas fa-code",
      count: 3,
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Evolution of Zero Trust Architecture in 2025",
      excerpt:
        "Exploring how Zero Trust security models are adapting to modern cloud environments and emerging threats.",
      content:
        "Zero Trust Architecture has become the cornerstone of modern cybersecurity strategies. In 2025, we're seeing unprecedented adoption rates across enterprises of all sizes. This comprehensive guide explores the latest developments in Zero Trust implementation, from micro-segmentation to identity verification protocols. We'll dive deep into real-world case studies showing how organizations have successfully transitioned from traditional perimeter-based security to a Zero Trust model, reducing breach incidents by up to 70%. The article covers practical implementation strategies, common pitfalls to avoid, and emerging technologies that are shaping the future of Zero Trust security.",
      author: {
        name: "Dr. Sarah Chen",
        role: "Chief Technology Officer",
        avatar: "/api/placeholder/60/60",
        bio: "PhD in Computer Science from Stanford. Former Principal Engineer at Google with 15+ years in cybersecurity.",
      },
      publishDate: "2025-01-28",
      readingTime: 12,
      category: "application-security",
      tags: ["Zero Trust", "Cloud Security", "Architecture", "Enterprise"],
      image: "/api/placeholder/800/400",
      featured: true,
      views: 15420,
      likes: 342,
      shares: 89,
    },
    {
      id: 2,
      title: "AI-Powered Threat Detection: Beyond Traditional SIEM",
      excerpt:
        "How machine learning and artificial intelligence are revolutionizing cybersecurity threat detection and response.",
      content:
        "Traditional SIEM solutions are struggling to keep pace with the sophistication of modern cyber threats. This in-depth analysis explores how AI and machine learning technologies are transforming threat detection capabilities. We examine real-world implementations of AI-powered security operations centers, behavioral analytics, and automated incident response systems. The article includes detailed case studies from Fortune 500 companies that have successfully deployed AI-driven security solutions, resulting in 85% faster threat detection and 60% reduction in false positives. We also discuss the challenges of implementing AI in security operations and provide a roadmap for organizations looking to enhance their threat detection capabilities.",
      author: {
        name: "Michael Rodriguez",
        role: "Chief Security Officer",
        avatar: "/api/placeholder/60/60",
        bio: "Former NSA cybersecurity analyst with 20+ years experience in enterprise security architecture.",
      },
      publishDate: "2025-01-25",
      readingTime: 15,
      category: "threat-detection",
      tags: ["AI", "Machine Learning", "SIEM", "Automation"],
      image: "/api/placeholder/800/400",
      featured: true,
      views: 12890,
      likes: 298,
      shares: 76,
    },
  ];

  const articles = [
    {
      id: 3,
      title: "GDPR Compliance in the Age of Cloud Computing",
      excerpt:
        "Navigate the complexities of GDPR compliance when using cloud services and third-party data processors.",
      content:
        "The General Data Protection Regulation (GDPR) continues to shape how organizations handle personal data, especially in cloud environments. This comprehensive guide provides practical strategies for maintaining GDPR compliance while leveraging cloud services. We cover data processing agreements, cross-border data transfers, and the latest guidance from European data protection authorities. The article includes real-world examples of GDPR compliance frameworks implemented by multinational corporations, along with common mistakes that can lead to significant fines. We also explore emerging privacy technologies like homomorphic encryption and differential privacy that can help organizations balance data utility with privacy protection.",
      author: {
        name: "Emily Johnson",
        role: "Chief Operating Officer",
        avatar: "/api/placeholder/60/60",
        bio: "Operations expert with MBA from Wharton. Previously scaled operations at three successful tech startups.",
      },
      publishDate: "2025-01-22",
      readingTime: 10,
      category: "compliance",
      tags: ["GDPR", "Privacy", "Cloud", "Compliance"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 8750,
      likes: 156,
      shares: 43,
    },
    {
      id: 4,
      title: "Securing DevOps Pipelines: A Complete Guide",
      excerpt:
        "Best practices for implementing security throughout the software development lifecycle in DevOps environments.",
      content:
        "DevSecOps has evolved from a buzzword to a critical business requirement. This technical guide provides a comprehensive approach to securing DevOps pipelines from code commit to production deployment. We cover static application security testing (SAST), dynamic application security testing (DAST), and interactive application security testing (IAST) integration strategies. The article includes practical examples of security automation in CI/CD pipelines, container security best practices, and infrastructure as code security scanning. Real-world case studies demonstrate how organizations have reduced security vulnerabilities by 90% while maintaining rapid deployment cycles. We also explore emerging trends like policy as code and security chaos engineering.",
      author: {
        name: "Alex Thompson",
        role: "Senior Security Engineer",
        avatar: "/api/placeholder/60/60",
        bio: "DevSecOps specialist with 10+ years experience in secure software development and cloud architecture.",
      },
      publishDate: "2025-01-20",
      readingTime: 18,
      category: "technical-guides",
      tags: ["DevSecOps", "CI/CD", "Automation", "Containers"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 11200,
      likes: 267,
      shares: 58,
    },
    {
      id: 5,
      title: "Major Data Breach Affects 50 Million Users",
      excerpt:
        "Analysis of the recent healthcare data breach and its implications for the industry's cybersecurity posture.",
      content:
        "A major healthcare provider recently disclosed a data breach affecting over 50 million patient records, marking one of the largest healthcare data breaches in recent years. This detailed analysis examines the attack vectors used, the timeline of the incident, and the organization's response efforts. We explore the broader implications for healthcare cybersecurity, including regulatory responses and industry-wide security improvements. The article provides actionable insights for healthcare organizations looking to strengthen their security posture, including specific recommendations for protecting electronic health records (EHR) systems and implementing robust access controls. We also discuss the long-term impact on patient trust and the financial implications of large-scale data breaches in the healthcare sector.",
      author: {
        name: "Dr. Maria Santos",
        role: "Healthcare Security Consultant",
        avatar: "/api/placeholder/60/60",
        bio: "Former CISO at major healthcare systems with expertise in HIPAA compliance and medical device security.",
      },
      publishDate: "2025-01-18",
      readingTime: 8,
      category: "industry-news",
      tags: ["Data Breach", "Healthcare", "HIPAA", "Incident Response"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 9340,
      likes: 189,
      shares: 67,
    },
    {
      id: 6,
      title: "Implementing Multi-Factor Authentication at Scale",
      excerpt:
        "Technical deep-dive into deploying MFA across enterprise environments with minimal user friction.",
      content:
        "Multi-Factor Authentication (MFA) is no longer optional in today's threat landscape. This technical guide provides a comprehensive approach to implementing MFA at enterprise scale while maintaining user experience. We cover various authentication factors, from traditional SMS and email to modern biometric and hardware-based solutions. The article includes detailed implementation strategies for different user populations, integration with existing identity management systems, and handling edge cases like offline access and emergency procedures. Real-world deployment examples show how organizations have achieved 99.9% MFA adoption rates while reducing help desk tickets by 40%. We also explore emerging authentication technologies like passwordless authentication and risk-based adaptive authentication.",
      author: {
        name: "James Wilson",
        role: "Identity & Access Management Specialist",
        avatar: "/api/placeholder/60/60",
        bio: "IAM expert with 12+ years experience in enterprise identity solutions and zero trust implementations.",
      },
      publishDate: "2025-01-15",
      readingTime: 14,
      category: "application-security",
      tags: ["MFA", "Authentication", "Identity", "Enterprise"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 7890,
      likes: 145,
      shares: 34,
    },
  ];

  const allArticles = [...featuredArticles, ...articles];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handleShare = (platform, article) => {
    const url = `${window.location.origin}/blog/${article.id}`;
    const text = `Check out this article: ${article.title}`;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      "application-security": "blue",
      "threat-detection": "red",
      compliance: "green",
      "industry-news": "purple",
      "technical-guides": "yellow",
    };
    return colors[category] || "gray";
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
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a href="/blog" className="text-blue-400 font-medium">
              Blog
            </a>
            <a
              href="/contact"
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
            Cybersecurity Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of emerging threats with expert analysis, technical
            guides, and industry insights from our security professionals.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
              />
              <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="relative z-10 px-6 py-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white"
                }`}
              >
                <i className={`${category.icon} text-sm`}></i>
                <span>{category.name}</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "all" && (
        <section
          id="featured"
          data-animate
          className={`py-20 px-6 transition-all duration-1000 ${
            isVisible.featured
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group ${
                    isVisible.featured
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 bg-${getCategoryColor(
                          article.category
                        )}-500 text-white text-xs font-medium rounded-full`}
                      >
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <span className="flex items-center space-x-1 text-white text-sm">
                        <i className="fas fa-eye"></i>
                        <span>{article.views.toLocaleString()}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-white text-sm">
                        <i className="fas fa-heart"></i>
                        <span>{article.likes}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span
                        className={`px-3 py-1 bg-${getCategoryColor(
                          article.category
                        )}-500/20 text-${getCategoryColor(
                          article.category
                        )}-400 text-xs font-medium rounded-full`}
                      >
                        {
                          categories.find((cat) => cat.id === article.category)
                            ?.name
                        }
                      </span>
                      <span className="text-gray-400 text-sm">
                        {formatDate(article.publishDate)}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <i className="fas fa-clock"></i>
                        <span>{article.readingTime} min read</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-blue-400">
                            {article.author.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {article.author.role}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleShare("twitter", article)}
                          className="w-8 h-8 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                        >
                          <i className="fab fa-twitter text-sm"></i>
                        </button>
                        <button
                          onClick={() => handleShare("linkedin", article)}
                          className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <i className="fab fa-linkedin text-sm"></i>
                        </button>
                        <button
                          onClick={() => handleShare("facebook", article)}
                          className="w-8 h-8 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                        >
                          <i className="fab fa-facebook text-sm"></i>
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section
        id="articles"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.articles
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {selectedCategory === "all"
                ? "Latest Articles"
                : categories.find((cat) => cat.id === selectedCategory)?.name}
            </h2>
            <div className="text-gray-400">
              Showing {currentArticles.length} of {filteredArticles.length}{" "}
              articles
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-search text-6xl text-gray-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or category filter
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-700/80 transition-all duration-500 hover:scale-105 group ${
                      isVisible.articles
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 bg-${getCategoryColor(
                            article.category
                          )}-500 text-white text-xs font-medium rounded-full`}
                        >
                          {
                            categories.find(
                              (cat) => cat.id === article.category
                            )?.name
                          }
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <span className="flex items-center space-x-1 text-white text-sm">
                          <i className="fas fa-eye"></i>
                          <span>{article.views.toLocaleString()}</span>
                        </span>
                        <span className="flex items-center space-x-1 text-white text-sm">
                          <i className="fas fa-heart"></i>
                          <span>{article.likes}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-gray-400 text-sm">
                          {formatDate(article.publishDate)}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center space-x-1">
                          <i className="fas fa-clock"></i>
                          <span>{article.readingTime} min read</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium text-blue-400 text-sm">
                              {article.author.name}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {article.author.role}
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-1">
                          <button
                            onClick={() => handleShare("twitter", article)}
                            className="w-7 h-7 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                          >
                            <i className="fab fa-twitter text-xs"></i>
                          </button>
                          <button
                            onClick={() => handleShare("linkedin", article)}
                            className="w-7 h-7 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                          >
                            <i className="fab fa-linkedin text-xs"></i>
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-2 py-1 text-gray-400 text-xs">
                            +{article.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-12">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fas fa-chevron-left mr-2"></i>
                    Previous
                  </button>

                  <div className="flex space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-10 h-10 rounded-lg transition-colors ${
                          currentPage === index + 1
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <i className="fas fa-chevron-right ml-2"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest cybersecurity insights,
            threat intelligence, and industry updates.
          </p>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 50,000+ security professionals. Unsubscribe anytime.
            </p>
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
              <h4 className="font-bold mb-4 text-blue-400">Blog Categories</h4>
              <ul className="space-y-2 text-gray-400">
                {categories.slice(1).map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Threat Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Follow Us</h4>
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-youtube text-xl"></i>
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
      `}</style>
    </div>
  );
}

export default MainComponent;