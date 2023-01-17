var imAbout1=document.getElementById('img1')
var imAbout2=document.getElementById('img2')
imAbout1.style.zIndex="0";
imAbout2.style.zIndex="1";

function changeZIndex(){
    this.event.stopPropagation()
    if (imAbout1.style.zIndex > imAbout2.style.zIndex) {
        imAbout1.style.zIndex="0";
        imAbout2.style.zIndex="1";
        document.querySelector('#img2 img').style.transform="scale(1.5)"
        document.querySelector('#img1 img').style.transform="scale(1)"

    }else{
        imAbout1.style.zIndex="2";
        imAbout2.style.zIndex="0";
        document.querySelector('#img1 img').style.transform="scale(1.5)"
        document.querySelector('#img2 img').style.transform="scale(1)"
        
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
  function myFunction(e) {
    var elems = document.querySelectorAll(".activeL");
    [].forEach.call(elems, function(el) {
      el.classList.remove("activeL");
      el.classList.add("text-dark")
    });
    e.target.className = "activeL";
    e.target.style.color="#f25454"
  }

  window.addEventListener("load",()=>{
    var home =document.getElementById('homes')
    home.classList.add("activeL") ;
    home.style.color="#f25454" ;
    window.scrollTo(0,0)
   });
   
   window.addEventListener("scroll",()=>{
    var navbar=document.getElementsByClassName("navBaar")[0]
    if (document.body.scrollTop == 0) {
      navbar.style.backgroundColor="rgba(255, 255, 255 , .5)"
    } else {
      navbar.style.backgroundColor="#FFF"
    }
   })

  //  var date=new Date().toLocaleTimeString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   }).toString();
  //   let aa=[]
  //   aa.push(date)
  //  console.log(aa);