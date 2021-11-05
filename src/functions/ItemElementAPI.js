const ItemElementAPI = {

    addItemElementToLocalStorage: (framework) => {
        let frameworks
        if(localStorage.getItem("frameworks") === null) {
            frameworks = []
        } else {
            frameworks = JSON.parse(localStorage.getItem("frameworks"))
        }
        frameworks.push(framework)
        localStorage.setItem("frameworks", JSON.stringify(frameworks))
    },

    getAllItemElementsFromLocalStorage: () => {
        return JSON.parse(localStorage.getItem("frameworks"))
    }
    /*removeItemElementFromLocalStorage:  (framework) => {
        let frameworks
        if(localStorage.getItem("frameworks") === null) {
            frameworks = []
        } else {
            //frameworks = JSON.parse(localStorage.getItem("frameworks"))
        }
        //let frameworkIndex = frameworks
    }*/
}
export default ItemElementAPI;