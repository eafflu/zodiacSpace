$(document).ready(function(){
$('.info').click(() => {
    $('.tron, .tapped').hide()

})
    $('a').click(function () {
        $('#icons .tron').hide();
        
        var href = $(this).attr('href');
        console.log(href)
console.log('been clicked')
if(href === '/wish.html'){
    $('.choosy, #icons' ).hide()

console.log('this worked')
$(".working").show()
const $signs = ['aries', 'cancer', 'leo', 'virgo', 'aquarius', 'gemini', 'sagittarius', 'taurus', 'scorpio', 'pisces', 'libra', 'capricorn']
const $secretWish = {
    aries: 'To be number one', 
    cancer:'To take care of friends and family',
    leo:'To rule the world',
     virgo: 'To Be A Hero',
     aquarius: 'To experience total freedom',
     gemini: 'To have all the answers', 
     sagittarius:'To make the rules', 
     scorpio:'To have complete and total control',
     pisces:'To Find unconditional Love', 
     taurus: ' To own the best of everything',
     libra:'To love and be loved in return', 
     capricorn:'To have every need taken care of'
    }
const $signButtons = []
console.log($signs, 'this is signs array')
$signs.forEach(sign =>{
    let signButton = $('<button>').text(`${sign}`).attr('class', 'working').addClass('btn btn-primary ').addClass(`${sign}`);
    $signButtons.push(signButton);
    console.log('new button created?', $(signButton))
signButton.appendTo('.popped')


});

href = $(this).attr('href', '#')

    $signButtons.forEach(function(sign){
        console.log(sign ,' this is sign in the each loop')
        
        // for each button in the array create a click function
        sign.click(function(){
            
                $('.tron').hide()
            
            $('.popped').empty()
            $('.popped').append($('<h1>').text($secretWish[sign[0].textContent])).addClass('secretText well')
        //    console.log($secretWish[sign[0].textContent])
        })
        
    })
} else {

        // do animation

$('.choosy').hide()
        
$('.jumbotron').hide();
// have some kind of snow fall or some shit happen in the time between this and the page changing
        $('.qitem').fadeOut(0, function () {
            // go to link when animation completes
            
            window.location = href;
            

        })
    }

        // over ride browser following link when clicked
        return false;
    });




});