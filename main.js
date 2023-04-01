// bismillah
let elForm = select("#form")
let elSelectGenre = select("#selectgenre")
let elList = select("#list")
let cardTemplate = select("#card-template").content
let modalTemplate = select("#modal-template").content
let key = "c251dfbf"

elForm.addEventListener("submit", evt => {
    evt.preventDefault()
    
    let {search, selectgenre, selectsort} = evt.target.elements
    
    // let regex = new RegExp(search.value.trim(),key, "gi")
    
    // let searchedFilm = films.filter((film) => film.Title.match(regex))
    
    elList.innerHTML = `
    <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    `;
    getApi(search.value.trim(), key);
    
    // if(selectgenre.value != "all"){
    //     let filterByGender = searchedFilm.filter((film) => 
    //     film.genres.includes(selectgenre.value)
    //     )
    //     searchedFilm = filterByGender
    // }
    
    // if(selectsort.value == "a-z"){
    //     searchedFilm.sort((a, b) => {
    //         if(a.Title > b.Title){
    //             return 1
    //         }else if (a.Title < b.Title){
    //             return -1
    //         }else{
    //             return 0
    //         }
    //     })
    // }else if(selectsort.value == "z-a"){
    //     searchedFilm.sort((a, b) => {
    //         if(b.Title > a.Title){
    //             return 1
    //         }else if (b.Title < a.Title){
    //             return -1
    //         }else{
    //             return 0
    //         }
    //     })
    // }
    renderFunc(data, elList)
})
async function getApi(search, key) {
    let data = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${search}`)
    .then((res) => res.json())
    .then((data) => data.Search)
    .catch((error) => console.log(error))
    renderFunc(data, elList)
}

function renderGenre(array, element){
    let = []
    
    array.forEach((film) => {
        film.genres.forEach(genre => {
            !genreArr.includes(genre) ? genreArr.push(genre) : null
            
        })
        
    })
    
    genreArr.forEach(genre => {
        let newOption = create("Option")
        newOption.textContent = genre
        newOption.value = genre
        element.append(newOption)
    })
}
renderGenre(films, selectgenre)


function renderFunc(array, element){
    element.innerHTML = null
    
    array.forEach((film) => {
        let newLi = document.createElement("li")
        let img = document.createElement("img")
        
        img.src = film.Poster
        newLi.textContent = film.Title
        
        
        element.append(img, newLi)
    })
    
    
    // array.forEach(film => {
    //     let cloneTemplate = cardTemplate.cloneNode(true)
        
    //     let li = select("li", cloneTemplate)
    //     let img = select("img", cloneTemplate)
    //     let h2 = select("h2", cloneTemplate)
    //     let btn = select("button", cloneTemplate)
        
    //     btn.addEventListener("click", (evt) => {
    //         let filmId = evt.target.dataset.id
    //         let cloneTemplateModal = modalTemplate.cloneNode(true)
            
    //         let foundFilm = array.find((item) => item.id == filmId)
            
    //         let modal = select("#modal", cloneTemplateModal)
    //         let iframe = select("iframe", cloneTemplateModal)
    //         let h2 = select("h2", cloneTemplateModal)
    //         let h3 = select("h3", cloneTemplateModal)
    //         let p = select("p", cloneTemplateModal)
            
    //         iframe.href = foundFilm.link
    //         h2.textContent = foundFilm.Title
    //         h3.textContent = `Genres: ${foundFilm.genres.join(", ")}`
    //         p.textContent = foundFilm.overview
    //         document.querySelector("body").append(modal)
    //     })
        
        
    //     img.src = film.Poster
    //     h2.textContent = film.Title
    //     btn.dataset.id = film.id
        
        
    //     element.append(li)
        
    // })
}
renderFunc(films, elList)


function deleteModal(){
    const elModal = document.getElementById("modal")
    elModal.remove()
}