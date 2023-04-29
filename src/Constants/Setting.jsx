export const  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:6,
    slidesToScroll: 3,
    responsive: [
       {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite:true,
            dots:true,
          },
        },
        {
            breakpoint:600,
            settings:{
                slidesToScroll:2,
                slidesToShow:2,
                initialSlide:2,

            }
        },
        {
            breakpoint:480,
            settings:{
                slidesToScroll:1,
                slidesToShow:1,
            }
        }
    ]
  };