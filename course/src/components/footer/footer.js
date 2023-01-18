import React from "react";
import './footer.css';
import WesternLogo from "../../assets/Western_Logo.png";
import EngLogo from "../../assets/Eng_Logo.png";

function Footer(){
    return(
        <div>
            <img className="Western" src={WesternLogo}></img>
            <p class="footer">© 1878 - 2022 Western University
                <br></br>
                Spencer Engineering Building, Western UniversityLondon, Ontario, Canada, N6A 5B9
                <br></br>
                Tel: 519-661-2111
                <br></br>
                contactWE@eng.uwo.ca
            </p>
            <img className="Eng" src={EngLogo}></img>
        </div>
    )
};

export default Footer;