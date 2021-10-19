let favorite = [];





fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GUB8Dz3k3dGleGqH3tV9lAZwM8OaN8Ig", {
  "method": "get",


})

  .then(function (serverPromise) {
    serverPromise.json()

      .then(function (i) {
        let ourBooks = i.results.books;

        //  console.log(ourBooks);


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
          addFav.classList.add('addFav');


          div.className = "innercontainer";
          
          // addFav.className = 'addfav';

          div.appendChild(bookimg)
          div.appendChild(bTitle);
          div.appendChild(addFav)
          div.appendChild(bookD);
          mainDiv.appendChild(div);
          
            
          

          // console.log(ourBooks[x].title);
          // console.log(ourBooks[x].book_image);
          // console.log(ourBooks[x].description);
          // addtofav();

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
                // mainUser = document.getElementById('main1')
                // mainUser.appendChild(ourBooks[x])

                favorite.forEach(function(y){
                    console.log(y.book_image);
                    console.log(y.title);
                    console.log(y.description);

                let bTitle = document.createElement('h4');
                let bookD = document.createElement('p');
                let bookimg = document.createElement('img');
                let div1 = document.createElement('div');
                let mainUser = document.getElementById('main1')
               
                


                bookimg.src = y.book_image;
                bTitle.innerText = y.title;
                bookD.innerText = y.description;
                                

                div1.appendChild(bookimg)
                div1.appendChild(bTitle);
                div1.appendChild(bookD);
                // mainUser.appendChild(div1);

                })
               
                // for(k in favorite){
                //     console.log(ourBooks[x].book_image );


                
         

                // }
                
               
                saveInLocal();
                
              }
              
              
            
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

// user
        //  let bTitle = document.createElement('h4');
        //   let bookD = document.createElement('p');
        //   let bookimg = document.createElement('img')
        //   let div = document.createElement('div')
        //   let addFav = document.createElement('button')

        //   let mainDiv = document.getElementById('main1');

           







// GUB8Dz3k3dGleGqH3tV9lAZwM8OaN8Ig