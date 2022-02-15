

const http = new EastHttp;



// Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (posts){
//   console.log(posts)

//   const posts1 = JSON.parse(posts)

//   let output = '';
//   posts1.forEach(function(post){
    
//     output +=`
//               <ul style="list-style: none;">
//                 <li>User ID: ${post.userId}</li>
//                 <li>ID: ${post.id}</li>
//                 <li>Title: ${post.title}</li>
//                 <li>Body: ${post.body}</li>
//               </ul> 
//             ` 
//   })

//    document.body.innerHTML = output;
// })





// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// Create data


  const data = {
    title : 'Post 21010',
    body:'this is post 21010'
  }




// // Create Post


// http.post('https://jsonplaceholder.typicode.com/posts',  data, function(err, post){
//   if (err){
//     console.log(err)
//   }else{
//     console.log(post)
//   }
// } )


// Update Post


// http.put('https://jsonplaceholder.typicode.com/posts/5',  data, function(err, post){
//   if (err){
//     console.log(err)
//   }else{
//     console.log(post)
//   }
// } )


// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/7', function (err, response){
  if(err){
    console.log(err)
  }else{
    console.log(response)
  }
 



  
})
