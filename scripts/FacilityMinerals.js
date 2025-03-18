// imports
import { getFacility } from "../managers/facilityManager.js";
import { getFacilityMineralsFromFacilityId } from "../managers/facilityMineralManager.js";
import { setFacilityMineral, state } from "./TransientState.js";

// Component function to render the html for the facility minerals of the selected facility
// inside the #selected-facility-minerals-container in the main.js render() function
export const FacilityMinerals = async () => {
    let html = `<h2>Facility Minerals</h2>`

    if (state.selectedFacilityId) {
        const facility = await getFacility(state.selectedFacilityId)
        const facilityMineralsArr = await getFacilityMineralsFromFacilityId(state.selectedFacilityId)

        html = `
            <h2>Minerals for ${facility.name}</h2>
            <div class="radio-options-container">
        `

        html += facilityMineralsArr.map(facilityMineral => {
            const isSelected = facilityMineral.id === state.selectedFacilityMineralId

            return `
                <div>
                    <input type="radio" value="${facilityMineral.id}" data-type="facility-mineral" name="facility-mineral" ${isSelected ? "checked" : ""}> ${facilityMineral.quantity} tons of ${facilityMineral.mineral.name}
                </div>
            `
        }).join("")

        html += `</div>`
    }

    return html
}

const handleFacilityMineralChange = (event) => {
    if (event.target.name === "facility-mineral") {
        const selectedFacilityMineralId = parseInt(event.target.value)
        setFacilityMineral(selectedFacilityMineralId)
    } 
}

document.addEventListener(
    "change",
    handleFacilityMineralChange
)