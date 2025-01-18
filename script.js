
var globalVillagerArray = []
/** @returns {Promise<Villager[]>}  - promise that resolves to an array */

async function loadVillagers() {
    const response = await fetch("https://raw.githubusercontent.com/Norviah/animal-crossing/refs/heads/master/json/combined/Villagers.min.json");
    globalVillagerArray = await response.json();
}
// this is an IIFE (immediately invoked function expression) that will run the function loadVillagers() as soon as the script is loaded and populate the globalVillagerArray with the data
// to get the entire dataset 
(async () => loadVillagers())();
/**
 * @returns {Villager[]} - an array of villagers
 */
function getVillagers() {
    if (!globalVillagerArray.length) {
        loadVillagers();
        while (!globalVillagerArray.length) {
            // wait for the globalVillagerArray to be populated
            // this is a blocking operation to prevent the function from returning an empty array without making the function async
        }
    }
    return globalVillagerArray;
}
/**
 *
 * @param {string} villagerName - the name of the villager to search for
 * @returns {Villager | undefined} - the villager object if found, otherwise undefined
 */
function getVillagerByName(villagerName) {
    const villagers = getVillagers()
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
    const output = document.getElementById("demo"); // getting the demo element by id and ag it to the output const 
    // const intro = document.getElementById("intro")
    // intro.innerHTML = `Look who it is, it's ${villager.name}!`
    output.innerHTML = createVillagerComponent(randVillager)
}

function createVillagerComponent(villager) {
    // return `<ul>
    // <li>${villager.name}</li> 
    // <img src="${villager.photoImage}" alt="A picture of ${villager.photoImage}">
    // <li>${villager.species}</li>
    // <li>${villager.gender}</li>
    // <li>${villager.personality}</li></ul>`
    return `
    <div class="card" style="width: 18rem;"> 
    <img class="card-img-top" src="${villager.photoImage}" alt="A picture of ${villager.photoImage}">
        <div class="card-body">
            <h5 class="card-title">&#10524;${villager.name}&#x291B;</h5>
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Species: ${villager.species}</li>
            <li class="list-group-item">${villager.gender}</li>
            <li class="list-group-item">${villager.personality}</li>
        </ul></div>`
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

    const totalPages = 9
    const firstPage = 1
    const pageSize = 10
    //   console.log(getVillagerPage(1, 5))
    // console.log(getVillagerPage(2, 5))
    // console.log(getVillagerPage(3, 5))
    // console.log(getVillagerPage(4, 5))
    printVillagerPages(firstPage, totalPages, pageSize)
}

function printVillagerPages(firstPage, totalPages, pageSize) {
    // creates empty results array to hold all the results 
    const results = []
    // increases the value of the first page in the function by 1 each time from firstPage to totalPages 
    for (let i = firstPage; i <= totalPages; i++) {
        // assign the data of the function getVillagerPage to the const page 
        const page = getVillagerPage(i, pageSize)
        // logs out this data 
        // console.log(page)
        // puts this data into the array 
        results.push(page)
        console.log(results.length)
    }
    console.log(results)
    const destination = document.getElementById("displayVillagers")
    // destination.innerHTML = 

}
let villagers = []
const searchInput = document.getElementById('searchbar');
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    console.log(villagers)
    villagers.forEach(villager => {
        const isVisible = villager.name.includes(value) || villager.species.includes(value)
        villager.element.classList.toggle("hide", !isVisible)
    })

})
fetch("https://raw.githubusercontent.com/Norviah/animal-crossing/refs/heads/master/json/combined/Villagers.min.json")
    .then(res => res.json())
    .then(data => {
        villagers = data.map(villager => {
            const output = document.getElementById("demo")
            const card = output.classList.add("card")
            return { name: villager.name, species: villager.species, element: card }
        })
        let villagerName = villagers.map(villager => villager.name)
        console.log(villagerName)
    })
// (i) look through the documents
// (ii) get the name value from the current villager
// (iii) see if villager's name equals the name that was searched for (consider fuzzy and partial matching later)
// (iv) return the data if villager's name equals name searched for 