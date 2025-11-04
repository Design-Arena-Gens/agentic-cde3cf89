'use client'

import { Bot, MessageSquare, Zap, Users, ChevronRight, CheckCircle, Star, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  const projects = [
    {
      title: "E-commerce Customer Support Bot",
      client: "RetailCo",
      description: "AI-powered chatbot handling 10,000+ customer inquiries daily with 95% satisfaction rate",
      results: ["70% reduction in support costs", "24/7 multilingual support", "3-second average response time"],
      tech: ["GPT-4", "Custom NLP", "CRM Integration"]
    },
    {
      title: "Lead Generation Assistant",
      client: "TechStart Inc",
      description: "Intelligent chatbot qualifying leads and scheduling demos automatically",
      results: ["300% increase in qualified leads", "85% booking rate", "Automated follow-up system"],
      tech: ["Claude AI", "Calendar API", "Salesforce Integration"]
    },
    {
      title: "Healthcare Appointment Bot",
      client: "MediCare Plus",
      description: "HIPAA-compliant chatbot managing patient appointments and inquiries",
      results: ["50% reduction in no-shows", "90% patient satisfaction", "Secure data handling"],
      tech: ["Azure AI", "HIPAA Compliance", "EHR Integration"]
    }
  ]

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Support Bots",
      description: "24/7 automated customer service that scales with your business"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Qualify prospects and book meetings automatically"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline workflows and reduce manual tasks"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "Tailored chatbots for your specific business needs"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, RetailCo",
      content: "The chatbot transformed our customer service. We're handling 5x more inquiries with the same team.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Head of Sales, TechStart Inc",
      content: "Our lead qualification process is now fully automated. Sales team focuses only on hot prospects.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Operations Director, MediCare Plus",
      content: "Patient satisfaction has never been higher. The bot handles appointments seamlessly and securely.",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">AI ChatBot Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-primary transition">Services</a>
              <a href="#projects" className="hover:text-primary transition">Portfolio</a>
              <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
            </div>
            <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Chatbots That Drive Business Growth
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform customer engagement with intelligent, custom-built AI chatbots. Automate support, generate leads, and scale your business 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#projects" className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                View Portfolio
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-slate-600 dark:text-slate-400">Chatbots Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-slate-600 dark:text-slate-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-slate-600 dark:text-slate-400">Messages Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-400">Support Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Comprehensive AI chatbot solutions for every business need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all hover:shadow-xl">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Real results from real businesses</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="text-sm text-primary font-semibold mb-2">{project.client}</div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">See what our clients have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">From concept to deployment in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and define chatbot objectives" },
              { step: "02", title: "Design", description: "Create conversation flows and integrate with your systems" },
              { step: "03", title: "Development", description: "Build and train your custom AI chatbot" },
              { step: "04", title: "Deploy & Optimize", description: "Launch and continuously improve performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Let's build an AI chatbot that drives real results for your company</p>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-left">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <a href="mailto:contact@aichatbotsolutions.com" className="hover:text-primary transition">
                      contact@aichatbotsolutions.com
                    </a>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <a href="tel:+15551234567" className="hover:text-primary transition">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Linkedin className="w-5 h-5 text-primary mr-3" />
                    <a href="#" className="hover:text-primary transition">
                      linkedin.com/company/aichatbots
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">AI ChatBot Solutions</span>
          </div>
          <p className="text-slate-400 mb-4">Building intelligent chatbots that transform businesses</p>
          <p className="text-slate-500 text-sm">© 2024 AI ChatBot Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
