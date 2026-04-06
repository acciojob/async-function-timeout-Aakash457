// Helper function to create delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function handleSubmit() {
  const textInput = document.getElementById("text").value;
  const delayInput = document.getElementById("delay").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.textContent = "";

  // Wait for the specified delay
  await wait(delayInput);

  // Display the message
  outputDiv.textContent = textInput;
}

// Add event listener to button
document.getElementById("btn").addEventListener("click", handleSubmit);
