// Getter function to fetch the facilities from the database.json file
export const getFacilities = async () => {
    const facilitiesFetch = await fetch("http://localhost:8088/facilities")
    const facilitiesArray = await facilitiesFetch.json()

    return facilitiesArray
}