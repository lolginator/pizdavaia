const card1 = document.querySelectorAll('.card-1');
const card2 = document.querySelectorAll('.card-2');
const card3 = document.querySelectorAll('.card-3');
let btn = document.querySelectorAll('.btn');



let btn_back = document.querySelector('.btn-back');
let btn_div = document.querySelectorAll('.slider__btn-back')


let slider__btn = document.querySelector('.slider__btn')

let count = 1;



btn[0].onclick = function nddame() {
    count += 1
    console.log('ONE' +  count)
if (count == 1) {
    card1[0].style.display = "block";
    card2[0].style.display = "none";
    card3[0].style.display = "none";




   slider__btn.style.cursor= 'pointer';
    btn[0].style.cursor= 'pointer';


}if (count == 2) {
    card2[0].style.display = "block";
    card1[0].style.display = "none";
    card3[0].style.display = "none";

    btn_div[0].style.cursor= "pointer";
    btn_back.style.cursor = "pointer"
    
    btn_back.removeAttribute('disabled')


}if(count == 3){
    card3[0].style.display = "block";
    card1[0].style.display = "none";
    card2[0].style.display = "none";



    slider__btn.style.cursor= 'not-allowed';
    btn[0].style.cursor= 'not-allowed';
    btn[0].setAttribute('disabled', true)
}
}



btn_div[0].addEventListener('click', function name() {
    count -= 1;
    console.log('TWo' +  count)
    if (count == 1) {
        card1[0].style.display = "block";
        card2[0].style.display = "none";
        card3[0].style.display = "none";
        btn_div[0].style.cursor= "not-allowed";
        btn_back.style.cursor = "not-allowed"
        btn_back.setAttribute('disabled', true)
    }
    if (count == 2) {
        card2[0].style.display = "block";
        card1[0].style.display = "none";
        card3[0].style.display = "none";


       
        slider__btn.style.cursor= 'pointer';
        btn[0].style.cursor= 'pointer';
        btn[0].removeAttribute('disabled')

    }if(count == 3){
        card3[0].style.display = "block";
        card1[0].style.display = "none";
        card2[0].style.display = "none";
    }
})
