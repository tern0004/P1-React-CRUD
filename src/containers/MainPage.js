import React from "react";
import ItemListView from "../components/ItemListView";
import MainPageHeader from "../components/MainPageHeader";

function MainPage() {
        return(
            <div>
                <div>
                    <MainPageHeader/>
                </div>
                <div>
                    <ItemListView/>
                </div>
            </div>
        )
} 
export default MainPage;