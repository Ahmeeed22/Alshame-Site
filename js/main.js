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
   var aboutOffset=document.getElementById("aboutUs").offsetHeight;
   console.log(aboutOffset);
   window.addEventListener("scroll",()=>{
    var navbar=document.getElementsByClassName("navBaar")[0]
    if (document.body.scrollTop >= aboutOffset) {
      navbar.style.backgroundColor="#FFF"
    } else {
      navbar.style.backgroundColor="rgba(255, 255, 255 , .5)"
    }
   })

   $(window).on('load',()=>{

    $("#spinner").css('display','none').css('zIndex','-111111111111').promise().done(function(){
      $('body').css('overflow-y', 'auto')
      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    })
   })

  //  var date=new Date().toLocaleTimeString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   }).toString();
  //   let aa=[]
  //   aa.push(date)
  //  console.log(aa);




  // Function to save the object recursively
  let arrr=[]
  let _id=1;
const saveObject = async (obj, parentId = null) => {
  
  const newObj = new ObjectModel({
    level: obj.level,
    titleFr: obj.titleFr,
    titleEn: obj.titleEn,
    sortId: obj.sortId,
    createdAt: obj.createdAt,
    updatedAt: obj.updatedAt,
    isGeneral: obj.isGeneral,
    id: obj.id,
    parentId: parentId,
  });
  // await newObj.save();

  if (obj.groups && obj.groups.length > 0) {
    for (const group of obj.groups) {
      await saveObject(group, newObj._id);
    }
  }

  if (obj.phraces && obj.phraces.length > 0) {
    for (const phrase of obj.phraces) {
      await saveObject(phrase, newObj._id);
    }
  }
};
let cc=  {
  "level": "category",
  "titleFr": "Motif de consultation",
  "titleEn": "Consultation reason",
  "sortId": 0,
  "createdAt": "2022-11-10T16:25:32.130Z",
  "updatedAt": "2023-07-03T06:51:28.357Z",
  "isGeneral": true,
  "id": "636d25fcd96056fe170005c4",
  "groups":
      [ 
        {
        "parentId": "636d25fcd96056fe170005c4",
        "level": "group",
        "colIndex": 2,
        "titleFr": "Pédiatrique",
        "titleEn": "Pediatric",
        "sortId": 1,
        "createdAt": "2022-11-10T16:31:18.912Z",
        "updatedAt": "2023-07-03T06:51:28.357Z",
        "isGeneral": true,
        "id": "636d2756d96056fe17000600",
        "phraces":[  {
                      "parentId": "636d2756d96056fe17000600",
                      "level": "sentence",
                      "titleFr": "Évaluation audiologique à la demande de l'école",
                      "titleEn": "Audiological exam requested by the school",
                      "sortId": 1,
                      "createdAt": "2022-11-10T16:31:57.534Z",
                      "updatedAt": "2023-07-03T06:51:28.357Z",
                      "isGeneral": true,
                      "id": "636d277dd96056fe17000610"
                    },
                    {
                      "parentId": "636d2756d96056fe17000600",
                      "level": "sentence",
                      "titleFr": "Retard de langage",
                      "titleEn": "Language delay",
                      "sortId": 4,
                      "createdAt": "2022-11-10T16:31:38.268Z",
                      "updatedAt": "2023-07-03T06:51:28.357Z",
                      "isGeneral": true,
                      "id": "636d276ad96056fe17000608"
                    },
                    {
                      "parentId": "636d2756d96056fe17000600",
                      "level": "sentence",
                      "titleFr": "Hx d'otites à répétition",
                      "titleEn": "Hx of repeated otitis",
                      "sortId": 5,
                      "createdAt": "2022-11-10T16:32:15.466Z",
                      "updatedAt": "2023-07-03T06:51:28.357Z",
                      "isGeneral": true,
                      "id": "636d278fd96056fe17000618"
                    },
                    {
                      "parentId": "636d2756d96056fe17000600",
                      "level": "sentence",
                      "titleFr": "À la demande des parents",
                      "titleEn": "Requested by the parents",
                      "sortId": 2,
                      "createdAt": "2022-11-10T16:32:06.440Z",
                      "updatedAt": "2023-07-03T06:51:28.357Z",
                      "isGeneral": true,
                      "id": "636d2786d96056fe17000614"
                    },
                    {
                      "parentId": "636d2756d96056fe17000600",
                      "level": "sentence",
                      "titleFr": "Dépistage néonatal",
                      "titleEn": "Neonatal screening",
                      "sortId": 0,
                      "createdAt": "2022-11-10T16:31:29.882Z",
                      "updatedAt": "2023-07-03T06:51:28.357Z",
                      "isGeneral": true,
                      "id": "636d2761d96056fe17000604"
                    },
                    {
                      "parentId": "636d2756d96056fe17000600",
                      "level": "sentence",
                      "titleFr": "Doute parentale sur l'audition",
                      "titleEn": "Parents concerned about hearing",
                      "sortId": 3,
                      "createdAt": "2022-11-10T16:31:46.894Z",
                      "updatedAt": "2023-07-03T06:51:28.357Z",
                      "isGeneral": true,
                      "id": "636d2772d96056fe1700060c"
                    }
                  ]
        }, 
        {
          "parentId": "636d25fcd96056fe170005c4",
          "level": "group",
          "colIndex": 1,
          "titleFr": "Suivi",
          "titleEn": "Follow-up",
          "sortId": 1,
          "createdAt": "2022-11-10T16:27:45.916Z",
          "updatedAt": "2023-07-03T06:51:28.357Z",
          "isGeneral": true,
          "id": "636d2681d96056fe170005e4",
          "phraces":[  
                      {
                        "parentId": "636d2681d96056fe170005e4",
                        "level": "sentence",
                        "titleFr": "Suivi pour acouphène droit / gauche",
                        "titleEn": "Right / Left tinnitus follow-up",
                        "sortId": 2,
                        "createdAt": "2022-11-10T16:29:28.845Z",
                        "updatedAt": "2023-07-03T06:51:28.357Z",
                        "isGeneral": true,
                        "id": "636d26e8d96056fe170005f4"
                      },
                      {
                        "parentId": "636d2681d96056fe170005e4",
                        "level": "sentence",
                        "titleFr": "Suivi pour Hx de liquide rétro-tympanique",
                        "titleEn": "Follow-up for known middle ear effusion",
                        "sortId": 5,
                        "createdAt": "2022-11-10T16:30:07.165Z",
                        "updatedAt": "2023-07-03T06:51:28.357Z",
                        "isGeneral": true,
                        "id": "636d270fd96056fe170005fc"
                      }
                        
                    ]
        },  {
            "parentId": "636d25fcd96056fe170005c4",
            "level": "group",
            "colIndex": 0,
            "titleFr": "Général",
            "titleEn": "General",
            "sortId": 1,
            "createdAt": "2022-11-10T16:26:04.844Z",
            "updatedAt": "2023-07-03T06:51:28.357Z",
            "isGeneral": true,
            "id": "636d261cd96056fe170005c8",
            "phraces":[  
                        {
                          "parentId": "636d261cd96056fe170005c8",
                          "level": "sentence",
                          "titleFr": "Hypoacousie subjective à l'oreille droite / gauche",
                          "titleEn": "Right / Left Subjective hearing loss",
                          "sortId": 2,
                          "createdAt": "2022-11-10T16:26:43.580Z",
                          "updatedAt": "2023-07-03T06:51:28.357Z",
                          "isGeneral": true,
                          "id": "636d2643d96056fe170005d4"
                        },
                        {
                          "parentId": "636d261cd96056fe170005c8",
                          "level": "sentence",
                          "titleFr": "À la demande de l'ORL",
                          "titleEn": "ENT request",
                          "sortId": 3,
                          "createdAt": "2022-11-10T16:27:23.750Z",
                          "updatedAt": "2023-07-03T06:51:28.357Z",
                          "isGeneral": true,
                          "id": "636d266bd96056fe170005e0"
                        }
                        
                    ]
        }
      ]
}

// Function to save the object recursively
const saveObjectnew = async (obj, parentId = null) => {
  const newObj = new ObjectModel({
    level: obj.level,
    titleFr: obj.titleFr,
    titleEn: obj.titleEn,
    sortId: obj.sortId,
    createdAt: obj.createdAt,
    updatedAt: obj.updatedAt,
    isGeneral: obj.isGeneral,
    id: obj.id,
    parentId: parentId,
  });

  await newObj.save();

  if (obj.groups && obj.groups.length > 0) {
    for (const group of obj.groups) {
      await saveObject(group, newObj._id);
    }
  }

  if (obj.phraces && obj.phraces.length > 0) {
    for (const phrase of obj.phraces) {
      const newPhrase = new ObjectModel({
        level: phrase.level,
        titleFr: phrase.titleFr,
        titleEn: phrase.titleEn,
        sortId: phrase.sortId,
        createdAt: phrase.createdAt,
        updatedAt: phrase.updatedAt,
        isGeneral: phrase.isGeneral,
        id: phrase.id,
        parentId: newObj._id,
      });
      await newPhrase.save();
    }
  }
};
