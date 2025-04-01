
const targetTable = document.getElementById('target');

const modalTitle = document.getElementById('title');
const modalAddress = document.getElementById('address');
const modalPostal = document.getElementById("postalCode")
const modalPhone = document.getElementById('phone');
const modalCompany = document.getElementById('company');
const modalMenu = document.getElementById('menu');


export const restaurantsRow = (data) => {
    let row = [];

    data.forEach(restaurants => {
        const targetTr = document.createElement('tr');
        targetTr.classList.add('highlight');

        const nameTh = document.createElement('td');
        nameTh.textContent = restaurants.name;

        const addressTh = document.createElement('td');
        addressTh.textContent = restaurants.address;

        targetTr.appendChild(nameTh);
        targetTr.appendChild(addressTh);

        targetTable.appendChild(targetTr);
        row.push(targetTr);
        
    });

    return row;
};

export const restaurantModal = (name, address, city, postalCode, phone, company, courses) => {

    
    modalTitle.textContent = name;
    modalAddress.textContent = `Address: ${address}, ${city}`;
    modalPostal.textContent = `Postalcode: ${postalCode}`
    modalPhone.textContent = `Phone: ${phone}`;
    modalCompany.textContent = `Company: ${company}`;
    modalMenu.innerHTML = '';
      

    courses
    ? courses.forEach(course => {
        const {name, price, diets} = course
        const menuItem = document.createElement('p');
        menuItem.textContent = `${name}, ${price ? `price ${price}` : '(Price not avaible)'}  ${diets}`;
        modalMenu.appendChild(menuItem);
    })
    : (modalMenu.innerHTML = 'Data retrieval fails');
};
