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
  const modal = document.getElementById('restaurant');
  const closeModal = document.querySelector('.close');
  const modalTitle = document.getElementById('title');
  const modalAddress = document.getElementById('address');
  const modalPhone = document.getElementById('phone');
  const modalCompany = document.getElementById('company');
  const modalMenu = document.getElementById('menu');

  const targetTable = document.getElementById('target');

  let restaurants = await getRestaurants();
  
  restaurants.sort((a,b) => {
    if (a.name < b.name) {return -1;};
    if (a.name > b.name) {return 1};
    return 0;
  });
  
  // Ravintolalista
  for (let i = 0; i < restaurants.length; i++){
    const targetTr = document.createElement('tr');
    targetTr.classList.add('highlight');

    const nameTh = document.createElement('td');
    nameTh.textContent = restaurants[i].name;

    const addressTh = document.createElement('td');
    addressTh.textContent = restaurants[i].address;

    targetTr.appendChild(nameTh);
    targetTr.appendChild(addressTh);

    targetTable.appendChild(targetTr);
    
    // Modal-ikkuna
    targetTr.addEventListener('click', async() => {
      modalTitle.textContent = restaurants[i].name;
      modalAddress.textContent = `Address: ${restaurants[i].address}`;
      modalPhone.textContent = `Phone: ${restaurants[i].phone}`;
      modalCompany.textContent = `Company: ${restaurants[i].company}`;
      modalMenu.innerHTML = '';
      
      // Haetaan ravintolan ruokalista
      const menu = await getMenu(restaurants[i]._id); 
      const {courses} = menu;

      courses
        ? courses.forEach(course => {
          const {name, price} = course
          const menuItem = document.createElement('p');
          menuItem.textContent = `${name}, ${price}`;
          modalMenu.appendChild(menuItem);
        })
       : document.getElementById('menu').createElement('p') = `Data retrieval fails`;
      
      modal.style.display = "block";
    });
  }

  closeModal.addEventListener('click', () => {
    modal.style.display = "none";

  });
  
} 

MainApp();