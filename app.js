import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
async function loadData() {
    const pets = await getDogs();


    for (let pet of pets) {
        const dogDiv = renderDogCard(pet);
        dogListContainer.append(dogDiv);
    }
}
// fetch all dogs
loadData();
// render and append all dog cards to the container
