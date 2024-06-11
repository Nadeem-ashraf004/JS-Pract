const URL='https://jsonplaceholder.typicode.com/posts/1'
function FetchData(){
    fetch(URL)
    .then(response=>{
        if (!response.ok){
            throw new error('Network respons was not ok' + response.statusText);
    }
    return  response.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.error('there has been a problem with your fetch operation:',error);
    })
}
FetchData();