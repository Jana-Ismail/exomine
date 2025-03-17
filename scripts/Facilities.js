// imports
import { getFacilities } from "../managers/facilityManager.js";
import { setFacility, state } from "./TransientState.js";

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
            const isSelected = state.selectedFacilityId === facility.id

            return `
                <option value=${facility.id} ${isSelected ? "selected" : ""}>${facility.name}</option>
            `
        }
    }).join("")

    html += "</select>"

    return html
}

const handleFacilityChange = (event) => {
    if (event.target.name === "facility-select-dropdown") {
        const selectedFacilityId = parseInt(event.target.value)

        setFacility(selectedFacilityId)
    }
}

document.addEventListener(
    "change",
    handleFacilityChange
)