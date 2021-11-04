import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

class MainPageHeader extends Component {
    render() {
        return(
            <div>
                <div>
                    <Link to="/"><img src="../logo.svg" alt="logo"/></Link>
                </div>
                <div>
                    <h3>Javascript Frameworks</h3>
                </div>
                <div>
                    <Button href="/add">Add New Item</Button>
                </div>
            </div>
            
        )
    }
} 
export default MainPageHeader;