import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Download, ExternalLink, Users, Clock, Target, ChevronRight, Menu, X, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [activeModule, setActiveModule] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const modules = [
    {
      id: 1,
      title: "SaaS Procurement Landscape",
      duration: "45 minutes",
      description: "Understand current trends and challenges in SaaS procurement",
      objectives: [
        "Understand the current state and trends in SaaS procurement",
        "Identify the challenges and opportunities within the SaaS procurement landscape", 
        "Recognize the importance of strategic SaaS procurement for enterprises"
      ],
      content: [
        {
          title: "Introduction to SaaS Procurement",
          text: "SaaS procurement is the process of acquiring and managing cloud-based software solutions to optimize spend, improve efficiency, and align with business goals. It involves evaluating vendors, ensuring security and compliance, and integrating the right SaaS solutions to meet organizational needs while managing overall spend."
        },
        {
          title: "Evolution and Growth of SaaS",
          text: "The steady growth in demand for SaaS solutions has led to an increased need for effective SaaS procurement strategies. Many enterprises struggle with the complexity of managing multiple SaaS subscriptions, including challenges with compliance and optimization of SaaS spend."
        },
        {
          title: "Key Benefits of Strategic SaaS Procurement",
          text: "Effective SaaS procurement offers several benefits: Cost Savings (reduce overall IT costs and avoid unnecessary expenses), Increased Efficiency (user-friendly and quick to implement solutions), Scalability (easily scale up or down based on needs), Enhanced Security and Compliance (proper security measures and data protection), and Better Supplier Management (optimal value and ROI)."
        },
        {
          title: "The SaaS Procurement Process",
          text: "A clear-cut procurement process includes: Needs Assessment (identify business requirements), Vendor Evaluation (evaluate based on functionality, pricing, security), Contract Negotiation (pricing, SLAs, data ownership), Implementation and Integration (integrate with existing systems), and Monitoring (continuous monitoring for ongoing value)."
        }
      ]
    },
    {
      id: 2,
      title: "Foundations of a Value Proposition",
      duration: "45 minutes",
      description: "Learn the core elements of compelling value propositions",
      objectives: [
        "Define what a value proposition is and its importance in B2B SaaS",
        "Understand the key components of a strong value proposition",
        "Differentiate between features and benefits"
      ],
      content: [
        {
          title: "What is a Value Proposition?",
          text: "A value proposition is a clear statement that articulates the unique value a product or service offers to its target customers. It explains how the solution solves customer problems, what benefits customers can expect, and why it is superior to alternatives. In B2B SaaS, a strong value proposition is crucial for demonstrating tangible business impact."
        },
        {
          title: "Key Components of a Strong Value Proposition",
          text: "A compelling value proposition includes: Customer Segment (who is the target customer?), Customer Problem/Need (what specific pain points?), Solution (how does your product address these problems?), Benefits (what measurable outcomes will the customer gain?), and Unique Differentiator (what makes your solution different and better?)."
        },
        {
          title: "Features vs. Benefits",
          text: "Features are characteristics of the product (e.g., 'Our platform tracks SaaS licenses'), while benefits are the positive outcomes customers derive (e.g., 'Our platform reduces wasted SaaS spend by 25% annually'). Always translate features into quantifiable benefits - savings, time saved, risk reduction."
        },
        {
          title: "The Value Proposition Canvas",
          text: "The Value Proposition Canvas helps ensure a product is positioned around what the customer values. It consists of the Customer Profile (customer jobs, pains, gains) and the Value Map (products & services, pain relievers, gain creators). This tool helps systematically develop and refine value propositions."
        }
      ]
    },
    {
      id: 3,
      title: "Crafting Business Impact Messaging",
      duration: "60 minutes",
      description: "Move beyond features to communicate measurable business impact",
      objectives: [
        "Link solution features to measurable business outcomes",
        "Communicate ROI and cost-benefit clearly to stakeholders",
        "Tailor messaging for CFO, CIO, and business unit leaders"
      ],
      content: [
        {
          title: "Linking Features to Business Outcomes",
          text: "Transform technical features into business language. For example, 'Automated spend analysis' becomes 'Reduce manual procurement tasks by 40 hours per month, allowing your team to focus on strategic initiatives.' Always quantify the impact with specific metrics, timeframes, and business value."
        },
        {
          title: "ROI and Cost-Benefit Communication",
          text: "Present clear ROI calculations with realistic assumptions. Use the Coupa case study as an example: 276% ROI over 3 years through spend visibility, process automation, and supplier optimization. Break down costs (implementation, training, ongoing) versus benefits (cost savings, efficiency gains, risk reduction)."
        },
        {
          title: "Stakeholder-Specific Messaging",
          text: "CFO Focus: Cost reduction, cash flow improvement, financial risk mitigation. CIO Focus: System integration, security, scalability, IT resource optimization. Business Unit Leaders: Process efficiency, user adoption, operational improvements, competitive advantage."
        },
        {
          title: "Quantifying Business Impact",
          text: "Use specific metrics: percentage cost reductions, time savings in hours/days, error reduction rates, compliance improvement scores. Provide before/after scenarios and benchmark against industry standards. Include both hard savings (direct cost reduction) and soft savings (efficiency improvements)."
        }
      ]
    },
    {
      id: 4,
      title: "Storytelling & Differentiation",
      duration: "60 minutes",
      description: "Create compelling narratives that differentiate your solution",
      objectives: [
        "Structure compelling customer success stories",
        "Position against competitors effectively",
        "Create emotional connection with stakeholders"
      ],
      content: [
        {
          title: "Story Structure for Success Stories",
          text: "Use the STAR method: Situation (customer's initial challenge), Task (what needed to be accomplished), Action (how your solution was implemented), Result (measurable outcomes achieved). Include specific metrics, timelines, and stakeholder quotes for credibility."
        },
        {
          title: "Competitive Positioning",
          text: "Focus on unique differentiators rather than feature comparisons. Highlight your solution's specific advantages: faster implementation, better user adoption, superior ROI, or unique capabilities. Use customer testimonials that specifically mention why they chose you over competitors."
        },
        {
          title: "Creating Emotional Connection",
          text: "Connect with stakeholders' personal and professional goals. Address their pain points, career objectives, and organizational challenges. Use language that resonates with their role and responsibilities. Show how success with your solution advances their personal and business objectives."
        },
        {
          title: "Differentiation Strategies",
          text: "Emphasize unique value propositions: proprietary technology, industry expertise, implementation methodology, customer support model, or partnership ecosystem. Use proof points like awards, certifications, customer retention rates, and analyst recognition to support differentiation claims."
        }
      ]
    },
    {
      id: 5,
      title: "Tools & Templates for Selling Value",
      duration: "45 minutes",
      description: "Practical tools and templates for value-based selling",
      objectives: [
        "Use value proposition canvas effectively",
        "Create ROI calculators and business cases",
        "Develop presentation templates and objection handling"
      ],
      content: [
        {
          title: "Value Proposition Canvas Application",
          text: "Map customer jobs (functional, emotional, social), pains (obstacles, risks, negative emotions), and gains (required, expected, desired outcomes). Then align your products/services, pain relievers, and gain creators. Use this mapping to create targeted messaging for different customer segments."
        },
        {
          title: "ROI Calculator Development",
          text: "Build calculators that include: current state costs (manual processes, inefficiencies, compliance risks), solution costs (software, implementation, training), and projected benefits (cost savings, efficiency gains, risk reduction). Provide conservative, realistic, and optimistic scenarios."
        },
        {
          title: "Business Case Templates",
          text: "Structure business cases with: Executive Summary, Current State Analysis, Proposed Solution, Financial Impact, Implementation Plan, Risk Assessment, and Success Metrics. Include stakeholder-specific sections addressing their unique concerns and objectives."
        },
        {
          title: "Objection Handling Framework",
          text: "Prepare responses for common objections: budget constraints (focus on ROI and payback period), timing concerns (highlight opportunity costs of delay), competitive alternatives (emphasize unique differentiators), and implementation complexity (provide clear roadmap and support structure)."
        }
      ]
    },
    {
      id: 6,
      title: "Presenting the Value Proposition",
      duration: "90 minutes",
      description: "Master the art of presenting value to different stakeholders",
      objectives: [
        "Adapt presentations for different audience types",
        "Use visual storytelling effectively",
        "Handle Q&A sessions professionally"
      ],
      content: [
        {
          title: "Audience Adaptation Strategies",
          text: "Technical Audiences: Focus on architecture, integration, security, scalability. Business Audiences: Emphasize ROI, efficiency, competitive advantage. Executive Audiences: Highlight strategic impact, risk mitigation, organizational benefits. Adjust depth, language, and examples accordingly."
        },
        {
          title: "Visual Storytelling Techniques",
          text: "Use compelling visuals: before/after process diagrams, ROI charts, customer success timelines, competitive comparison matrices. Incorporate customer logos, testimonials, and case study highlights. Keep slides clean, focused, and visually appealing with consistent branding."
        },
        {
          title: "Presentation Flow and Structure",
          text: "Opening: Hook with compelling statistic or customer success. Problem: Clearly articulate customer challenges. Solution: Present your value proposition with proof points. Benefits: Quantify business impact with specific metrics. Next Steps: Clear call to action with defined timeline."
        },
        {
          title: "Q&A Session Management",
          text: "Prepare for common questions about pricing, implementation, support, and competitive comparisons. Use the 'bridge' technique to redirect difficult questions to your key messages. Acknowledge concerns honestly and provide specific examples or case studies as responses."
        }
      ]
    },
    {
      id: 7,
      title: "Discovery Calls & SPIN Selling",
      duration: "75 minutes",
      description: "Use SPIN methodology to uncover customer needs and pain points",
      objectives: [
        "Apply SPIN selling methodology effectively",
        "Conduct thorough needs assessment",
        "Uncover implicit and explicit customer needs"
      ],
      content: [
        {
          title: "SPIN Methodology Overview",
          text: "SPIN stands for Situation, Problem, Implication, and Need-payoff questions. This methodology helps uncover customer needs and build value for your solution. Situation questions gather facts, Problem questions identify difficulties, Implication questions explore consequences, and Need-payoff questions focus on solution benefits."
        },
        {
          title: "Situation Questions",
          text: "Gather background information about the customer's current state: 'How do you currently manage SaaS procurement?' 'What systems are you using today?' 'How many SaaS applications does your organization use?' These questions establish context and build rapport while gathering essential information."
        },
        {
          title: "Problem and Implication Questions",
          text: "Problem: 'What challenges do you face with your current procurement process?' Implication: 'How does this inefficiency impact your team's productivity?' 'What's the cost of these manual processes?' These questions help customers recognize the severity of their problems and the need for change."
        },
        {
          title: "Need-Payoff Questions and Solution Positioning",
          text: "Need-payoff: 'How would automating this process benefit your organization?' 'What would it mean to reduce procurement cycle time by 50%?' These questions get customers to articulate the value of solving their problems, making them more receptive to your solution and creating urgency for change."
        }
      ]
    }
  ]

  const resources = [
    {
      title: "Complete Course Content",
      description: "Comprehensive guide covering all 7 modules with detailed content and references",
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "Coupa Case Study",
      description: "Real-world example showing 276% ROI over 3 years",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "Value Proposition Templates",
      description: "Ready-to-use templates for creating compelling value propositions",
      type: "DOCX",
      size: "850 KB"
    },
    {
      title: "ROI Calculator",
      description: "Excel template for calculating return on investment",
      type: "XLSX",
      size: "450 KB"
    }
  ]

  const references = [
    {
      title: "Beyond Features: Why Value-Based Selection is Critical for SaaS",
      author: "LinkedIn Article",
      url: "https://www.linkedin.com/pulse/beyond-features-why-value-based-selection-critical-saas-costa-rbtje/"
    },
    {
      title: "Balancing Automation and Personalization in Hospitality",
      author: "LinkedIn Article", 
      url: "https://www.linkedin.com/pulse/balancing-automation-personalization-how-hospitality-industry-costa-czhre/"
    },
    {
      title: "The Challenger Sale",
      author: "Harvard Business Review",
      url: "https://hbr.org/2011/07/the-challenger-sale"
    },
    {
      title: "Value Proposition Design",
      author: "Strategyzer",
      url: "https://www.strategyzer.com/books/value-proposition-design"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Leo - Business Knowledge Share</h1>
                <p className="text-sm text-gray-600">SaaS Procurement Value Proposition Course</p>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors">Modules</a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
              <a href="#references" className="text-gray-700 hover:text-blue-600 transition-colors">References</a>
            </nav>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t">
              <nav className="flex flex-col space-y-2 pt-4">
                <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Modules</a>
                <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Resources</a>
                <a href="#references" className="text-gray-700 hover:text-blue-600 transition-colors py-2">References</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building a Winning Value Proposition for 
            <span className="text-blue-600"> SaaS Procurement Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master the art of articulating compelling value propositions for SaaS procurement solutions. 
            Learn to move beyond feature-based selling to communicate measurable business impact using 
            proven frameworks and real-world examples.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="w-4 h-4 mr-2" />
              Sales Professionals
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Target className="w-4 h-4 mr-2" />
              Procurement Specialists
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              7 Modules
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Comprehensive Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">7 detailed modules covering everything from landscape analysis to SPIN selling methodology</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Real-World Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Coupa case study showing 276% ROI over 3 years with practical implementation insights</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Practical Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Templates, calculators, and frameworks you can use immediately in your sales process</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Course Modules</h3>
          
          <div className="grid gap-6">
            {modules.map((module) => (
              <Card 
                key={module.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  activeModule === module.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">{module.id}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        activeModule === module.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  
                  {activeModule === module.id && (
                    <div className="border-t pt-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives:</h4>
                        <ul className="space-y-2">
                          {module.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Module Content:</h4>
                        <div className="space-y-4">
                          {module.content.map((section, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-medium text-gray-900 mb-2">{section.title}</h5>
                              <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Course Resources</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.size}</span>
                    <Button size="sm" className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional References</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {references.map((reference, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{reference.title}</CardTitle>
                  <CardDescription>{reference.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2"
                    onClick={() => window.open(reference.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Article</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold">Leo - Business Knowledge Share</h4>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Empowering sales professionals and procurement specialists with the knowledge and tools 
            to create compelling value propositions for SaaS procurement solutions.
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2024 Leo - Business Knowledge Share. Course materials and content designed for educational purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

