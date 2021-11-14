const gallery = document.querySelector(".gallery");
const burger = document.getElementById("burger")
const nav = document.getElementById("nav")
// images
const weddings = ["images/weddings/wedding1.jpeg","images/weddings/wedding2.jpeg","images/weddings/wedding3.jpeg","images/weddings/wedding4.jpeg","images/weddings/wedding5.jpeg","images/weddings/wedding7.jpeg","images/weddings/wedding8.jpeg"]
const portraits = ["images/portraits/portrait1.jpeg","images/portraits/portrait2.jpeg","images/portraits/portrait4.jpeg"]
let family = ["images/portraits/portrait3.jpeg"]
// btns
const weddingBtn = document.getElementById("weddingsBtn")
const portraitsBtn = document.getElementById("portraitsBtn")
const familyBtn = document.getElementById("familyBtn")
const allBtn = document.getElementById("allBtn")




function createGallery(weddings,portraits,family){
    clearGallery(gallery)
    if(weddings){
        for(let img of weddings){
        gallery.innerHTML += `<figure class="img-container">
            <img src="${img}" alt="img">
        </figure>`
        }
    }
    
    if(portraits){
        for(let img of portraits){
        gallery.innerHTML += `<figure class="img-container">
            <img src="${img}" alt="img">
        </figure>`
        }
    }

    if(family){
        for(let img of family){
        gallery.innerHTML += `<figure class="img-container">
            <img src="${img}" alt="img">
        </figure>`
        }
    }
}


function clearGallery(gallery){
    gallery.innerHTML = "";
}

document.body.addEventListener("click", (e)=>{
    console.log(e.target)
    if(e.target === weddingBtn){
        createGallery(weddings)
    } else if(e.target === portraitsBtn){
        createGallery(portraits)
    } else if(e.target === familyBtn){
        createGallery(family)
    } else if(e.target === allBtn){
        createGallery(weddings,portraits,family)
    } else if(e.target === burger){
        nav.classList.toggle("display")
    }
})

createGallery(weddings, portraits,family);