import React from "react";
import MainPageHeader from "../components/MainPageHeader";
import {Button, TextField} from "@mui/material";
import ItemElementAPI from "../functions/ItemElementAPI";

function AddItemPage() {

   /* state = {
        frameworkName: null,
        leadBy: null,
        docs: null,
    };*/
    function addToLocalStorage(name,leadBy,docs) {
        let framework = {frameworkName: name, leadBy: leadBy, docs: docs}
        ItemElementAPI.addItemElementToLocalStorage(framework);
    }
    function getFrameworkName(event) {
        this.setState({frameworkName: event.target.value})
    }
    function getLeadBy(event) {
        this.setState({leadBy: event.target.value})
    }
    function getDocs(event) {
        this.setState({docs: event.target.value})
    }
    function handleSubmit() {
        const frameworkName = this.state.frameworkName
        const leadBy = this.state.leadBy
        const docs = this.state.docs

        addToLocalStorage(frameworkName,leadBy,docs)
    }

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
                        handleSubmit()
                    }}>Save</Button>
                    <Button variant="outlined" color="error">Cancel</Button>
                </div>
            </div>
            
        )
} 
export default AddItemPage;