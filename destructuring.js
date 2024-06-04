const obj = {
    title:"mern stack Course",
    author:"Saqlain",
 };
   
   //let {title:cours,author:Name,...arr}=obj
   //console.log(cours,Name,)
   let {title:cours,...arr}=obj
   console.log(cours,arr)