// async function getText(file) {
//     let myObject = await fetch(file);
//     let myText = await myObject.text();
//     myDisplay(myText);
//   }
//   console.log(getText)
async function postData(url="https://jsonlint.com/?url=https://jsonlint.com/datasets/programming-languages.json", data={}){
    const reponse =await fetch(url,{
        method:"post",
        mode :"core",
        cache:"no-cache",
        Credential:"same-origin",
        header:{
            "content-type":"appplication/json",
        },
        redirect:"follow",
        referrerPolicy:"no-referrer",
       body:JSON.stringify(data),
    });
    return Response.json();
}
postData("https://jsonlint.com/?url=https://jsonlint.com/datasets/programming-languages.json", { answer: 42 }).then((data) => {
  console.log(data); 
});