$(document).ready(function(){
    $('a').click(function () {
        var href = $(this).attr('href');
        console.log(href)
console.log('been clicked')
if(href === '/wish.html'){
console.log('this worked')
$(".popped").toggle()
const $signs = ['aries', 'cancer', 'leo', 'virgo', 'aquarius', 'gemini', 'sagittarius', 'taurus', 'scorpio', 'leo', 'pisces', 'libra']
console.log($signs, 'this is signs array')
$signs.forEach(sign =>{
    let signButton = $('<button>').text(`${sign}`);
    console.log('new button created?', $(signButton))

    signButton.appendTo('.popped')

});

} else {


        // do animation
$('.jumbotron').hide();
// have some kind of snow fall or some shit happen in the time between this and the page changing
        $('.qitem').fadeOut(400, function () {
            // go to link when animation completes
            
            window.location = href;
            

        })
    }

        // over ride browser following link when clicked
        return false;
    })


});