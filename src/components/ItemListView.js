import React, {Component} from "react";
import ItemElement from "./ItemElement";
import {Grid} from "@mui/material";

class ItemListView extends Component {
    render() {
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
} 
export default ItemListView;