import React, {Component} from "react";
import MainPageHeader from "../components/MainPageHeader";
import {Button, TextField} from "@mui/material";

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
                        <TextField id="outlined-basic" label="Framework Name" variant="outlined"/>
                        <TextField id="outlined-basic" label="Docs URL" variant="outlined"/>
                        <TextField id="outlined-basic" label="Lead by" variant="outlined"/>
                    </form>
                </div>
                <div>
                    <Button variant="outlined" color="success">Save</Button>
                    <Button variant="outlined" color="error">Cancel</Button>
                </div>
            </div>
            
        )
    }
} 
export default AddItemPage;