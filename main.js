// bismillah
let elList = selectEl("#list")
let elGenre = selectEl("#selectgenre")
let elBtn = selectEl("#btn")
let elForm = selectEl("#form")
let elSelect = selectEl("#selectsort")
let elSelectGenre = selectEl("#selectgenre")
let arrGenr = []
let sortFilm = []

elSelect.addEventListener("change", evt => {
    evt.preventDefault()
    let sortValue = evt.target.value
    
})


elSelect.addEventListener("change", evt => {
    evt.preventDefault()
    let sortValue = evt.target.value
    
    if(sortValue == "a-z"){
        films.sort((a, b) => {
            const nameA = a.Title.toUpperCase()
            const nameB = b.Title.toUpperCase()
            if (nameA > nameB){
                return 1
            } else if (nameA < nameB){
                return -1
            } else{
                return 0
            }
        })
        renderFunct(films, elList)
    } else if (sortValue == "z-a"){
        films.sort((a, b) => {
            const nameA = b.Title.toUpperCase()
            const nameB = a.Title.toUpperCase()
            if (nameA > nameB){
                return 1
            } else if (nameA < nameB){
                return -1
            } else{
                return 0
            }
        })
        renderFunct(films, elList)
    }
})


function renderFunct(array, element) {
    element.innerHTML = null
    array.forEach(film => {
        let newLi = creatEl("li");
        let newImg = creatEl("img");
        let newH2 = creatEl("h2");
        let newP = creatEl("p");
        let newBtn = creatEl("button");
        
        setAtt(newLi, "class", "flex flex-col items-center justify-and gap-2 rounded-lg pb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ")
        setAtt(newImg, "src", film.Poster)
        setAtt(newImg, "style", "object-fit: cover")
        setAtt(newH2, "class", "capitalize font-bold text-lime-300 font-x text-2xl text-center w-4/5 h-10 mb-7")
        setAtt(newP, "class", "text-lg text-black font-semibold m-3")
        setAtt(newBtn, "class", "py-1 px-4 h-9 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75")
        setAtt(newBtn, "type", "button")
        
        newH2.textContent = film.Title;
        newP.textContent = film.Year;
        newBtn.textContent = "Show More";
        
        newLi.append(newImg, newH2, newP, newBtn);
        elList.append(newLi)
    });
}


renderFunct(films, elList)


function sortGenr(array) {
    array.forEach(film => {
        film.genres.forEach((genre)=>
        arrGenr.includes(genre) ? null : arrGenr.push(genre));
    })
}

sortGenr(films)


function oppGenre(array) {
    array.forEach(film=> {
        let newOpt=creatEl("option")
        newOpt.textContent = film;
        elGenre.append(newOpt)
    });
}

oppGenre(arrGenr)


elBtn.addEventListener("submit", (evt)=> {
    box.innerHTML = ""
})