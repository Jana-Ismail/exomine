// imports
import { purchaseMineral } from "./TransientState.js"

// Component function to render html for a "Purchase Mineral" button
export const Cart = async () => {
    return `
        <h2 class="cart-header">Space Cart</h2>
        <div class="selected-facility-mineral-container>

        </div>
        <button type="submit" class="purchase-mineral-btn">Purchase Mineral</button>
    `
}