import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Fleet Operations Intelligence Agent",
      description: "Delivers natural-language fleet intelligence via a Bedrock-backed agent. Nine OpenAPI 3.0 endpoints route requests and query DynamoDB for vehicle, financial, insurance, and maintenance data. Redis/RediSearch covers 35+ dashboard filters, with DynamoDB Streams keeping indexes live.",
      tech: ["AWS Bedrock Agents", "Lambda", "DynamoDB", "API Gateway WebSocket", "OpenAPI 3.0", "Redis Cloud", "RediSearch", "DynamoDB Streams"],
      image: "/images/placeholder.png",
      liveLink: "",
      highlights: [
        "9 API endpoints via OpenAPI 3.0 for Bedrock Agent orchestration",
        "35+ dashboard filters across vehicle, financial, insurance, and maintenance",
        "Plain-language questions return structured fleet data",
        "Real-time indexing with DynamoDB Streams so dashboards stay current"
      ]
    },
    {
      title: "Unified Business Communications",
      description: "Unifies SMS, MMS, and WebRTC voice (LAML/cXML) in one stack. Secures access with JWT, OTP, bcrypt, and RBAC across 50+ REST endpoints. OpenAI GPT, embeddings, and Scikit-learn route FAQs and auto-reply, cutting response time by 60% with ThreadPoolExecutor.",
      tech: ["FastAPI", "PostgreSQL", "SignalWire", "S3", "CloudFront", "WebRTC", "LAML/cXML", "OpenAI GPT", "Scikit-learn", "JWT", "OTP", "bcrypt", "RBAC", "ThreadPoolExecutor"],
      image: "/images/placeholder.png",
      liveLink: "",
      highlights: [
        "Single stack for voice, SMS, and MMS",
        "JWT, OTP, bcrypt, and RBAC across 50+ REST endpoints",
        "Semantic routing and FAQ auto-reply",
        "60% faster responses with ThreadPoolExecutor"
      ]
    },
    {
      title: "Data Intelligence & Workflow Automation",
      description: "Runs document and approval pipelines end-to-end. LlamaParse extracts PDFs at 95% accuracy; Gemini and SQS parse payments and invoices, then Slack routes approval or auto-approves by threshold. Playwright retrieves insurance quotes. Bedrock agents power natural-language analytics, dashboards, form tracking, and documentation.",
      tech: ["AWS Lambda", "PostgreSQL", "SQS", "LlamaParse", "Gemini AI", "Slack", "Playwright", "AWS Bedrock"],
      image: "/images/placeholder.png",
      liveLink: "",
      highlights: [
        "LlamaParse document extraction at 95% accuracy",
        "Slack approval with amount threshold and vendor checks",
        "Playwright automation for insurance quote retrieval",
        "Bedrock agents for analytics, form tracking, and documentation"
      ]
    },
    {
      title: "AI-Powered Vehicle Intelligence Platform",
      description: "Discovers, ranks, and prices live vehicle inventory with AI. ECS Fargate crawlers run on EventBridge and Step Functions; SQS loads the catalog into DynamoDB. Titan embeddings and Grok on Bedrock power a DynamoDB vector index for search and ranking, and Gemini prices each vehicle. Next.js serves the results, secured with Cognito, IAM, Secrets Manager, and VPC endpoints.",
      tech: ["Next.js", "AWS Lambda", "API Gateway", "DynamoDB vector index", "ECS Fargate", "Step Functions", "EventBridge", "SQS", "Amazon Bedrock", "Amazon Titan Embeddings", "Grok", "Gemini", "Amazon Cognito", "AWS IAM", "AWS Secrets Manager", "VPC Endpoints"],
      image: "/images/placeholder.png",
      liveLink: "",
      highlights: [
        "Natural-language search over live vehicle inventory",
        "Semantic retrieval and ranking with Titan embeddings and Grok",
        "Scheduled collection on ECS Fargate via Step Functions, EventBridge, and SQS",
        "Gemini vehicle pricing, secured with Cognito and Secrets Manager"
      ]
    },
    {
      title: "Email-to-SMS & Google Voice Hub",
      description: "Bridges Gmail and SMS/Google Voice. Processes incoming email via SQS, structures contacts and conversations, and persists to DynamoDB. Pushes live updates over WebSocket and keeps history queryable, delivering 99.9% uptime for always-on support.",
      tech: ["Gmail API", "WebSocket", "DynamoDB", "Google Voice", "SQS"],
      image: "/images/placeholder.png",
      liveLink: "",
      highlights: [
        "Unified inbox for email and SMS/Google Voice",
        "Event-driven pipeline from ingest to storage",
        "Live updates and connection state via WebSocket",
        "99.9% uptime with searchable conversation history"
      ]
    },
    {
      title: "AI-Powered Business Chatbot",
      description: "Powers support from a curated knowledge base via Strands Agent on Bedrock. Queries the knowledge base and checks DynamoDB for admin corrections before generating responses. Logs conversations and serves live chat over WebSocket from a React front end.",
      tech: ["AWS Bedrock", "Pinecone", "Strands Agent", "React", "WebSocket"],
      image: "/images/placeholder.png",
      liveLink: "",
      highlights: [
        "Answers grounded in a curated knowledge base",
        "Admin overrides and corrections applied before reply",
        "Full conversation history for support and tuning",
        "Scalable React client with real-time delivery"
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-[2px] bg-light opacity-50 mb-4"></div>
          <p className="text-muted text-sm">FairPAY Tech Works · AI & AWS Engineer · December 2024 – Present</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div 
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">{activeProject + 1}/{projects.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20" 
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}>
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div 
            className="hidden md:block md:col-span-4" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index ? "border-opacity-100" : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${
                  activeProject === index ? "text-light" : "text-muted"
                }`}>
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div 
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">{projects[activeProject].title}</h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1 shrink-0">→</span>
                      <span className="text-xs md:text-sm mt-1.5">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[activeProject].liveLink && (
                <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
                  <a 
                    href={projects[activeProject].liveLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    VIEW PROJECT
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;