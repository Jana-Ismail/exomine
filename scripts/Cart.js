// imports
import { getFacilityMineralFromFacilityMineralId } from "../managers/facilityMineralManager.js"
import { purchaseMineral, state } from "./TransientState.js"

// Component function to render html for a "Purchase Mineral" button
export const Cart = async () => {
    let facilityMineralName = null
    let facilityName = null

    if (state.selectedFacilityMineralId) {
        const facilityMineral = await getFacilityMineralFromFacilityMineralId(state.selectedFacilityMineralId)
        facilityMineralName = facilityMineral.mineral.name
        facilityName = facilityMineral.facility.name
    }

        
    return `
        <h2 class="cart-header">Space Cart</h2>
        <div class="selected-facility-mineral-container">
            ${facilityMineralName ? `1 ton of ${facilityMineralName} from ${facilityName}` : ""}
        </div>
        <button type="submit" class="purchase-mineral-btn">Purchase Mineral</button>
    `
}