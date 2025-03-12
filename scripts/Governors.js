// imports
import { getGovernors } from "../managers/governorManager.js";

// Component function to render the html for a select dropdown with options for the active governors
// inside the #governor-select-container in the main.js render() function
export const Governors = async () => {
    // Fetch the governors
    const governors = await getGovernors()

    let html = `
        <label for="governor-select-dropdown">Choose Governor</label>
        <select id="governor-select-dropdown">
            <option value="0"></option>
    `

    html += governors.map(governor => {
        if (governor.isActive) {
            return `
                <option value="${governor.id}">${governor.name}</option>
            `
        }
    })

    html += `</select>`

    return html
}