import React from "react";
import GitHubIcon from './gt.png';
import LinkedInIcon from './in.png';
import Cficon from './cf.jpg';
import Leetcode from './lc.png';
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <tr>
          <td>
          <a href="https://github.com/ashwanijha8068">
          <img className="lin" src={GitHubIcon} alt="om" />
          </a>
          </td>
          <td>
            <a href="https://www.linkedin.com/in/ashwani-kumar-jha-a15970213/">   
            <img className="lin" src={LinkedInIcon} alt="om"  />
            </a>
       
          </td>
          <td>
           <a href="https://leetcode.com/Shreepatiha/">
           <img className="lc" src={Leetcode}  alt="om"/>
            </a> 
          </td>
          <td>
            <a href="https://codeforces.com/profile/shreepatiha">
            <img className="lc" src={Cficon} alt="om"/>
            </a>
           
          </td>
        </tr>
         
       
     </div>
     
      <p> &copy; Ashwani Kumar Jha</p>
    </div>
  );
}

export default Footer;
