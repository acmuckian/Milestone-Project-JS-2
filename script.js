
/** @returns {Promise<Villager[]>}  - promise that resolves to an array */

async function getVillagers() {
    const response = await fetch("https://raw.githubusercontent.com/acmuckian/animal-crossing-data/refs/heads/master/json/combined/Villagers.min.json",
        { cache: "force-cache" }
    );
    return await response.json();

}
// this is an IIFE (immediately invoked function expression) that will run the function getVillagers() as soon as the script is loaded and making sure there is a cached version
// to get the entire dataset 
(async () => await getVillagers())();



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

async function showRandomVillager() {
    const output = document.getElementById("demo");
    const villagerList = document.getElementById("villagersList")
    const villagerPage = document.getElementById("VillagerPage")
    const pagebutton = document.getElementById("pagebuttons")
    if (output.style.display === "none") {
        output.style.display = "block";
        villagerList.style.display = "none";
        villagerPage.style.display = "none";
        pagebutton.style.display = "none";
        const randVillager = await getRandomVillager() // gets a villager randomly from the array 
        // getting the demo element by id and ag it to the output const 
        // const intro = document.getElementById("intro")
        // intro.innerHTML = `Look who it is, it's ${villager.name}!`
        output.innerHTML = createVillagerComponent(randVillager)
    } else {
        output.style.display = "none";
        villagerPage.style.display = "grid";
        
    }


}
/** 
 * creates a component for a single villager 
 * */
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
            <li class="list-group-item">Gender: ${villager.gender}</li>
            <li class="list-group-item">Personality: ${villager.personality}</li>
            <li class="list-group-item">Favourite Saying: ${villager.favoriteSaying}</li>
        </ul></div>`
}

async function getRandomVillager() {
    const VillagerArray = await getVillagers()
    const random = Math.floor(Math.random() * VillagerArray.length)
    const randVillager = VillagerArray[random]
    console.log(random, randVillager)
    return randVillager
}
async function getVillagersSlice(start, end) {
    return (await getVillagers()).slice(start, end)
}

async function displayAllVillagers() {
    const elementId = "VillagerPage"
    const demo = document.getElementById("demo")
    const toggle = document.getElementById(elementId)
    if (toggle.style.display === "none") {
        // list is currently not shown 

        // getting a subset of the villagers only from the whole array 
        const villagerSubset = await getVillagersSlice(0, 50);
        // (i) create divs of the villagers 
        // const villagerElements = villagerSubset.map(createVillagerComponent)
        const villagerElements = villagerSubset.map((villager) => {
            const villagerEl = createVillagerComponent(villager)
            return `<div>${villagerEl}</div>`
        })
        const villagerListComponent = villagerElements.join('');
        assignInnerHtml(elementId, villagerListComponent)

        toggle.style.display = "grid";
        demo.style.display = "none"

    } else {
        // list is currently shown 
        toggle.style.display = "none";

    }
}

// this is a function to return a page of villagers
async function getVillagerPage(page, pageSize = 9) {
    const sliceStart = (page - 1) * pageSize
    const sliceEnd = sliceStart + pageSize
    console.log(sliceStart, sliceEnd)
    const result = (await getVillagers()).slice(sliceStart, sliceEnd);
    return result
}
/**
 * Assign the innerHTML of an element by its ID
 *
 * @param {string} elementId
 * @param {string} innerHTML
 */
function assignInnerHtml(elementId, innerHTML) {
    document.getElementById(elementId).innerHTML = innerHTML;
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


async function printVillagerPage() {
    const villagerPage = document.getElementById("VillagerPage")
    // if (villagerPage.style.display === "none") {
        // villagerPage.style.display === "grid"
    const pageNumber = document.getElementById("pagenumber").value
    const villagerElements = (await getVillagerPage(pageNumber)).map((villager) => {
        const villagerEl = createVillagerComponent(villager)
        return `<div>${villagerEl}</div>`
    })
    const villagerListComponent = villagerElements.join('');
    assignInnerHtml("VillagerPage", villagerListComponent)
// } else {
    villagerPage.style.display === "none";
// }
}
printVillagerPage()
/**
 * Prints all the pages of villagers
 * @param {number} firstPage - the first page to start from
 * @param {number} totalPages - the total number of pages
 * @param {number} pageSize - the number of villagers per page
 * @deprecated 
 */
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

/**
 * Handles the search input event
 *
 * @param {Event} e - the event object
 */
async function handleSearchInput(e, limit = 10) {
    const searchInput = e.target.value
    const villagersArray = await getVillagers()

    const lowerCaseSearchInput = searchInput.toLowerCase();
    const results = villagersArray.filter((villagerItem) => {
        return (
            villagerItem.name.toLowerCase().includes(lowerCaseSearchInput) ||
            villagerItem.species.toLowerCase().includes(lowerCaseSearchInput) ||
            villagerItem.birthday.toLowerCase().includes(lowerCaseSearchInput)
        );
    });
    const resultsSlice = results.slice(0, limit);

    const resultsCount = resultsSlice.length;
    const totalResultsCount = results.length

    console.log(`${resultsCount} of ${totalResultsCount} results found for ${searchInput}`);
    const resultCards = buildVillagerComponentArray(resultsSlice);
    const resultsList = arrayToUl(resultCards);

    assignInnerHtml("demo", resultsList);
}

/**
 * Converts an array of HTML strings into an unordered list
 *
 * @param {string[]} array - an array of HTML strings
 * @returns {string} an HTML string representing an unordered list
 */

function arrayToUl(array) {
    const wrappedElements = array.map((item) => `<li>${item}</li>`);
    const style = `
		list-style-type: none;
	`;
    return `<ul>
		${wrappedElements.join("")}
	</ul>`;
}

/**
 * Builds the result cards for the search results
 * @param {Villager[]} results - the search results
 * @returns {string[]} - an array of HTML strings representing the search results
 */

function buildVillagerComponentArray(villagers) {
    return villagers.map((result) => createVillagerComponent(result));
}
// Get input element from the DOM
const searchInput = document.getElementById("searchbar");
// Add an event listener to the input element
searchInput.addEventListener("input", handleSearchInput)

function renderVillagerBirthday(date) {
const parts = date.split("/");
const month = Number(parts[0])
const day = Number(parts[1])
return ` ${month}/${day}`;
}
async function searchVillagerBirthday() {
    const day = document.getElementById("day").value
    const month = document.getElementById("month").value
    const date = `${month.toString()}/${day.toString()}`
    console.log(date)
    const villagersArray = await getVillagers()
    const results = villagersArray.filter((villagerItem) => {
        return (
            villagerItem.birthday.includes(date)
        );
    });
    const resultsSlice = results.slice(0, limit = 10);

    const resultsCount = resultsSlice.length;
    const totalResultsCount = results.length

    console.log(`${resultsCount} of ${totalResultsCount} results found for ${searchInput}`);
    const resultCards = buildVillagerComponentArray(resultsSlice);
    const resultsList = arrayToUl(resultCards);

    assignInnerHtml("demo", resultsList);
}

// fetch("https://raw.githubusercontent.com/Norviah/animal-crossing/refs/heads/master/json/combined/Villagers.min.json")
//     .then(res => res.json())
//     .then(data => {
//         villagers = data.map(villager => {
//             const output = document.getElementById("demo")
//             const card = output.classList.add("card")
//             return { name: villager.name, species: villager.species, element: card }
//         })
//         let villagerName = villagers.map(villager => villager.name)
//         console.log(villagerName)
//     })

/** @typedef {object} Translations
* @property {string} sourceSheet
* @property {string} id
* @property {string} eUde
* @property {string} eUen
* @property {string} eUit
* @property {string} eUnl
* @property {string} eUru
* @property {string} eUfr
* @property {string} eUes
* @property {string} uSen
* @property {string} uSfr
* @property {string} uSes
* @property {string} jPja
* @property {string} kRko
* @property {string} tWzh
* @property {string} cNzh
* @property {boolean} plural
*/

/** @typedef {object} Catchphrases
 * @property {string} sourceSheet
 * @property {string} id
 * @property {string} eUde
 * @property {string} eUen
 * @property {string} eUit
 * @property {string} eUnl
 * @property {string} eUru
 * @property {string} eUfr
 * @property {string} eUes
 * @property {string} uSen
 * @property {string} uSfr
 * @property {string} uSes
 * @property {string} jPja
 * @property {string} kRko
 * @property {string} tWzh
 * @property {string} cNzh
 * @property {boolean} plural
 */

/** @typedef {object} Villager
 * @property {string} sourceSheet
 * @property {string} name
 * @property {string} iconImage
 * @property {string} photoImage
 * @property {string | null} houseImage
 * @property {string} species
 * @property {string} gender
 * @property {string} personality
 * @property {string} subtype
 * @property {string} hobby
 * @property {string} birthday
 * @property {string} catchphrase
 * @property {string} favoriteSong
 * @property {string} favoriteSaying
 * @property {string} defaultClothing
 * @property {string} defaultUmbrella
 * @property {string} wallpaper
 * @property {string} flooring
 * @property {number[]} furnitureList
 * @property {string[]} furnitureNameList
 * @property {string} diyWorkbench
 * @property {string} kitchenEquipment
 * @property {string} versionAdded
 * @property {string} nameColor
 * @property {string} bubbleColor
 * @property {string} filename
 * @property {string} uniqueEntryId
 * @property {Catchphrases} catchphrases
 * @property {Translations} translations
 * @property {string[]} styles
 * @property {string[]} colors
 * @property {number} defaultClothingInternalId
 */
// (i) look through the documents
// (ii) get the name value from the current villager
// (iii) see if villager's name equals the name that was searched for (consider fuzzy and partial matching later)
// (iv) return the data if villager's name equals name searched for 