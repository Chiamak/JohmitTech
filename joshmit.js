const arr =["TO INDIVIDUALS", "TO ENTERPRISES", "TO BUSINESSES"];
let i = 0;
function changeText(){
    setInterval(()=>{
        if(i < arr.length){
            txt.innerText = arr[i];
            i++
        }
        else{
            i = 0;
        }
    }, 3000)
}
changeText();

window.onscroll = () => {
    const nav = document.querySelector('nav');
    if(this.scrollY >= 5){
        nav.classList.add('black');
    }else {
        nav.classList.remove('black');
    };
}
const menu = document.querySelector('.menusee');
function showMenu() {
    if(menu.classList[1] !== "active"){
      menu.classList.add('active');  
    }else{
        menu.classList.remove('active');
    }
    
}