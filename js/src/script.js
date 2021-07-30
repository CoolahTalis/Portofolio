// (function($) {

//     let variable; // portée de block
//     var variable2; // portée de fonction

//     //type de valeur d'une variable
//     string
//     integer
//     boolean
//     Object
//     Array

//     if(variable)// sans accolade le if n'accepte qu'une seule condition. et valide la suivante
    
//         console.log(variable); // ne sera pas affiché
//         console.log(variable2); // sera affiché

//     if(!variable) // sans accolade ne va appliquer
//     console.log('falsy : ' + variable);
//     console.log('falsy : + variable2');

//     falsy // peut être :

    // false
    // 0
    // ''
    // null
    // NaN
    // undefined

    // Operateur TERNAIRE
    // var value = !variable ? 'je suis un falsy' : 'je ne suis pas un falsy';

    // console.log('op ternaire : ' + value);


//         $('.btn').hover(function() {
//             $(this).siblings().fadeToggle(2000);
//             $('.btn').click(function(){

//             });
// })

// $('dd').hide();


// $(".submit").on('click', function() {
//     var value = $('#number').val();
//     var choice = $(this).attr("id");
    
//     let tableau = [];
//     for(var i=1; i<= value; i++) {
    //         if( i % 2 == 0 && choice == 'even') {
        //             tableau.push(i);
//         };
//     };
//     console.log(tableau);
//     $(".display_val").append('<div>' + value + '</div>');




//     console.log(value);
//     console.log(choice);
// });


// $('dt').on('click', function() {
//     $('dd').not($(this).nextUntil('dt')).slideUp(100);
//     $(this).nextUntil('dt').slideToggle(100);
// });



// $('.demo').radiate({
// distance: 200, // Distance from center element
// delay: 500, // delay between each element
// offset: -45, // offset in degree
// angle: 'auto', // return angle in degree for each element
// toggle:'#toggle' // jQuery selector to toggle show/hide
// });


// -------------------------------- Mouse Events --------------------------

// const mousePointeur = document.querySelector('.mousePointeur')

// window.addEventListener('mousemove', (e) => {
//     mousePointeur.style.left = e.pageX + 'px' 
//     mousePointeur.style.top = e.pageY + 'px'   
// })

// mousePointeur.addEventListener('mousedown', () => {
//     mousePointeur.style.transform = 'scale(2) translate(-25%, -25%)'
//     mousePointeur.style.transition = 'ease 0.2'
// })

// mousePointeur.addEventListener('mouseup', () => {
//     mousePointeur.style.transform = 'scale(1) translate(-50%, -50%)'
//     mousePointeur.style.transition = 'ease 0.2s'
// })



// -------------------------------- Page Up --------------------------

const pageUp = document.querySelector('.pageUp') 

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        pageUp.style.visibility = 'visible'
    }else {
        pageUp.style.visibility = 'hidden'
    }
})

const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        nav.style.position = 'fixed'
    }else {
        nav.style.position = ''
    }
})


// })(jQuery);