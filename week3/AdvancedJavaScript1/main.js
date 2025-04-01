import { restaurantsRow, restaurantModal} from "./component.js";
import { urlRestaurants, urlMenu } from "./variables.js";
import { fetchData } from "./util.js";

async function MainApp(){
  const modal = document.getElementById("restaurant");
  const closeModal = document.querySelector(".close");

  let restaurantsUrl = urlRestaurants();
  let restaurantsData = await fetchData(restaurantsUrl)

  restaurantsData.sort((a,b) => {
    if (a.name < b.name) {return -1};
    if (a.name > b.name) {return 1};
    return 0;
  });

  const rows = restaurantsRow(restaurantsData);
  
  rows.forEach((row, index) => {
    row.addEventListener('click', async() =>{
      const menuUrl = urlMenu(restaurantsData[index]._id); 
      const menuData = await fetchData(menuUrl);
      
      const {name, address, city, postalCode, phone, company} = restaurantsData[index];
      const {courses} = menuData;
      const restaurantData = restaurantModal(name, address, city, postalCode, phone, company, courses);
      modal.style.display = "block";
    }) 
  });
    
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });
  
} 

MainApp();