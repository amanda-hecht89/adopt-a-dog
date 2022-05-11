import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log('id', id);
    const doggo = await getDog(id);
    console.log('doggo', doggo);
    const furry = renderDogDetail(doggo);

    dogDetailContainer.append(furry);
}
loadData();

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
