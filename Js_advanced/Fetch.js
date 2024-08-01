async function getallusers() {
    const fetch = await import('node-fetch').then(module => module.default);

    try {
        const response = await fetch('https://api.github.com/users/arpanb8907');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getallusers();
