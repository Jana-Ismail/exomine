// imports

import { getColony } from "../managers/colonyManager.js"
import { getColonyMineralsFromColonyId } from "../managers/colonyMineralManager.js"
import { state } from "./TransientState.js"

// Component function to render html for the colony minerals for the colony of the selected governor
// Will be rendered in the #chosen-governor-colony-minerals container in the mainContainer html
export const ColonyMinerals = async () => {
    let html = "<h2>Colony Minerals</h2>"

    if (state.selectedGovernorColonyId) {
        const colonyObj = await getColony(state.selectedGovernorColonyId)
        const colonyMineralsArr = await getColonyMineralsFromColonyId(state.selectedGovernorColonyId)

        html = `
            <h2>${colonyObj.name} Minerals</h2>
            <ul class="colony-minerals-list">
        `

        html += colonyMineralsArr.map(colonyMineral => {
            return `
                    <li class="colony-minerals-list-item">${colonyMineral.quantity} tons of ${colonyMineral.mineral.name}</li>
            `
        }).join("")

        html += `</ul>`
    }

    return html
}