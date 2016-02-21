$(document).ready(function() {
    console.log("ready!");
    
    // bobify all paragraphs under all 'bob' divs
    $('div.bob p').addClass('bobify');
    
    // Anything with a class of capture-mouseover, do something when we mouseover
    $('.capture-mouseover').on('mouseover', function() {
        console.debug('mouseover');
        $(this).addClass('highlight');
    });
    
    $('.capture-mouseover').on('mouseleave', function() {
        console.debug('mouseleave');
        $(this).removeClass('highlight');
    });
});