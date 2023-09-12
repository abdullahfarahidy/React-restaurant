import React  from "react";
import images from '../../constants/images';
import Navbar from "../navbar/Navbar";
import './menu.css';

const Menu=()=> (
   <div className="menu__page">
    <Navbar/>
    <div className="menu__body">
        <div className="menu__heading">
              <h1>Explore our delicious dishes below</h1> 
        </div>
        <div className="menu__dishes">
            <div className="dish__card">
                <img src={images.dish1} alt="dish1" />
                <h2>Burek</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish2} alt="dish2" />
                <h2>Arias</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish3} alt="dish3" />
                <h2>Couscous</h2> 
            </div>
             <div className="dish__card">
                <img src={images.dish4} alt="dish4" />
                <h2>Cocas</h2>  
            </div>
             <div className="dish__card">
                <img src={images.dish5} alt="dish5" />
                <h2>Dolma</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish6} alt="dish6" />
                <h2>Elloux</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish7} alt="dish7" />
                <h2>Kobeba</h2> 
            </div>
             <div className="dish__card">
                <img src={images.dish8} alt="dish8" />
                <h2>Lobia</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish9} alt="dish9" />
                <h2>Makradoudh</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish10} alt="dish10" />
                <h2>Mhadjeb</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish11} alt="dish11"/>
                <h2>Rechta</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish12} alt="dish12" />
                <h2>Egg Shachoka</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish13} alt="dish13" />
                <h2>Shachoka</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish14} alt="dish14" />
                <h2>Kofta</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish15} alt="dish15" />
                <h2>Tajin Jelbana</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish16} alt="dish16" />
                <h2>Tajin zitoun</h2>
            </div>

             <div className="dish__card">
                <img src={images.dish17} alt="dish17" />
                <h2>Tamina</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish18} alt="dish18" />
                <h2>Tcharek</h2>
            </div>

             <div className="dish__card">
                <img src={images.dish19} alt="dish19" />
                <h2>Tghiana</h2>
            </div>
             <div className="dish__card">
                <img src={images.dish20} alt="dish20"/>
                <h2>Zalabia</h2>   
            </div>
             
        </div>
    </div>
   </div>
);

export default Menu;