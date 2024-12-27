window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Create 5 promises, each resolving with a random time between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved in ${randomTime} ms`);
    }, randomTime);
  });
  promises.push(promise);
}

// Use Promise.any to wait for the first resolved promise
Promise.any(promises)
.then((result) => {
document.getElementById("output").textContent = result; // Print the result to the output div
})
.catch((error) => {
document.getElementById("output").textContent = `Error: ${error}`;
});