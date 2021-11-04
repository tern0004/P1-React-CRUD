import React, {Component} from "react";
import MainPageHeader from "../components/MainPageHeader";
import {Button} from "@mui/material";

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
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </div>
            </div>
            
        )
    }
} 
export default AddItemPage;