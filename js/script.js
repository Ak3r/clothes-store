let showForm = (id) => {
    let el = document.getElementById(id);
    el.style.display === "none" ? el.style.display = "block" : el.style.display = "none";
}

let showSubCategory = () => {
    let el = document.getElementById('sub-category');
    let icon = document.getElementsByClassName('change-icon');

    if (el.style.display === "none") {
        el.style.display = "block"
        icon[0].className = icon[0].className.replace("fa-plus","fa-minus");
    } else {
        el.style.display = "none"
        icon[0].className = icon[0].className.replace("fa-minus","fa-plus");
    }
    
}

$(function(){
    $('.products-list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

    // $('.insta-posts').slick({
    //     slidesToShow: 5,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             centerMode: true,
    //             centerPadding: '0',
    //             slidesToShow:3,
    //             slidesToScroll:1
    //         }
    //     }]
    // })

    // $('.famous-users').slick({
    //     slidesToShow: 4,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             centerMode: true,
    //             centerPadding: '0',
    //             slidesToShow:3,
    //             slidesToScroll:1
    //         }
    //     }]
    // })
})

    