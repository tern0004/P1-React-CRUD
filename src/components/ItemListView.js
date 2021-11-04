import React, {Component} from "react";
import ItemElement from "./ItemElement";
import {Grid} from "@mui/material";

class ItemListView extends Component {
    render() {
        return(
                <Grid  container  justifyContent="center"  spacing={3}>
                    <Grid  item xs={8} >
                        <ItemElement/>
                    </Grid>
                    <Grid item xs={8} >
                        <ItemElement/>
                    </Grid>

                </Grid>
            
        )
    }
} 
export default ItemListView;