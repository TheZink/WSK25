
const targetTable = document.getElementById('target');

const modalTitle = document.getElementById('title');
const modalAddress = document.getElementById('address');
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

export const restaurantModal = (restaurants, menu) => {

    const {name, address, phone, company} = restaurants
    const {courses} = menu;

    modalTitle.textContent = name;
    modalAddress.textContent = `Address: ${address}`;
    modalPhone.textContent = `Phone: ${phone}`;
    modalCompany.textContent = `Company: ${company}`;
    modalMenu.innerHTML = '';
      

    courses
    ? courses.forEach(course => {
        const {name, price} = course
        const menuItem = document.createElement('p');
        menuItem.textContent = `${name}, ${price}`;
        modalMenu.appendChild(menuItem);
    })
    : document.getElementById('menu').createElement('p') = `Data retrieval fails`;
};
