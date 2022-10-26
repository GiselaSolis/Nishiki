const products = [
    {id: 1, name: 'tshirt white', color: 'white', price: 20, img: './images/anomaly-WWesmHEgXDs-unsplash.jpg'},
    {id: 2, name: 'tshirt black', color: 'black', price: 20, img: './images/sven-ciupka-x8Vg7Up6TUc-unsplash.jpg'},
    {id: 3, name: 'bucket hat white', color: 'white', price: 15, img: './images/hmgoepprod.jpg'},
    {id: 4, name: 'bucket hat black', color: 'black', price: 15, img: './images/caleb-russell-Ra84n1m8pBs-unsplash.jpg'},
    {id: 5, name: 'hoodie white', color: 'white', price: 40, img: './images/clikcc-aq1RsciLhe4-unsplash.jpg'},
    {id: 6, name: 'hoodie black', color: 'black', price: 40, img: './images/medium-shot-man-wearing-black-hoodie_23-2149359861.jpg'},
    {id: 7, name: 'totebag white', color: 'white', price: 15, img: './images/mediamodifier-pIWp-tFT0zA-unsplash.jpg'},
    {id: 8, name: 'totabag black', color: 'black', price: 15, img: './images/he-s-her-lobster-9b6UhV4nLZs-unsplash.jpg'},
]

let cardGrid = document.querySelector('.store__grid')

function createCard(e){
    let newCard = cardGrid.appendChild(document.createElement('div'));
    newCard.classList.add('store__card');
    newCard.dataset.color = e.color;
    newCard.setAttribute('id', e.id)
    newCard.appendChild(createButton())
    newCard.appendChild(createImage(e));
    let itemData = newCard.appendChild(createDataContainer());
    itemData.appendChild(createNameTag(e))
    itemData.appendChild(createPriceTag(e));

}

function createButton(){
    let buyBtn = document.createElement('img');
    buyBtn.classList.add('store__card-buy')
    buyBtn.src = './images/shopping-bag.png';
    return(buyBtn);
}

function createImage(e){
    let itemImg = document.createElement('img');
    itemImg.classList.add('store__card-img');
    itemImg.src = e.img;
    return(itemImg);
}

function createDataContainer(){
    let itemData = document.createElement('div');
    itemData.classList.add('store__card-inner');
    return(itemData);
}

function createNameTag(e){
    let itemName = document.createElement('p');
    itemName.textContent = e.name;
    return(itemName)
}

function createPriceTag(e){
    let itemPrice = document.createElement('p');
    itemPrice.textContent = '$' + e.price + 'USD';
    return(itemPrice)
}

let renderItems = products.forEach((e) => createCard(e))


window.onload = function () {
    const buttons = document.querySelectorAll('.color__button');
    const cardItem = document.querySelectorAll('.store__card');

    function toggleActiveClass(t) {
        buttons.forEach((t) => {
            t.classList.remove("active");
        }),
            t.classList.add("active");
    }

    function toggleCards(t) {
        if ("all" === t)
            cardItem.forEach(item => {
                item.style.display = "block";
            });
        else
            cardItem.forEach(item => {
                item.dataset.color === t
                    ? (item.style.display = "block")
                    : (item.style.display = "none");
            });
    }

    for (let t = 0; t < buttons.length; t++)
        buttons[t].addEventListener("click", function () {
            toggleActiveClass(buttons[t]),
                toggleCards(buttons[t].dataset.color);
        });
};

let storeItems = document.querySelectorAll('.store__card');
let storeItemsBuy = document.querySelectorAll ('.store__card-buy');

storeItems.forEach((e) => {
    e.addEventListener('click', (a)=> {
        console.log(e.id)
    })
})


function createCartItem(e){
    let cartItem = document.createElement('div')
    cartItem.classList.add('cart__item')

    let cartItemImg = document.createElement('img');
    cartItemImg.src = e.img;
    cartItem.appendChild(cartItemImg)

    let cartItemPrice = document.createElement('p');
    cartItemPrice.innerText = e.price;
    cartItem.appendChild(cartItemPrice)
    
    
    return(cartItem, cartItemImg, cartItemPrice)
}






// function filterSelection(color) {
//     if (color == 'black') {
//         onlyBlack.forEach((e) => {
//             createCard(e)
//         })
//     }
//     if (color == 'white') {
//         onlyWhite.forEach((e) => {
//             createCard(e)
//         })
//     } else {
//         products.forEach((e) => {
//             createCard(e)
//         })
//     }
// }


// let cards = products.forEach((e) => {
//     let newCard = cardGrid.appendChild(document.createElement('div'));
//     newCard.classList.add('store__card');
    
//     let buyBtn = document.createElement('img');
//     buyBtn.classList.add('store__card-buy')
//     buyBtn.src = './images/shopping-bag.png';
//     newCard.appendChild(buyBtn)

//     let itemImg = document.createElement('img');
//     itemImg.classList.add('store__card-img');
//     itemImg.src = e.img;
//     newCard.appendChild(itemImg);

//     let itemData = document.createElement('div');
//     itemData.classList.add('store__card-inner');
//     newCard.appendChild(itemData);
    
//     let itemName = document.createElement('p');
//     itemName.textContent = e.name;
//     itemData.appendChild(itemName);

//     let itemPrice = document.createElement('p');
//     itemPrice.textContent = '$' + e.price + 'USD';
//     itemData.appendChild(itemPrice);

// });

// console.log();


//let askColor = prompt('Choose a color between black & white')


// switch(askColor) {
//     case 'black':
//         let onlyBlack = products.filter((el) => {
//             return el.color == 'black'
//         })
//         console.log('This is our current black catalog: ', onlyBlack);
//         break;
//     case 'white':
//         let onlyWhite = products.filter((el) => {
//             return el.color == 'white'
//         })
//         console.log('This is our current white catalog: ', onlyWhite);
//         break;
//     default:
//         console.log('Sorry, thats not a valid color')
//         break;
// }


// let sortedProductsLower = products.sort((el1, el2) => el1.price - el2.price);
// let sortedProductsHigher = products.sort((el1, el2) => el2.price - el1.price)
// let productsTotal = products.reduce((acc, el) => acc + el.price, 0);

// console.log('Products from lower to higher price: ', sortedProductsLower);
// console.log('Products from higher to lower price: ', sortedProductsHigher);
// console.log('Complete catalog: $', productsTotal, 'USD');