// imports
import { getFacilities } from "../managers/facilityManager.js";
import { state } from "./TransientState.js";

// Component function to render html for a select dropdown displaying options for active facilities
// inside the #facility-select-container in the main.js render() function
export const Facilities = async () => {
    const facilities = await getFacilities()

    let html = `
        <label for="facility-select-dropdown"> Choose Facility
    `
    if (state.selectedGovernorId) {
        html += `
            <select id="facility-select-dropdown" name="facility-select-dropdown">
                <option value="0">
        `
    } else {
        html += `
            <select id="facility-select-dropdown" name="facility-select-dropdown" disabled>
                <option value="0">
        `
    }

    html += facilities.map(facility => {

        if (facility.isActive) {
            return `
                <option value=${facility.id}>${facility.name}</option>
            `
        }
    }).join("")

    html += "</select>"

    return html
}