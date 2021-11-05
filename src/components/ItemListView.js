import React from "react";
import ItemElement from "./ItemElement";
import {Grid} from "@mui/material";
import ItemElementAPI from "../functions/ItemElementAPI";

function ItemListView() {
    /*
    state = {
        framework: null
    };

     componentDidMount() {
       let frameworks =  ItemElementAPI.getAllItemElementsFromLocalStorage()
        if(frameworks != null) {
            frameworks.forEach(framework => {
                this.setState({framework: framework})
            })

            console.log(this.state)
        }


    }
*/
        return(
                <Grid  container  justifyContent="center"  spacing={3}>
                    <Grid  item xs={8} >
                        <ItemElement frameworkName="Angular" leadBy="Google" docs="https://angular.io"/>
                    </Grid>
                    <Grid item xs={8} >
                        <ItemElement frameworkName="React" leadBy="Facebook" docs="https://reactjs.org"/>
                    </Grid>

                </Grid>
            
        )
} 
export default ItemListView;