import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Programming & Web",
      skills: ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Vite", "Vercel", "Tailwind CSS", "FastAPI", "Flask", "HTML5"]
    },
    {
      name: "AWS Cloud",
      skills: ["AWS IAM", "Lambda", "S3", "CloudFront", "DynamoDB", "EC2", "CloudWatch", "Elastic Beanstalk", "ALB", "Auto Scaling", "CloudFormation", "Config", "Secrets Manager", "Step Functions", "EventBridge", "SQS", "VPC Endpoints"]
    },
    {
      name: "AI/ML",
      skills: ["OpenAI GPT", "Embeddings", "Amazon Titan Embeddings", "AWS Bedrock", "Claude", "LangChain", "RAG", "Pinecone", "Scikit-learn", "Gemini AI", "LlamaParse", "Strands SDK"]
    },
    {
      name: "Database & Data",
      skills: ["PostgreSQL", "SQLAlchemy", "RDS", "MySQL", "DynamoDB Streams", "DynamoDB vector index", "Redis Cloud", "RediSearch", "Pandas", "Data Pipelines", "ETL"]
    },
    {
      name: "API & Integration",
      skills: ["RESTful APIs", "OpenAPI 3.0", "API Gateway", "WebSocket", "WebRTC", "LAML/cXML", "Gmail API", "Slack API", "SignalWire", "Twilio", "SMTP"]
    },
    {
      name: "DevOps & Security",
      skills: ["Git", "GitHub", "GitHub Actions", "Docker", "ECS Fargate", "Playwright", "Jenkins", "Cognito", "GuardDuty", "OAuth 2.0", "JWT", "OTP", "bcrypt", "SSL/TLS"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted max-w-2xl mb-4">Tools and technologies for designing, building, and shipping production systems.</p>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div 
              key={i} 
              className="border border-muted border-opacity-20 bg-primary bg-opacity-40 p-6"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted border-opacity-20">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span 
                    key={j} 
                    className="text-sm bg-secondary px-3 py-1 rounded-sm"
                    whileHover={{ 
                      y: -2, 
                      backgroundColor: "rgba(245, 245, 245, 0.05)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;