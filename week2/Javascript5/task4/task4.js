async function fetchData(url, options){
    try {
        const request = await fetch(`${url}`, options);
        if (!request.ok) {
            throw new Error(`Fetch error: ${request.status}`);
        }
        const data = await request.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Request complete");
    }
}

async function mainApp() {
    try {
        const user = {
           name: 'John Doe',
           job: 'Developer'
        };

        const url = 'https://reqres.in/api/users';

        const options = {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
        }

        const userData = await fetchData(url, options);
        console.log(userData);

      } catch (error) {
        console.error('An error occurred:', error);
      }
}

mainApp();