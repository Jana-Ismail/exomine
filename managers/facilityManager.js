// Getter function to fetch the facilities from the database.json file
export const getFacilities = async () => {
    const facilitiesFetch = await fetch("http://localhost:8088/facilities")
    const facilitiesArray = await facilitiesFetch.json()

    return facilitiesArray
}

export const getFacility = async (facilityId) => {
    const facilityFetch = await fetch(`http://localhost:8088/facilities/${facilityId}`)
    const facilityObj = await facilityFetch.json()

    return facilityObj
}