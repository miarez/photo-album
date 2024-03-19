const cs = console.log

const map = {
    "architecture" : [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
    ],
    "abstract" : [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
    ],
}

function build_category_card(category){

    let categories = document.getElementsByClassName('categories')[0]

    let card    = document.createElement('div')

    card.onclick = function(){
        buildPhotos(category);
    }

    let label   = document.createElement('div')
    label.innerHTML = category

    let img = document.createElement('img')
    img.src = `img/${category}/0.jpg`;
    img.alt = 'Photo'
    card.appendChild(img)
    card.appendChild(label)
    categories.appendChild(card);
}

Object.entries(map).forEach(([key, value]) => {
    build_category_card(key)
});
buildPhotos('architecture');


function buildPhotos(category){
    let grid = document.getElementsByClassName('grid')[0]
    grid.innerHTML = ''

    Object.entries(map[category]).forEach(([key,value]) => {
        let img_path = `${category}/${value}`
        build_photo_block(img_path)
    });
}


function build_photo_block(img_path) {

    let grid = document.getElementsByClassName('grid')[0]

    let photo_item = document.createElement('div')
    photo_item.classList.add('photo-item')

    photo_item.onclick = function(){
        openOverlay(img_path);
    }

    let img = document.createElement('img')
    img.src = `img/${img_path}`;
    img.alt = 'Photo'

    photo_item.appendChild(img)
    grid.appendChild(photo_item);
}


function openOverlay(img_path) {
    let src = `img/${img_path}`;

    document.getElementById('overlay').style.display = "block";
    document.getElementById('overlay-img').src = src;
    document.getElementById('overlay-caption').textContent = "...";
}

function closeOverlay() {
    document.getElementById('overlay').style.display = "none";
}

