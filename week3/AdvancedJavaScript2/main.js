import { restaurantsRow, restaurantModal} from "./component.js";
import { urlRestaurants, urlMenu } from "./baseUrl.js";
import { fetchData } from "./util.js";

const targetTable = document.getElementById('target');

const modal = document.getElementById("myModal");

const searchInput = document.querySelector("#searchInput");
const pStatus = document.getElementById("status");

async function MainApp(){

  const restaurantsUrl = urlRestaurants();
  const restaurantsData = await fetchData(restaurantsUrl);
  let restaurantsFiltered;

  restaurantsData.sort((a,b) => {
    if (a.name < b.name) {return -1};
    if (a.name > b.name) {return 1};
    return 0;
  });
  
  const rows = restaurantsRow(restaurantsData);
  rows.forEach(row => targetTable.appendChild(row));

  searchInput.addEventListener('input', () => {
    targetTable.innerHTML = `<tr> <th>Name</th> <th>Address</th> </tr>`
    const searchItem = searchInput.value.toLowerCase();

    // Filter the restaurantsData array to include only restaurants where the name, address, or city
    // contains the search term.
    const filtered = restaurantsData.filter((restaurant) => 
      restaurant.name.toLowerCase().includes(searchItem) ||
      restaurant.address.toLowerCase().includes(searchItem) ||
      restaurant.city.toLowerCase().includes(searchItem));

    if (filtered.length > 0) {
      restaurantsFiltered = restaurantsRow(filtered);
      restaurantsFiltered.forEach(row => targetTable.appendChild(row));
      pStatus.innerHTML = ""
    } else {
      targetTable.innerHTML = `Sorry, "${searchItem}" not found`;
      console.log(filtered)
    }
    
  });

  targetTable.addEventListener('click', async (event) => {
    const rowIndex = event.target.closest('tr'); // Find the <tr> element rowIndex

    const restaurantId = rowIndex.getAttribute('id'); //Get id from element
    const restaurant = restaurantsData.find(x => x._id.includes(restaurantId)); // Search restaurant by element id
    
    // initialize modal-window 
    modal.innerHTML = "";
    const menuUrl = urlMenu(restaurant._id);
    const menuData = await fetchData(menuUrl);

    const { name, address, city, postalCode, phone, company } = restaurant;
    const { courses } = menuData;

    const restaurantData = restaurantModal(name, address, city, postalCode, phone, company, courses);

    modal.appendChild(restaurantData);
    modal.style.display = "block";

    const closeModal = document.querySelector(".close");
    
    closeModal.addEventListener('click', () => {
      modal.style.display = "none";
    });
  });
 
} 

MainApp();