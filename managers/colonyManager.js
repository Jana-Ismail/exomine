// Colony getter function to fetch colonies from database.json file
export const getColonyFromGovernorId = async (governorId) => {
    const colonyFetch = await fetch(`http://localhost:8088/governors/${governorId}?_expand=colony`)
    const colonyObj = await colonyFetch.json()

    return colonyObj
}

// export const getColony = async (colonyId) => {
//     const colonyFetch = await fetch(`http://localhost:8088/colonies/${colonyId}`)
//     const colonyObj = await colonyFetch.json()

//     return colonyObj
// }