import React, {useState} from "react";
import MainPageHeader from "../components/MainPageHeader";
import {Button, TextField} from "@mui/material";
import ItemElementAPI from "../functions/ItemElementAPI";

function AddItemPage() {

    let [frameworkName,SetName]= useState(null)
    let [leadBy, SetLeadBy] = useState(null)
    let [docs,SetDocs] = useState(null)

    function addToLocalStorage(name, LeadBy, Docs) {
        let framework = {frameworkName: name, leadBy: LeadBy, docs: Docs}
        ItemElementAPI.addItemElementToLocalStorage(framework);
    }

    function getFrameworkName(event) {
        SetName(event.target.value)
    }

    function getLeadBy(event) {
        SetLeadBy(event.target.value)
    }
    function getDocs(event) {
        SetDocs(event.target.value)
    }


    function handleSubmit() {
        console.log(frameworkName)
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
                        <TextField id="outlined-basic" label="Framework Name" variant="outlined" onChange={event => getFrameworkName(event)}/>
                        <TextField id="outlined-basic" label="Lead by" variant="outlined" onChange={event => getLeadBy(event)}/>
                        <TextField id="outlined-basic" label="Docs URL" variant="outlined" onChange={event => getDocs(event)}/>
                    </form>
                </div>
                <div>
                    <Button variant="outlined" color="success" onClick={() => {
                        //console.log(useState)
                        handleSubmit()
                    }}>Save</Button>
                    <Button variant="outlined" color="error">Cancel</Button>
                </div>
            </div>
            
        )
} 
export default AddItemPage;