import React from "react";  
import images from "../../constants/images";
import './cheef.css';

const Cheef= ()=>(
    
     <div className="app__chef">
        <div className="space"></div>
        <div className="app__home-chef">
           <div className="chefalign">
            <img src={images.cheef} alt="cheef" width={100} height={100} />
            <h1><em>Our Chef</em></h1>
            </div> 
           
          <div> <h3 className="chefont">
           &quot;  Master Chef: Ahmed, the culinary maestro behind Taste Algeria. With decades of experience and a passion for Algerian cuisine, Chef Ahmed brings authenticity to every dish. Meticulously sourcing local ingredients, he creates a harmonious blend of flavors, textures, and colors. Immerse yourself in his culinary artistry and experience the vibrant taste of Algeria.&quot;
        </h3></div>
        </div>
       
     </div>
   

);
export default Cheef;