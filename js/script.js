/* # Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. */


//array di oggetti

const socialPosts = [
    {
        id: 1,
        name: 'Phil Mangione',
        picture: "https://unsplash.it/300/300?image=15",
        data: "4 mesi fa",
        likes: 80


    },
    {
        id: 2,
        name: 'Federico Palozzi',
        picture: "https://i.picsum.photos/id/634/300/300.jpg?hmac=Xydl14x40_5ZjRDqaIAqxyQcuSub_xDcabmUtuE-eD8",
        data: "2 anni fa",
        likes: 2000


    },
    {
        id: 3,
        name: 'Giorgio Savo',
        picture: "https://i.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c",
        data: "1 anno fa",
        likes: 20


    },
    {
        id: 4,
        name: 'Luca Murri',
        picture: "https://i.picsum.photos/id/60/200/200.jpg?hmac=MjMlhHlJlU_z3Z1DXohWUex2M-Gs7dtbqv4EJ4pSg3E",
        data: "8 mesi fa",
        likes: 34


    },
    {
        id: 5,
        name: 'Marcel Proust',
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Marcel_Proust_1895.jpg/1200px-Marcel_Proust_1895.jpg",
        data: "200 anni fa",
        likes: 43


    },

]

console.table(socialPosts)

//recupero l elemento dal dom dove montare tutto
const cardsContainer = document.getElementById('container')


let cards = ''


for (let i = 0; i < socialPosts.length; i++) {
    const posts = socialPosts[i]

    cards +=
        `<div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src="${posts.picture}" alt="${posts.name}" />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${posts.name}</div>
              <div class="post-meta__time">${posts.data}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
          Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
          voluptate recusandae architecto. Et nihil ullam aut alias.
        </div>
        <div class="post__image">
          <img src="${posts.picture}" alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <a class="like-button js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">${posts.likes} Mi Piace</span>
              </a>
            </div>
            <div class="likes__counter">Piace a 0 <b id="like-counter-1" class="js-likes-counter"></b> persone</div>
          </div>
        </div>
      </div>`
}

cardsContainer.innerHTML = cards


//quando clicco cambia colore il tasto mi piace e aumentano i mi piace 

//recupero bottone dal dom

const likeButton = document.querySelectorAll('.js-like-button')

const likeCounter = document.getElementById('like-counter-1')

console.log(likeButton)


for (let i = 0; i < likeButton.length ; i++)

{
    likeButton[i].addEventListener('click', function () {
    
        likeButton[i].classList.add("like-button--liked")
    })

    

}



