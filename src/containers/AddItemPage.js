import React, {Component} from "react";
import MainPageHeader from "../components/MainPageHeader";
import {Button, TextField} from "@mui/material";
import ItemElementAPI from "../functions/ItemElementAPI";

class AddItemPage extends Component {

    addToLocalStorage() {
        let framework = {frameworkName:'Angular', leadBy: 'Google', docs: 'https://angular.io'}
        ItemElementAPI.addItemElementToLocalStorage(framework);
        console.log(framework)
    }
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
                    <Button variant="outlined" color="success" onClick={() => { this.addToLocalStorage()}}>Save</Button>
                    <Button variant="outlined" color="error">Cancel</Button>
                </div>
            </div>
            
        )
    }
} 
export default AddItemPage;