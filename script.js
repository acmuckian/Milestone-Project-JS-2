async function searchVillagers() {

}
var globalVillagerArray = []


// to get the entire dataset 
async function getVillagers() {
    if (globalVillagerArray.length > 0) {
        return globalVillagerArray
    }
    const response = await fetch("https://raw.githubusercontent.com/Norviah/animal-crossing/refs/heads/master/json/combined/Villagers.min.json")
    globalVillagerArray = await response.json()

    return globalVillagerArray
}
getVillagers()
// for retrieving individual villagers and searching them by name 
function getVillager() {

}
async function getVillagerByName(villagerName) {
    const villagers = await getVillagers()
    for (let i = 0; i < villagers.length; i++) {
        const currentVillager = villagers[i];
        const currentVillagerNameMatch = currentVillager.name.toUpperCase() === villagerName.toUpperCase() //ensuring match is not case sensitive 
        if (currentVillagerNameMatch) {
            return currentVillager
        }
    }
    console.warn(`No match found for ${villagerName}`)
}
function villagerBrief(villager) {
    return {
        photoImage: villager.photoImage,
        name: villager.name,
        species: villager.species,
        gender: villager.gender,
        personality: villager.personality,
        birthday: villager.birthday,
    }
}

function showVillagers() {

}
function displayErrors() {

}


// (i) look through the documents
// (ii) get the name value from the current villager
// (iii) see if villager's name equals the name that was searched for (consider fuzzy and partial matching later)
// (iv) return the data if villager's name equals name searched for 