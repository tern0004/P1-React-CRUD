import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

class ItemElement extends Component {
    render() {
        return(
            <div>

                <div>
                    <p>Framework Name</p>
                </div>
                <div>
                    <p>Lead by Name</p>
                    <Link>Official docs</Link>
                </div>
                <div>
                        <Button onClick="">Edit</Button>
                        <Button onClick="">Delete</Button>
                </div>
            </div>
            
        )
    }
} 
export default ItemElement;