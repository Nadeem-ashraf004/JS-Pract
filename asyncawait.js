// Async/Await with fetch Api
async function fetchDataAsyncAwait() {
    try {
      const response1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userData = await response1.json();
      console.log('User Data (Async/Await):', userData);
  
      const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const postData = await response2.json();
      console.log('Post Data (Async/Await):', postData);
  
      const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
      const commentsData = await response3.json();
      console.log('Comments Data (Async/Await):', commentsData);
    } catch (error) {
      console.error('Error (Async/Await):', error);
    }
  }
  
  fetchDataAsyncAwait();