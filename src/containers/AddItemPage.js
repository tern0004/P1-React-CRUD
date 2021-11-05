import React, {Component} from "react";
import MainPageHeader from "../components/MainPageHeader";
import {Button, TextField} from "@mui/material";
import ItemElementAPI from "../functions/ItemElementAPI";

class AddItemPage extends Component {

    state = {
        frameworkName: null,
        leadBy: null,
        docs: null,
    };
    addToLocalStorage(name,leadBy,docs) {
        let framework = {frameworkName: name, leadBy: leadBy, docs: docs}
        ItemElementAPI.addItemElementToLocalStorage(framework);
    }
    getFrameworkName(event) {
        this.setState({frameworkName: event.target.value})
    }
    getLeadBy(event) {
        this.setState({leadBy: event.target.value})
    }
    getDocs(event) {
        this.setState({docs: event.target.value})
    }
    handleSubmit() {
        const frameworkName = this.state.frameworkName
        const leadBy = this.state.leadBy
        const docs = this.state.docs

        this.addToLocalStorage(frameworkName,leadBy,docs)
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
                        <TextField id="outlined-basic" label="Framework Name" variant="outlined" onChange={(event) => {this.getFrameworkName(event)}}/>
                        <TextField id="outlined-basic" label="Lead by" variant="outlined" onChange={(event) => {this.getLeadBy(event)}}/>
                        <TextField id="outlined-basic" label="Docs URL" variant="outlined" onChange={(event) => {this.getDocs(event)}}/>
                    </form>
                </div>
                <div>
                    <Button variant="outlined" color="success" onClick={() => {
                        this.handleSubmit()
                    }}>Save</Button>
                    <Button variant="outlined" color="error">Cancel</Button>
                </div>
            </div>
            
        )
    }
} 
export default AddItemPage;