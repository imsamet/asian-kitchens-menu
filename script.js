let contentBox = document.getElementsByClassName('section-center')[0];
let buttonBox = document.getElementsByClassName('btn-container')[0];
let addElement = "";
let addButton = "<button class='btn btn-outline-dark btn-item' data-category='All'>All</button>";
let category = []

function Write () {

    menu.map(value => {

        let isCategory = category.indexOf(value.category)

        isCategory <= -1 && category.push(value.category)

        addElement += `
            <div data-category='${value.category}' class='menu-items active col-lg-6 col-sm-12'>
                <img src='${value.img}' alt='${value.title}' class='photo'>
                <div class='menu-info'>
                    <div class='menu-title'>
                        <h4>${value.title}</h4>
                        <h4 class='price'>${value.price}</h4>
                    </div>
                    <div class='menu-text'>
                        ${value.desc}
                    </div>
                </div>
            </div>`
    
    })

    category.map(value => {
        addButton += `<button class='btn btn-outline-dark btn-item' data-category='${value}'>${value}</button>`
    })


    contentBox.innerHTML = addElement
    buttonBox.innerHTML = addButton
}

Write()

buttonBox.addEventListener('click', function(e) {
    const id = e.target.getAttribute('data-category')
    
    Object.values(document.getElementsByClassName('menu-items')).map(value => {

        id == 'All' && id != null ? 
            value.classList.add('active') 
        : 
            value.getAttribute('data-category') != id && id != null && value.classList.remove('active')
            value.getAttribute('data-category') == id && value.classList.add('active')
    })
})