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
import '../styles/portfolio.css'; // Import the CSS file for styling

import portfolio from '../assets/images/Professional-Portfolio_screenshot.png';
import passwordGenerator from '../assets/images/Password Generator.PNG';
import vinylvibes from '../assets/images/homepage.png';
import codeQuiz from '../assets/images/code-quiz.png';
import workdayScheduler from '../assets/images/workday-scheduler.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';

const Portfolio = () => {
  const projects = [
    {
      id: 0,
      title: 'Professional Portfolio',
      images: portfolio,
      githubRepo: 'https://kritishrestha.github.io/Professional-Portfolio',
      Link: 'https://kritishrestha.github.io/Professional-Portfolio',
    },
    {
      id: 1,
      title: 'Password Generator',
      images: passwordGenerator,
      githubRepo: 'https://github.com/KritiShrestha/Password-generator',
      Link: 'https://kritishrestha.github.io/Password-generator/',
    },
    {
      id: 2,
      title: 'vinylvibes',
      images: vinylvibes,
      githubRepo: 'https://github.com/dimartoro/vinyl-vibes',
      Link: 'https://vinyl-vibes-lp-cda464cf0a39.herokuapp.com/',
    },
    {
      id: 3,
      title: 'Code-Quiz',
      images: codeQuiz,
      githubRepo: 'https://github.com/KritiShrestha/Code-quiz',
      Link: 'https://kritishrestha.github.io/Code-quiz',
    },
    {
      id: 4,
      title: 'Work-day Scheduler',
      images: workdayScheduler,
      githubRepo: 'https://kritishrestha.github.io/workday-scheduler',
      Link: 'https://kritishrestha.github.io/workday-scheduler',
    },
    {
      id: 5,
      title: 'Weather dashboard',
      images: weatherDashboard,
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
            <div className="project-image-container">
              {/* Wrap the image with an anchor tag to link to the Live Demo */}
              {project.images && (
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  <img src={project.images} alt={project.title} />
                </a>
              )}
              <div className="project-link-tab">
                {/* Render the "GitHub Repo" link tab */}
                {project.githubRepo && (
                  <a href={project.githubRepo} className= "git" target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

