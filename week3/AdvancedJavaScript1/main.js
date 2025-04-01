import { restaurantsRow, restaurantModal} from "./component.js";
import { urlRestaurants, urlMenu } from "./variables.js";
import { fetchData } from "./util.js";

const targetTable = document.getElementById('target');

async function MainApp(){
  const modal = document.getElementById("myModal");
  const dialog = document.querySelector("dialog");

  let restaurantsUrl = urlRestaurants();
  let restaurantsData = await fetchData(restaurantsUrl)

  restaurantsData.sort((a,b) => {
    if (a.name < b.name) {return -1};
    if (a.name > b.name) {return 1};
    return 0;
  });

  const rows = restaurantsRow(restaurantsData);
  rows.forEach(row => targetTable.appendChild(row));
  
  rows.forEach((row, index) => {
    row.addEventListener('click', async() =>{
      modal.innerHTML = "";
      console.log('Evenlistener activated')
      const menuUrl = urlMenu(restaurantsData[index]._id); 
      const menuData = await fetchData(menuUrl);
      
      const {name, address, city, postalCode, phone, company} = restaurantsData[index];
      const {courses} = menuData;
      const restaurantData = restaurantModal(name, address, city, postalCode, phone, company, courses);

      modal.appendChild(restaurantData)
      modal.style.display = "block";
      console.log('Evenlistener completed')

      const closeModal = document.querySelector(".close");
      
      closeModal.addEventListener('click', () => {
        modal.style.display = "none";
      });
    }) 
  });
    
  window.addEventListener('clikc', () => {
    modal.style.display = "none";
  });
  
} 

MainApp();