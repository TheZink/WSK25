export const urlRestaurants = () => {
    return 'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants'
}

export const urlMenu = (id) =>  {
    return `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/fi`
}