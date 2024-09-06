// Function to simulate fetching data from an API
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json(); // Parse JSON data from the response
      console.log(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  
  // Call the async function
  fetchData();
  