function fetchUser(callback) {
    setTimeout(() => {
        const user = { name: "Alice" }; 
        callback(user.name);
    }, 1000);
}

fetchUser((name) => console.log(name)); 
