let favorite = [];


fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GUB8Dz3k3dGleGqH3tV9lAZwM8OaN8Ig", {
  "method": "get",
})
  .then(function (serverPromise) {
    serverPromise.json()

      .then(function (i) {
        let ourBooks = i.results.books;

        for (let x in ourBooks) {
        // 
          let bTitle = document.createElement('h4');
          let bookD = document.createElement('p');
          let bookimg = document.createElement('img')
          let div = document.createElement('div')
          let addFav = document.createElement('button')
          let mainDiv = document.getElementById('main');
          
          
        
        //   
          bookimg.src = ourBooks[x].book_image;
          bTitle.innerText = ourBooks[x].title;
          bookD.innerText = ourBooks[x].description;

          addFav.innerText = 'Add '
         
          // addFav.innerHTML = `<div class='addfav'> <h3>Add</h3> </div>`;
          // div.innerHTML = 'yazeed'
          addFav.classList.add('addFav',"btn","btn-primary");


          div.className = "innercontainer card","card";
          
          // addFav.className = 'addfav';

          div.appendChild(bookimg)
          div.appendChild(bTitle);
          div.appendChild(addFav)
          div.appendChild(bookD);
          mainDiv.appendChild(div);

          addFav.addEventListener("click", function () {
            console.log(addFav)


            let exist = false;
            for (let i = 0; i < favorite.length; i++) {
              console.log(favorite.length);
              // if (favorite.includes(ourBooks[x])) {
              if (favorite[i].rank == ourBooks[x].rank) {
                alert("book is in the fav")
                // favorite.remove(ourBooks[x])
                saveInLocal();
                exist = true;
                break;
              }
            }
              if (!exist) {
                favorite.push(ourBooks[x]);
                 console.log(ourBooks[x]);
                 alert('Added To fav')
                // mainUser = document.getElementById('main1')
                // mainUser.appendChild(ourBooks[x])
              
                
               
                // for(k in favorite){
                //     console.log(ourBooks[x].book_image );


                
         

                // }
                
               
                saveInLocal();
                
              }
            //   console.log(mainUser);
            //   mainUser.onloud(()=>{
            //     mainUser.appendChild(div1);
            
            // })
            
             

            
              
              
            
          })
          
        }
        

      })
      
      .catch(function (e) {
        console.log(e);
      });
  })
  .catch(function (e) {
    console.log(e);
  });
 
function saveInLocal() {
  sessionStorage.setItem("favorite", JSON.stringify(favorite));
}

function getInLocal() {
  favorite = JSON.parse(sessionStorage.getItem("favorite"));
}

if (sessionStorage.getItem("favorite") != null) {
  getInLocal();
}

let addFav = document.querySelectorAll(".addFav")

console.log("hhellloooo");
console.log(document.querySelectorAll(".addFav"));
console.log(addFav.length);


addFav.forEach(element => {
  console.log(element);
  console.log(j);
});


function showFav(){




favorite.forEach(function(y){
    
    console.log(y.book_image);
    console.log(y.title);
    console.log(y.description);

    let bTitle = document.createElement('h4');
    let remove = document.createElement('button');
    let comment = document.createElement('button');
    let popUp = document.createElement('button');
    let bookD = document.createElement('p');
    let bookimg = document.createElement('img');
    let commentArea = document.createElement('textarea');
    let div1 = document.createElement('div');

    commentArea.classList.add('TextArea')

    // commentArea.innerHTML = `Enter Your Comment ...`

    div1.classList.add('card')
    remove.classList.add('innerDiv',"btn","btn-danger")
    comment.classList.add('innerDiv',"btn","btn-primary")
    
    remove.innerText='Remove'
    comment.innerText = "Add Comment "


    bookimg.src = y.book_image;
    bTitle.innerText = y.title;
    bookD.innerText = y.description;
    console.log(bTitle.innerText);
    console.log(bookD.innerText);

    console.log( bookimg.src);
                    
    
    div1.appendChild(bookimg)
    div1.appendChild(bTitle);
    div1.appendChild(bookD);
    div1.appendChild(comment);
    div1.appendChild(commentArea)
    div1.appendChild(remove);
    // div1.appendChild(popUp)
    document.getElementById('main1').appendChild(div1)


    comment.addEventListener('click',()=>{
   
    for(let i = 0 ; i < favorite.length ; i++ ){
        
        Object.assign(favorite[i], [{comment}]);
        if(favorite[i].rank === y.rank){
            favorite[i].comment = commentArea.value
            saveInLocal();
            alert(favorite[i].comment)
          
        }
        

        
        
        

       

        
       
        

       

    }
    
    // commentArea.style.display="none"


}) 
//    console.log(favorite);
   
  

    
    
    

    
    


    // comment.addEventListener('cilck',(e)=>{
        
      

        
    //     alert('Done')
    // })

    
    remove.addEventListener('click',(e)=>{
        div1.remove()
        // localStorage.removeItem();
        // window.localStorage.removeItem(favorite[rank]);
        console.log(y.rank-1);

        for(let i =0 ; i<favorite.length;i++){
            if(favorite[i].rank == y.rank){
                favorite.splice(i, 1);
                saveInLocal()
                
            }
           

        }
        
      

        // console.log(y.rank);
    })

    
    
    

})
  


    
    



}

// console.log(favorite);
// user
        //  let bTitle = document.createElement('h4');
        //   let bookD = document.createElement('p');
        //   let bookimg = document.createElement('img')
        //   let div = document.createElement('div')
        //   let addFav = document.createElement('button')

        //   let mainDiv = document.getElementById('main1');

           







// GUB8Dz3k3dGleGqH3tV9lAZwM8OaN8Ig