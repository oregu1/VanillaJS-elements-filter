//1. Get needed elements
const categoryBtns = document.querySelectorAll('.caterory-btn');
const categoryElems = document.querySelectorAll('.category-item');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const item = e.currentTarget.dataset.cat;
        categoryElems.forEach(elem => {
            if(elem.classList.contains(item)) {
                elem.style.display = 'block'
            } else if(item === 'all') {
                elem.style.display = 'block'
            } else {
                elem.style.display = 'none'
            }
        })
    })
})