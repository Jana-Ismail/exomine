// Getter function to fetch facilityMinerals from database.json file
export const getFacilityMineralsFromFacilityId = async (facilityId) => {
    const facilityMineralsFetch = await fetch(`http://localhost:8088/facilityMinerals?facilityId=${facilityId}&_expand=mineral`)
    const facilityMineralsArr = await facilityMineralsFetch.json()

    return facilityMineralsArr
}