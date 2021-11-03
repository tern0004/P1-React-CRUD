import React, {Component} from "react";
import ItemListView from "../components/ItemListView";
import MainPageHeader from "../components/MainPageHeader";

class MainPage extends Component {
    render() {
        return(
            <div>
                <div>
                    <MainPageHeader/>
                </div>
                <div>
                    <ItemListView/>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
} 
export default MainPage;