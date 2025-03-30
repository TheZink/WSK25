async function mainApp() {
    try {
        const request = await fetch('https://reqres.in/api/unknown/23');
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

mainApp();