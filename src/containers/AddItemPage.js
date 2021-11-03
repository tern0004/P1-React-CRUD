import React, {Component} from "react";
import {Link} from "react-router-dom";
import MainPageHeader from "../components/MainPageHeader";

class AddItemPage extends Component {
    render() {
        return(
            <div>
                <MainPageHeader/>
                <div>
                    <h3>Add a new framework</h3>
                </div>
                <div>
                    <form>
                        <p>Framework Name:</p>
                        <input type="field"/>
                        <p>Docs URL:</p>
                        <input type="field"/>
                        <p>Lead By:</p>
                        <input type="field"/>
                    </form>
                </div>
                <div>
                    <Link>Save</Link>
                    <Link>Cancel</Link>
                </div>
            </div>
            
        )
    }
} 
export default AddItemPage;