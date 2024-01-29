/* RESPONSIVE MENU */
const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = "CLOSE";
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
    
}

/* GALERIJA */
const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

//pomjeramo slike u desno
const moveRight = () => {
    displayNone();
    imgNum++;
    
    if(imgNum === pictures.length) {        //imgNum ulazi u svaku sliku, i ako je jednaka pictures.length(ukupnom broju slika odnosno poslednjoj slici) onda je vraca na 0 ondosno na prvu sliku po redu
        imgNum = 0;
    }
 
    pictures[imgNum].style.display = 'block';

 };

 const moveLeft = () => {
    displayNone();
    imgNum--;
     
    if(imgNum === -1) {          //ako je imgNum jednak -1(to je po redu poslednja slika)
        imgNum = pictures.length -1;    //vrace ga na kraj -1, da ne vrati opet na poslednju
    }
 
    pictures[imgNum].style.display = 'block';
 };

// Event listeneri za strelice
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

//Ova funkcija sakriva sve slike
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
} 

/* PORTFOLIO */
const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');   //uzimamo iz svih buttona na stranici atribut data-category
    
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    })
    
    if(category === 'sve'){
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        })
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){    //include stavljamo jer nedje imamo da nam je data-category tipa hoteli i restorani, zato kazemo ako sadrzi nesto od to dvoje onda prikazi dalje
            item.style.display = 'block';    //ako je uslov tacan, tj ako se data-categori ima istu vrijednost kao ovo gore category, onda se to prikaze
        }  
    })
}

/* Otvaramo modal */
const popupModal = document.querySelector('.popup-modal');
const overlay = document.querySelector('.overlay');

const openModal = () => {
    popupModal.style.display = 'block';
    overlay.style.display = 'block';
}

/* Zatvaramo modal */
const closeModal = () => {
    popupModal.style.display = 'none';
    overlay.style.display = 'none';
}