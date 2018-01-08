$(document).ready(function(){
    $('a').click(function () {
        $('#icons').hide();
        
        var href = $(this).attr('href');
        console.log(href)
console.log('been clicked')
if(href === '/wish.html'){
    $('.choosy, .jumbotron #icons' ).hide()

console.log('this worked')
$(".working").show()
const $signs = ['aries', 'cancer', 'leo', 'virgo', 'aquarius', 'gemini', 'sagittarius', 'taurus', 'scorpio', 'pisces', 'libra', 'capricorn']
const $secretWish = ['To be number one', 'To take care of friends and family', 'To rule the world', 'To Be A Hero', 'To experience total freedom', 'To have all the answers', 'To make the rules', 'To have complete and total control', 'To Find unconditional Love', 'To love and be loved in return', 'To have every need taken care of']
const $signButtons = []
console.log($signs, 'this is signs array')
$signs.forEach(sign =>{
    let signButton = $('<button>').text(`${sign}`).attr('class', 'working').addClass('btn btn-primary ').addClass(`${sign}`);
    $signButtons.push(signButton);
    console.log('new button created?', $(signButton))
signButton.appendTo('.popped')


});
    console.log($signButtons, "FINAL ARRAY")

href = $(this).attr('href', '#')

    $signButtons.forEach(function(sign){
        console.log(sign ,' this is sign in the each loop')
        // for each button in the array create a click function
        sign.click(function(){
            console.log(sign[0].textContent + ' has been clicked')
        })
    })
} else {

        // do animation

$('.choosy').hide()
        
$('.jumbotron').hide();
// have some kind of snow fall or some shit happen in the time between this and the page changing
        $('.qitem').fadeOut(400, function () {
            // go to link when animation completes
            
            window.location = href;
            

        })
    }

        // over ride browser following link when clicked
        return false;
    });




});