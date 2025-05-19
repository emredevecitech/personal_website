import React from 'react';

const Portfolio = () => {
  // Sample fintech-related portfolio projects
  const projects = [
    {
      title: "Financial Risk Assessment Model",
      description: "Developed a machine learning model to predict financial risk for loan applications, improving accuracy by 30% over traditional models.",
      technologies: ["Python", "TensorFlow", "AWS", "Scikit-learn"],
      image: "portfolio-1.jpg",
      category: "Machine Learning"
    },
    {
      title: "Investment Portfolio Optimizer",
      description: "Created a portfolio optimization tool using advanced algorithms to balance risk and return, leveraging historical market data.",
      technologies: ["Python", "Pandas", "NumPy", "MATLAB", "Power BI"],
      image: "portfolio-2.jpg",
      category: "Data Science"
    },
    {
      title: "Real-Time Market Analysis Dashboard",
      description: "Built an interactive dashboard for real-time market analysis with predictive insights and anomaly detection.",
      technologies: ["Power BI", "Azure", "Python", "SQL"],
      image: "portfolio-3.jpg",
      category: "Data Visualization"
    },
    {
      title: "Automated ETL Pipeline for Financial Data",
      description: "Designed and implemented an end-to-end ETL pipeline for processing financial data from multiple sources with real-time processing capabilities.",
      technologies: ["Kubernetes", "Docker", "AWS Lambda", "Python"],
      image: "portfolio-4.jpg",
      category: "Data Engineering"
    },
    {
      title: "Customer Segmentation for Targeted Financial Products",
      description: "Applied clustering algorithms to segment customers and identify opportunities for targeted financial product offerings.",
      technologies: ["Python", "scikit-learn", "Tableau", "SQL"],
      image: "portfolio-5.jpg",
      category: "Machine Learning"
    },
    {
      title: "Fraud Detection System",
      description: "Developed an advanced fraud detection system using anomaly detection and pattern recognition algorithms.",
      technologies: ["Python", "TensorFlow", "PostgreSQL", "AWS"],
      image: "portfolio-6.jpg",
      category: "Machine Learning"
    }
  ];

  const categories = ["All", "Machine Learning", "Data Science", "Data Visualization", "Data Engineering"];
  const [filter, setFilter] = React.useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Portfolio</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my fintech and data science projects, highlighting expertise in machine learning, 
            data engineering, and financial analytics.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                {/* Placeholder for project image */}
                <div className="text-5xl text-blue-400">
                  {project.category === "Machine Learning" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )}
                  {project.category === "Data Science" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {project.category === "Data Visualization" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  )}
                  {project.category === "Data Engineering" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 h-24 overflow-hidden">
                  {project.description}
                </p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-xs font-medium text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center transition-all duration-300">
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;