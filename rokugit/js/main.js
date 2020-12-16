import { fetchData} from "./modules/TheDataMiner.js";
import { SendMail } from "./modules/mail/mailer.js";
import channelACard from "./modules/channelACard.js";

//import movieChannelACard from "./modules/header.js";


const myVM =(()=> {
    let vue_vm = new Vue ({

        data: {
            // message: "MINICOOPER EVENT!",
            // anotherMessage: "Find your 3 Doors Mini.",
            removeAformat: true,
            showBioData: false,
            channelA: [ ],
            currentMovieChannelAData:{}
            
        },
        mounted: function(){
            //console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
            .then(data => {
            data.forEach(channelA => this.channelA.push(channelA));
            })
            .catch(err => console.error(err));
     },


     methods:{
        logclicked(){
            console.log("clicked on a list item")
        },
        clickHeader() {
            console.log("clicked on the header");
        },

        showMovieData (target) {
 
            console.log('clicked to view movieChannelA bio-data', target, target.name);
      
            this.showBioData = this.showBioData ? false : true;

            this. currentMovieChannelAData = target;
        }

    },
        components: {
            "channela-card" : channelACard       
        }
    }).$mount("#app");




//     var slides=document.querySelector('.slider-items').children;
//      var nextSlide=document.querySelector(".right-slide");
//      var prevSlide=document.querySelector(".left-slide");
//      var totalSlides=slides.length;
//      var index=0;
//     var i=slides;

//      nextSlide.onclick=function (){
//          console.log("click");
//          next("next");
//      }
//      prevSlide.onclick=function(){
//         console.log("click");
//         next("prev");
//     }

//     function next(direction){

//         if(direction=="next"){
//             index++;
//             if(index==totalSlides){
//                 index=0;
//             }
//         }
//         else{
//             if(index==0){
//                 index=totalSlides-1;
//             }
//             else{
//                 index--;
//             }
//         }

//        for(i=0; i<slides.length;i++){
//            slides[i].classList.remove("active");
//        }
//        slides[index].classList.add ("active");
    
// }


// let mailSubmit = document.querySelector('.submit-wrapper');

//     function processMailFailure(result) {
//         // show a failure message in the UI
//         console.table(result); // table shows us an object in table form
//         alert(result.message);

//         // show some UI here to let the user know the mail attempt was successful
//     }

//     function processMailSuccess(result) {
//         // show a success message in the UI
//         console.table(result); // table shows us an object in table form
//         alert(result.message);

//         // show some UI here to let the user know the mail attempt was successful
//     }

//     function processMail(event) {
//         // block the default submit behaviour
//         event.preventDefault();

//         // use the SendMail component to try to process mail
//         SendMail(this.parentNode)
//             .then(data => processMailSuccess(data))
//             .catch(err => processMailFailure(err));

//             // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
//     }

//     mailSubmit.addEventListener("click", processMail);

})();








