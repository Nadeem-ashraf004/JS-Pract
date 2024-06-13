 // Promises
 function fetchDataPromises() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(userData => {
        console.log('User Data (Promises):', userData);
        return fetch('https://jsonplaceholder.typicode.com/posts/1');
      })
      .then(response => response.json())
      .then(postData => {
        console.log('Post Data (Promises):', postData);
        return fetch('https://jsonplaceholder.typicode.com/comments/1');
      })
      .then(response => response.json())
      .then(commentsData => {
        console.log('Comments Data (Promises):', commentsData);
      })
      .catch(error => {
        console.error('Error (Promises):', error);
      });
  }
  
  fetchDataPromises();