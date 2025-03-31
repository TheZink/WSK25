import { restaurantsRow, restaurantModal} from "./component.js";

const getRestaurants = async () => {
  try {
    const request = await fetch(`
      https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants`);
    
    if (!request.ok) {
      throw new Error(`Fetch error: ${request.status}`);
    }

    const data = await request.json();
    return data;

  } catch (error) {
    console.log('error', error);

  } finally {
    console.log(`Request complete`);
  }
}

const getMenu = async (id) => {
  try {
    const request = await fetch(`
      https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/fi`);

    if (!request.ok) {
      throw new Error(`Fetch error: ${request.status}`);
    }

    const data = await request.json();
    return data;

  } catch (error) {
    console.log('error', error);

  } finally {
    console.log("Request complete");
  }
}

async function MainApp(){
  const modal = document.getElementById("restaurant");
  const closeModal = document.querySelector(".close");

  let restaurants = await getRestaurants();

  restaurants.sort((a,b) => {
    if (a.name < b.name) {return -1};
    if (a.name > b.name) {return 1};
    return 0;
  });

  const rows = restaurantsRow(restaurants);

  rows.forEach((row, index) => {
    row.addEventListener('click', async() =>{
      const menu = await getMenu(restaurants[index]._id); 

      console.log(restaurants[index])
      console.log(menu)

      const restaurantData = restaurantModal(restaurant[index], menu);
      modal.style.display = "block";
    }) 
  });
    
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });
  
} 

MainApp();