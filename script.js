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

function showRandomVillager() {
    const randVillager = getRandomVillager() // gets a villager randomly from the array 
    const output = document.getElementById("demo"); // getting the demo element by id and assigning it to the output const 
    output.innerHTML = createVillagerComponent(randVillager) // 
}


function createVillagerComponent(villager) {
    return `<ul>
    <li>${villager.name}</li> 
    <img src="${villager.photoImage}" alt="A picture of ${villager.photoImage}">
    <li>${villager.species}</li>
    <li>${villager.gender}</li>
    <li>${villager.personality}</li></ul>`
}

function getRandomVillager() {
    const random = Math.floor(Math.random() * globalVillagerArray.length)
    const randVillager = globalVillagerArray[random]
    console.log(random, randVillager)
    return randVillager
}
function getVillagersSlice(start, end) {
    return globalVillagerArray.slice(start, end)
}

function displayAllVillagers() {
    // getting a subset of the villagers only from the whole array 
    const villagerSubset = getVillagersSlice(0, 50);
    // (i) create divs of the villagers 
    //   const villagerElements = villagerSubset.map(createVillagerComponent)
    const villagerElements = villagerSubset.map((villager) => {
        const villagerEl = createVillagerComponent(villager)
        return `<div>${villagerEl}</div>`
    })
    const villagerListComponent = villagerElements.join('');
    const elementId = "villagersList"
    renderElement(elementId, villagerListComponent)
    // (ii) include their name, image, species, gender and personality in the div
}
// this is a function to return a page of villagers
function getVillagerPage(page, pageSize) {
    const sliceStart = (page - 1) * pageSize
    const sliceEnd = sliceStart + pageSize
    console.log(sliceStart, sliceEnd)
    const result = globalVillagerArray.slice(sliceStart, sliceEnd);
    return result
}
console.log(getVillagerPage(1, 5))
function getVillagersOffset(offset, limit) {

}

function renderElement(elementId, villagerListComponent) {
    const output = document.getElementById(elementId)
    output.innerHTML = villagerListComponent
}
function runExperiment() {

    const totalPages = 5
    const firstPage = 1
    const pageSize = 50
    //   console.log(getVillagerPage(1, 5))
    // console.log(getVillagerPage(2, 5))
    // console.log(getVillagerPage(3, 5))
    // console.log(getVillagerPage(4, 5))
    printVillagerPages(firstPage, totalPages, pageSize)
}

function printVillagerPages(firstPage, totalPages, pageSize) {
    for (let i = firstPage; i <= totalPages; i++) {

        console.log(getVillagerPage(i, pageSize))
    }
}
// (i) look through the documents
// (ii) get the name value from the current villager
// (iii) see if villager's name equals the name that was searched for (consider fuzzy and partial matching later)
// (iv) return the data if villager's name equals name searched for 