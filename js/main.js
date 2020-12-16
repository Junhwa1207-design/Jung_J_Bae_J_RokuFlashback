import { fetchData} from "./modules/TheDataMiner.js";
import { SendMail } from "./modules/mailer.js";
import channelACard from "./modules/channelACard.js";
import channelKCard from "./modules/channelKCard.js";



const myVM =(()=> {
    let vue_vm = new Vue ({

        data: {
            // message: "MINICOOPER EVENT!",
            // anotherMessage: "Find your 3 Doors Mini.",
            removeAformat: true,
            showBioData: false,
            channelA: [ ],
            channelK: [ ],
            currentMovieChannelAData:{},
            currentMovieChannelKData:{}
        },
        mounted: function(){
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
            .then(data => {
            data.forEach(channelA => this.channelA.push(channelA));
            })
            .catch(err => console.error(err));
     },
         mounted: function(){
        console.log("Vue is mounted, trying a fetch for the initial data");

        fetchData("./includes/index.php")
        .then(data => {
        data.forEach(channelK => this.channelK.push(channelK));
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
        },

        showMovieData (target) {
 
            console.log('clicked to view movieChannelA bio-data', target, target.name);
            this.showBioData = this.showBioData ? false : true;
        
            this. currentMovieChannelKData = target;
        }
    },
        components: {
            "channela-card" : channelACard,  
            "channelk-card" : channelKCard  
        }
    }).$mount("#app");
})();




(() =>{
    var slides=document.querySelector('.slider-items').children;
    var nextSlide=document.querySelector(".right-slide");
    var prevSlide=document.querySelector(".left-slide");
    var totalSlides=slides.length;
    var index=0;
   var i=slides;

    nextSlide.onclick=function (){
        console.log("click");
        next("next");
    }
    prevSlide.onclick=function(){
       console.log("click");
       next("prev");
   }

   function next(direction){

       if(direction=="next"){
           index++;
           if(index==totalSlides){
               index=0;
           }
       }
       else{
           if(index==0){
               index=totalSlides-1;
           }
           else{
               index--;
           }
       }

      for(i=0; i<slides.length;i++){
          slides[i].classList.remove("active");
      }
      slides[index].classList.add ("active");
   
}

let mailSubmit = document.querySelector('.submit-wrapper');

   function processMailFailure(result) {
       //console.table(result)
       alert(result.message);
   }

   function processMailSuccess(result) {
     
alert(result.message);
}

   function processMail(event) {

       event.preventDefault();

       SendMail(this.parentNode)
           .then(data => processMailSuccess(data))
           .catch(err => processMailFailure(err));

         
   }

   mailSubmit.addEventListener("click", processMail);

})();



  










