import React from "react";
import github from "../assets/images/github-mark.png"
import linkedin from "../assets/images/linkedin.png"
import "../styles/footer.css"
export default function Footer() {
    return(
       <div className="footer">
    
       <a href="https://github.com/"><img src= {github} alt="Link to Github account"></img></a>
       <a href="https://www.linkedin.com/feed/"><img src= {linkedin} alt="Linkedin Account"></img></a>
       </div>
    )
    }