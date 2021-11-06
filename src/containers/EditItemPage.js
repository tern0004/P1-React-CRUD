import MainPageHeader from "../components/MainPageHeader";
import {Button, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";

function EditItemPage() {
    let frameworks, index
    let [frameworkName,SetName]= useState(null)
    let [leadBy, SetLeadBy] = useState(null)
    let [docs,SetDocs] = useState(null)

    function addToLocalStorage(name, LeadBy, Docs) {
        let framework = {frameworkName: name, leadBy: LeadBy, docs: Docs}
        frameworks[index] = framework
        console.log(frameworks)
        localStorage.setItem('frameworks', JSON.stringify(frameworks))
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
        addToLocalStorage(frameworkName,leadBy,docs)
    }
    useEffect(() => {
        frameworks = JSON.parse(localStorage.getItem('frameworks'))
        index = window.location.pathname.split('/')[2]

    })

    return(
        <div>
            <MainPageHeader/>
            <div>
                <h3>Edit framework</h3>
            </div>
            <div>
                <form>
                    <TextField id="outlined-basic" label="Framework Name" variant="outlined" onChange={event => getFrameworkName(event)}/>
                    <TextField id="outlined-basic" label="Lead by" variant="outlined" onChange={event => getLeadBy(event)}/>
                    <TextField id="outlined-basic" label="Docs URL" variant="outlined" onChange={event => getDocs(event)}/>
                </form>
            </div>
            <div>
                <Button variant="outlined" color="success" href='/' onClick={() => {handleSubmit()}}>Save</Button>
                <Button variant="outlined" color="error" href='/'>Cancel</Button>
            </div>
        </div>

    )
}
export default EditItemPage