import React from 'react';
import pic1 from "../images/Rajasthan IT Day_page-0004.jpg"
import pic2 from "../images/Rajasthan IT Day_page-0005.jpg"
import pic3 from "../images/Rajasthan IT Day_page-0006.jpg"
import pic4 from "../images/Rajasthan IT Day_page-0007.jpg"
import pic5 from "../images/Rajasthan IT Day_page-0008.jpg"
function About(props) {
    return (
        <div>
           <img src={pic1} alt="4" width="100%" />
           <img src={pic2} alt="5" width="100%" />
           <img src={pic3} alt="6" width="100%" />
           <img src={pic4} alt="7" width="100%" />
           <img src={pic5} alt="8" width="100%" />
        </div>
    );
}

export default About;