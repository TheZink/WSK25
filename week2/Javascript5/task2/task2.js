async function postData(){
    const data = {
        body: JSON.stringify({
            name: 'John Javascript',
            job: 'Janitor'
        }),
        method: 'POST',
        headers: {
              'Content-type': 'application/json',
        },
    }

    try {
        const request = await fetch('https://reqres.in/api/users', data)
        if (!request.ok) throw new Error('Error on request');
        const json = await request.json();
        console.log('result', json);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Request complete');
    }
}

postData();