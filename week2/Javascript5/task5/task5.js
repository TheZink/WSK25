let restaurants = [];
let menu = [];

async function getRestaurants(){
  try {
    const request = await fetch('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants')
    if (!request.ok) {
      throw new Error(`Fetch error: ${request.status}`);
    }
    const data = await request.json();
    restaurants.push(...data);
  } catch (error) {
    console.log('error', error);
  } finally {
    console.log("Request complete");
  }
}

async function getMenu(id){
  try {
    const request = await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/fi`)
    if (!request.ok) {
      throw new Error(`Fetch error: ${request.status}`);
  }
    const data = await request.json();
    menu.push(data);
  } catch (error) {
    console.log('error', error);
  } finally {
    console.log("Request complete");
  }
}

async function MainApp(){
  const modal = document.getElementById('restaurant');
  const closeModal = document.querySelector('.close');
  const modalTitle = document.getElementById('title');
  const modalAddress = document.getElementById('address');
  const modalPhone = document.getElementById('phone');
  const modalCompany = document.getElementById('company');
  const modalMenu = document.getElementById('menu')

  await getRestaurants();

  restaurants.sort((a,b) => {
    if (a.name < b.name) {return -1;}
    if (a.name > b.name) {return 1};
    return 0;
  });

  for (let i = 0; i < restaurants.length; i++){
    const targetTr = document.createElement('tr');
    targetTr.classList.add('highlight');

    const nameTh = document.createElement('td');
    nameTh.textContent = restaurants[i].name;

    const addressTh = document.createElement('td');
    addressTh.textContent = restaurants[i].address;

    targetTr.appendChild(nameTh);
    targetTr.appendChild(addressTh);

    document.getElementById('target').appendChild(targetTr);
    getMenu(restaurants[i]._id)

    // Modal-ikkuna
    targetTr.addEventListener('click', () => {
      modalTitle.textContent = restaurants[i].name;
      modalAddress.textContent = `Address: ${restaurants[i].address}`;
      modalPhone.textContent = `Phone: ${restaurants[i].phone}`;
      modalCompany.textContent = `Company: ${restaurants[i].company}`;
      modalMenu.innerHTML = '';
    
      if (menu[i] && menu[i].courses) {
        menu[i].courses.forEach(course => {
          const menuItem = document.createElement('p');
          menuItem.textContent = `${course.name}, ${course.price}`;
          modalMenu.appendChild(menuItem);
        });  
      } else {
        modalMenu.textContent = `Data retrieval fails`
      }
      modal.style.display = "block";
    });
  }

  closeModal.addEventListener('click', () => {
    modal.style.display = "none";

  });
  
} 

MainApp();