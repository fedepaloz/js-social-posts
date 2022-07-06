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


    }, {
        id: 3,
        name: 'Giorgio Savo',
        picture: "https://i.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c",
        data: "1 anno fa",
        likes: 20


    }, {
        id: 4,
        name: 'Luca Murri',
        picture: "https://i.picsum.photos/id/60/200/200.jpg?hmac=MjMlhHlJlU_z3Z1DXohWUex2M-Gs7dtbqv4EJ4pSg3E",
        data: "8 mesi fa",
        likes: 34


    }, {
        id: 5,
        name: 'Marcel Proust',
        picture: "https://i.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM",
        data: "200 anni fa",
        likes: 43


    },

]

console.table(socialPosts)