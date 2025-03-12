// Getter function to fetch colonyMinerals from database.json file
export const getColonyMineralsFromColonyId = async (colonyId) => {
    const colonyMineralsFetch = await fetch(`http://localhost:8088/colonyMinerals?colonyId=${colonyId}&_expand=mineral`)
    const colonyMineralsArr = await colonyMineralsFetch.json()

    return colonyMineralsArr
}