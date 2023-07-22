// import React from 'react';
// import image from "../assets/images/image.png";
// import "../styles/about.css"; // Import the custom CSS file
// import "../styles/main.css"; // Import the main CSS file

// export default function About() {
//   return (
//     <div>
// <div className="image-container">
//         <div className='aboutme'>
//         <h2>About Me</h2>
//         <img className="profile-image" src={image} alt="Profile" />
//         </div>
//       </div>
//       <div><p className='aboutme-paragraph'>
//       Hi, I am Kriti Shrestha, a student at UNC Chapel Hill, studying full-stack coding.
//       I have learned HTML, CSS, JavaScript, Express, SQL in these past few months. Currently, I am learning React.
//       I am passionate about web development and enjoy building user-friendly and interactive web applications.
//       I love learning new technologies and exploring creative ways to solve problems.
//         Outside of coding, I enjoy spending time in nature, reading books, and playing musical instruments.
//         Feel free to reach out to me if you have any questions or would like to collaborate on a project!
    
//     </p>
//     </div>
      
//     </div>
      
//   );
// }

import React from 'react';
import image from "../assets/images/image.png";
import "../styles/about.css"; // Import the custom CSS file

export default function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="image-container">
        <img className="profile-image" src={image} alt="Profile" />
      </div>
      <div>
        <p className='aboutme-paragraph'>
          Hi, I am Kriti Shrestha, a student at UNC Chapel Hill, studying full-stack coding.
          I have learned HTML, CSS, JavaScript, Express, SQL in these past few months. Currently, I am learning React.
          I am passionate about web development and enjoy building user-friendly and interactive web applications.
          I love learning new technologies and exploring creative ways to solve problems.
          Outside of coding, I enjoy spending time in nature, reading books, and playing musical instruments.
          Feel free to reach out to me if you have any questions or would like to collaborate on a project!

        </p>
      </div>
    </div>
  );
}


