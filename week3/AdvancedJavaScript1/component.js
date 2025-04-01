
const targetTable = document.getElementById('target');

const modalTitle = document.getElementById('title');
const modalAddress = document.getElementById('address');
const modalPostal = document.getElementById("postalCode")
const modalPhone = document.getElementById('phone');
const modalCompany = document.getElementById('company');
const modalMenu = document.getElementById('menu');


export const restaurantsRow = (data) => {
    let rows = [];

    data.forEach(restaurants => {
        const row = document.createElement('tr');
        row.classList.add('highlight');

        row.innerHTML = `
        <td>${restaurants.name}</td>
        <td>${restaurants.address}</td>
        `;
        rows.push(row)     
    });
    return rows;

};

export const restaurantModal = (name, address, city, postalCode, phone, company, courses) => {
  
    const modal = document.createElement('ul');
    let menuHtml = '';

    courses
    ? courses.forEach(course => {
        menuHtml += `<li style = "color: white">${course.name}, ${course.price || '?€'}. ${course.diets}</li>`;
    })
    : (menuHtml = 'Data retrieval fails');

     menuHtml += '</ul>';
     modal.innerHTML = `
        <span class="close">&times;</span>
        <h1 style = "color: white">${name}</h1>
        <p style = "color: white">Company: ${company}</p>
        <p style = "color: white">Address: ${address}, ${city}</p>
        <p style = "color: white">PostalCode: ${postalCode}</p>
        <h3 style = "color:white"> Courses</h3>
        <p style = "color: white">Phone: ${phone}</p>
        ${menuHtml}
        `;

    return modal;
};
