async function getData() {
    try {
        const request = await fetch('https://reqres.in/api/users/1');
        const data = await request.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Request complete");
    }
}

getData();