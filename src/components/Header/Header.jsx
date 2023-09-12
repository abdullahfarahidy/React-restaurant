import React from "react";
import images from  '../../constants/images';
import "./header.css";

const Header = () => (
  <div className="app__header" id="home">
    <div className="headerst">
      <div><img src={images.spoon} alt="spoon" width={40} height={120} /></div>
      <div ><h2><em className="headingfont"> Discover the Flavors of Algeria A Culinary Journey of Delicious Algerian Dishes at taste algeria <br/> Bon appétit!</em></h2></div>
      <div><img src={images.fork} alt="fork" width={40} height={120}/></div>
    </div>
  </div>
);

export default Header




