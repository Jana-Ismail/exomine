// Getter function to fetch facilityMinerals from database.json file
export const getFacilityMineralsFromFacilityId = async (facilityId) => {
    const facilityMineralsFetch = await fetch(`http://localhost:8088/facilityMinerals?facilityId=${facilityId}&_expand=mineral`)
    const facilityMineralsArr = await facilityMineralsFetch.json()

    return facilityMineralsArr
}

export const getFacilityMineralFromFacilityMineralId = async (facilityMineralId) => {
    const facilityMineralFetch = await fetch(`http://localhost:8088/facilityMinerals/${facilityMineralId}?_expand=mineral&_expand=facility`)
    const facilityMineralObj = await facilityMineralFetch.json()

    return facilityMineralObj
}