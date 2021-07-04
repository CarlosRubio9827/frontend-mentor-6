const addEventToMenu = ()=>{
    let listM = document.querySelectorAll('.card-info-item')
    listM.forEach(i => {
        i.addEventListener('click', showMenu)
    });
}

function showMenu(){

    
    
    let title = this.children[0];
    let icon = this.children[1];
    let description = this.children[2];
    
    if(this.children[0].classList.contains('card-info-title-active')){
        title.classList.remove("card-info-title-active")
        icon.classList.remove("card-info-arrow-active")
        description.classList.remove("card-info-description-active")
    }else{
        let listM = document.querySelectorAll('.card-info-item')
        listM.forEach(i => {
        let title1 = i.children[0];
        let icon1 = i.children[1];
        let description1 = i.children[2];
        if(title1.classList.contains('card-info-title-active') || icon1.classList.contains('card-info-arrow-active') || description1.classList.contains('card-info-description-active')){
            title1.classList.remove("card-info-title-active")
            icon1.classList.remove("card-info-arrow-active")
            description1.classList.remove("card-info-description-active")
        }
    });
        title.classList.add("card-info-title-active")
        icon.classList.add("card-info-arrow-active")
        description.classList.add("card-info-description-active")
    }
    

    
    
}

addEventToMenu()