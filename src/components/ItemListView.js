import React, {Component} from "react";
import ItemElement from "./ItemElement";

class ItemListView extends Component {
    render() {
        return(
            <div>
                <div>
                    <ItemElement/>
                    <ItemElement/>
                    <ItemElement/>
                    <ItemElement/>
                </div>
            </div>
            
        )
    }
} 
export default ItemListView;