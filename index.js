function optionsSetup() {
    let options = document.querySelectorAll('.header__inner-col-options .option')
    options.forEach(option => {
        option.addEventListener('click', ()=>{
            if(option.classList.contains('active')) {
                option.classList.toggle('active')                
            }
            else {
                options.forEach(option => {
                    option.classList.remove('active')
                })
                option.classList.toggle('active')
            }
        })
    })
}
function reactEmoji() {
    let like = document.querySelectorAll('.like')
    let supEmoji = document.querySelectorAll('.get-emj-12 .col1')
    like.forEach(el => {
        el.addEventListener("click", ()=>{
            el.classList.toggle('active')
        })
    })
    let emoji = true;
    supEmoji.forEach(el => {
        el.addEventListener('click', ()=> {
            el.parentElement.parentElement.children[0].innerHTML = el.innerHTML
        })
    })
}
function loadComments() {
    let commentsEl = document.querySelectorAll('.action-col.comments')
    commentsEl.forEach(el => {
        el.addEventListener('click', ()=> {
            el.parentElement.parentElement.parentElement.parentElement.classList.toggle('active')
        })
    })
}
function searchInput() {
    let searchEl = document.getElementById('searchInp')
    let searchWrapper = document.querySelector('.search-wrapper')
    let closeWrapper =document.querySelector('.close-search')
    searchEl.addEventListener('click', ()=> {
        if(!searchWrapper.classList.contains('active')) {
            closeWrapper.addEventListener('click', ()=> {
                searchWrapper.classList.remove('active')
            })
        }
        searchWrapper.classList.toggle('active')
    })
}
function hamburgerMenu() {
    let hamburgerBtn = document.getElementById('hamburgerMenu')
    let menu = document.querySelector('.sidebar')
    hamburgerBtn.addEventListener('click', ()=>{
        menu.classList.toggle('active')
    })
}

optionsSetup()
reactEmoji()
loadComments()
searchInput()
hamburgerMenu()