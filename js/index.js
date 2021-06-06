$(document).ready(function(){
    $('.single-item').slick({
        prevArrow: '<button class="slide-arrow prev-arrow">\n' +
            '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#cccccc"\n' +
            '                     class="bi bi-chevron-compact-left" viewBox="0 0 16 16">\n' +
            '                    <path fill-rule="evenodd"\n' +
            '                          d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>\n' +
            '                </svg>\n' +
            '            </button>',
        nextArrow: '<button class="slide-arrow next-arrow">\n' +
            '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#cccccc"\n' +
            '                     class="bi bi-chevron-compact-right" viewBox="0 0 16 16">\n' +
            '                    <path fill-rule="evenodd"\n' +
            '                          d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>\n' +
            '                </svg>\n' +
            '            </button>'
    });
    $('.burger-icon').click(function(event) {
        $('.burger-icon').toggleClass('active');
    })
});
