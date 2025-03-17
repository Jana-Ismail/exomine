// Main module to grab the #main-container from the Dom and store it in a variable,
// set up a render() function to set up the html structure of the main container
// and call the component functions in the proper place in that html structure,
// call the render() function,
// and set up click event to call a custom click event that calls the render() function
// and re-renders the html of the main container when state changes

import { ColonyMinerals } from "./ColonyMinerals.js"
import { Facilities } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"
import { Governors } from "./Governors.js"

// imports here
// import { getGovernors } from "../managers/governorManager.js"


// grab the #main-container element and store in variable
const mainContainer = document.querySelector("#main-container")

// function to render main html content of page
const render = async () => {

    mainContainer.innerHTML = `
        <header>
            <h1>Exomine</h1>
        </header>
        <main>
            <section id="governor-select-container">
                ${await Governors()}
            </section>
            <section id="selected-governor-colony-minerals-container">
                ${await ColonyMinerals()}
            </section>
            <section id="facility-select-container">
                ${await Facilities()}
            </section>
            <section id="selected-facility-minerals-container">
                ${await FacilityMinerals()}
            </section>
            <section id="cart-container">

            </section>
        </main>

    `
}

// call render() function
render()

// click event to listen for custom "stateChanged" event and re-render main html when state changes
document.addEventListener("stateChanged", () => {
    render()
})

// console.log(await getGovernors())
