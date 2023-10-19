const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];

const carouselDOMElement = document.querySelector('.carousel');
console.log(carouselDOMElement);

for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
    const image = images[i];

    const html = ` 
        <div class="carousel_item">                  
                <img class="carousel_img" src="./${image.image}" class="card-img-top" />
                <div class="details">
                    <h3 class="title">${image.title}</h3>
                    <p class="text">${image.text}</p>
                </div>
        </div> `;

    carouselDOMElement.innerHTML += html;
    // console.log(carouselDOMElement)
}

const itemsDOMElements = document.querySelectorAll('.carousel_item')
console.log(itemsDOMElements)

let currentIndex = 0

let currentSlide = itemsDOMElements[currentIndex]
currentSlide.classList.add('active')


const arrowLeft = document.querySelector('.carousel .arrow--left')
const arrowRight = document.querySelector('.carousel .arrow--right')

arrowLeft.addEventListener('click', function () {
  console.log('click left')
  console.log(itemsDOMElements[currentIndex])
  itemsDOMElements[currentIndex].classList.remove('active')
  currentIndex = (currentIndex - 1 + itemsDOMElements.length) % itemsDOMElements.length
  itemsDOMElements[currentIndex].classList.add('active')
  console.log(itemsDOMElements)

})

arrowRight.addEventListener('click', function () {
  console.log('click bottom')
  console.log(itemsDOMElements[currentIndex])
  itemsDOMElements[currentIndex].classList.remove('active')
  currentIndex = (currentIndex + 1) % itemsDOMElements.length
  itemsDOMElements[currentIndex].classList.add('active')
  console.log(itemsDOMElements)

})