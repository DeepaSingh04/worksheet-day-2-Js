const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1; 
    return acc;
}, {});
console.log(freq);
