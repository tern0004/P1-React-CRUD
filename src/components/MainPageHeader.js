import React, {Component} from "react";
import {Link} from "react-router-dom";

class MainPageHeader extends Component {
    render() {
        return(
            <div>
                <div>
                    <Link to="/"><img src="../../public/logo192.png" alt="logo"/></Link>
                </div>
                <div>
                    <h3>Javascript Frameworks</h3>
                </div>
                <div>
                    <Link to="/add">Add New Item</Link>
                </div>
            </div>
            
        )
    }
} 
export default MainPageHeader;