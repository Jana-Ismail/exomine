// Getter function to fetch governors from database.json file
export const getGovernors = async () => {
    const governorsFetch = await fetch("http://localhost:8088/governors")
    const governorsArray = await governorsFetch.json()

    return governorsArray
}