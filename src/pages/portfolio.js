// import React from 'react';

// import "../styles/portfolio.css"; // Import the custom CSS file
// import "../styles/main.css"; // Import the main CSS file

// export default function Portfolio() {
//   return (
//     <div className="portfolio-container">
//       <h2 className="portfolio-header">Portfolio</h2>
//       <div className="portfolios">
//         {projects.map((project) => (
//           <div className="portfolio-item" key={project.id}>
//             <h3>{project.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react'
// import projects from '../project';
// import "../styles/portfolio.css"; // Import the custom CSS file
// import "../styles/main.css"; // Import the main CSS file

// export default function Portfolio() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleProjectClick = (projectId) => {
//     setSelectedProject(projectId);
//   };

//   return (
//     <div className="portfolio-container">
//       <h2 className="portfolio-header">Portfolio</h2>
//       <div className="portfolios">
//         {projects.map((project) => (
//           <div
//             className="portfolio-item"
//             key={project.id}
//             onClick={() => handleProjectClick(project.id)}
//           >
//             <h3>{project.title}</h3>
//             {selectedProject === project.id && (
//               <>
//                 {project.images && <img src={project.images} alt={project.title} />}
//                 <p>
//                   <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
//                     GitHub Repo
//                   </a>
//                 </p>
//                 <p>
//                   <a href={project.Link} target="_blank" rel="noopener noreferrer">
//                     Live Demo
//                   </a>
//                 </p>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react';
import '../styles/portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 0,
      title: 'Professional Portfolio',
      images: './assets/images/Professional-Portfolio_screenshot.png',
      githubRepo: 'https://kritishrestha.github.io/Professional-Portfolio',
      Link: 'https://kritishrestha.github.io/Professional-Portfolio',
    },
    {
      id: 1,
      title: 'Password Generator',
      images: '../assets/images/Password Generator.PNG',
      githubRepo: 'https://github.com/KritiShrestha/Password-generator',
      Link: 'https://kritishrestha.github.io/Password-generator/',
    },
    {
      id: 2,
      title: 'vinylvibes',
      images: '../assets/images/homepage.png',
      githubRepo: 'https://github.com/dimartoro/vinyl-vibes',
      Link: 'https://vinyl-vibes-lp-cda464cf0a39.herokuapp.com/',
    },
    {
      id: 3,
      title: 'Code-Quiz',
      images: '../assets/images/code-quiz.png',
      githubRepo: 'https://github.com/KritiShrestha/Code-quiz',
      Link: 'https://kritishrestha.github.io/Code-quiz',
    },
    {
      id: 4,
      title: 'Work-day Scheduler',
      images: '../assets/images/workday-scheduler.png',
      githubRepo: 'https://kritishrestha.github.io/workday-scheduler',
      Link: 'https://kritishrestha.github.io/workday-scheduler',
    },
    {
      id: 5,
      title: 'Weather dashboard',
      images: '../assets/images/weather-dashboard.png',
      githubRepo: 'https://github.com/KritiShrestha/weather-dashboard',
      Link: 'https://kritishrestha.github.io/weather-dashboard',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <h3>{project.title}</h3>
            {project.images && <img src={project.images} alt={project.title} />}
            <div className="project-links">
              <p>
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </p>
              <p>
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
