
  if (document.URL.indexOf("index.html") >= 0){
    let header = document.querySelector(".header-grid-container");
    header.style.gridTemplateRows = "1fr" ;
    var myHr = document.createElement("hr");
    header.style.marginBottom = "2%";
   // header.style.borderBottom = "5px solid grey";
    header.classList.add("md-whiteframe-10dp");
  }


    function startTouch(ev) {
      // Process the event
    }
    function init() {
      /*image-flip">
              <span href="#" ontouchstart="this.classList.toggle('hover');"*/
      var el = document.querySelector("image-flip").classList.toggle('hover');
      el.ontouchstart = startTouch;
    }


    TweenMax.fromTo('#first',  2.5, {
      y: -100 // from state
    }, {
      y: 0 // to end state
    });
  
    //let firstDeux = document.querySelector(".clearfix");
    
    TweenMax.fromTo(".clearfix", 2.5, {
      y: -200 // from state
    }, {
      y: 0 // to end state
    });
    
    TweenMax.fromTo((".secondPart"), 2.5, {
          y: -300 // from state
        }, {
          y: 0 // to end state
        });
          
    
        
  
    

      
    
      
 
    

    TweenMax.fromTo(".image-flip", 2.5, {
      x: -200 // from state
    }, {
      x: 0 // to end state
    });
    