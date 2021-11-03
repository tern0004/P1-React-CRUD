import React, {Component} from "react";
import {Link} from "react-router-dom";
import MainPageHeader from "./MainPageHeader";

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
                    <div>
                        <p>Edit</p>
                    </div>
                    <div>
                        <p>Delete</p>
                    </div>
                </div>
            </div>
            
        )
    }
} 
export default ItemElement;