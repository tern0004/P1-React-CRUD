import React, {useEffect, useState} from "react";
import ItemElement from "./ItemElement";
import {Grid} from "@mui/material";


function ItemListView() {
    let frameworks = JSON.parse(localStorage.getItem('frameworks'))
    let [frameworkName,setFrameworkName]= useState(null)
    let [leadBy, setLeadBy] = useState(null)
    let [docs,setDocs] = useState(null)

    useEffect( () => {
        frameworks = JSON.parse(localStorage.getItem('frameworks'))
        if(frameworks != null) {
        frameworks.forEach(framework => {
            setFrameworkName(framework.frameworkName)
            setLeadBy(framework.leadBy)
            setDocs(framework.docs)
            //console.log(frameworkName, leadBy, docs)
        })
        }
        //console.log()
    })

        return(
                <Grid  container  justifyContent="center"  spacing={3}>
                    {

                            frameworks.map((framework, key) => {
                               return(
                                   <Grid key={key} item xs={8} >
                                    <ItemElement id={key} frameworkName={framework.frameworkName} leadBy={framework.leadBy} docs={framework.docs}/>
                                </Grid>

                               )
                            })
                    }

                </Grid>
            
        )
} 
export default ItemListView;