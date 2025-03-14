// imports
import { getGovernors } from "../managers/governorManager.js";
import { setColony, setGovernor, state } from "./TransientState.js";

// Component function to render the html for a select dropdown with options for the active governors
// inside the #governor-select-container in the main.js render() function
export const Governors = async () => {
    // Fetch the governors
    const governors = await getGovernors()

    let html = `
        <label for="governor-select-dropdown">Choose Governor</label>
        <select id="governor-select-dropdown" name="governor">
            <option value="0"></option>
    `

    html += governors.map(governor => {
        if (governor.isActive) {
            const isSelected = governor.id === state.selectedGovernorId

            return `
                <option value="${governor.id}" data-colony-id="${governor.colonyId}" ${isSelected ? 'selected' : ''}>${governor.name}</option>
            `
        }
    }).join("")

    html += `</select>`

    return html
}

const handleGovernorChange = (event) => {
    if (event.target.name === "governor") {
        const selectedOption = event.target.options[event.target.selectedIndex]
        const selectedGovernorId = parseInt(event.target.value)
        const selectedGovernorColonyId = parseInt(selectedOption.dataset.colonyId)
        // console.log(selectedGovernorId)
        setGovernor(selectedGovernorId)
        setColony(selectedGovernorColonyId)
    }
}

document.addEventListener(
    "change", 
    handleGovernorChange
)