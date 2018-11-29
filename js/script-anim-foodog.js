
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
    TweenMax.to("h2.title", 1, {opacity:0.3});
    TweenMax.to(".box", 3, {x:300});
    TweenMax.to(".green", 3, {rotation:360, scale:0.5})
    TweenMax.from("#logo", 3, {x:300, opacity:0, scale:0.5});
    TweenMax.to("#logo", 1, {x:100, onComplete:tweenComplete});
    
    function tweenComplete() {
      console.log("the tween is complete");
    }
    //create a reference to the animation
    var tween = TweenMax.to("#logo", 1, {x:100});
    
    //pause
    tween.pause();
    
    //resume (honors direction - reversed or not)
    tween.resume();
    
    //reverse (always goes back towards the beginning)
    tween.reverse();
    
    //jump to exactly 0.5 seconds into the tween
    tween.seek(0.5);
    
    //jump to exacty 1/4th into the tween's progress:
    tween.progress(0.25);
    
    //make the tween go half-speed
    tween.timeScale(0.5);
    
    //make the tween go double-speed
    tween.timeScale(2);
    
    //immediately kill the tween and make it eligible for garbage collection
    tween.kill();
    var tween = TweenMax.to(".orange", 1, {x:100});
    console.log(tween.duration()); //shows 1
    tween.duration(2) //sets the duration to 2 seconds
    
    var timeline = new TimelineMax();
    timeline.to(".green", 5, {x:200})
      .to(".orange", 5, {x:200, scale:0.2});
    //the timeline contains 2 tweens that are both 5 seconds long
    console.log(timeline.duration()) //shows 10
    timeline.duration(2) //sets the duration to only 2 seconds. For timelines, that actually alters the timeScale to make it play within that duration
    //TweenLite.to("#first", 2.5, { ease: Power2.easeNone, y: -500 });
    //TweenLite.to("#first", 2, { ease: "hop", scale:1.5, rotation:30 });
    //var photo = document.getElementById("#photo");
    //TweenMax.to(photo, 2, {width:"200px", height:"150px"});
    //TweenLite.to("#first", 1, {x:0, ease:Elastic.easeOut.config(1.8, 0.4)});
    //.to(".blue", 1, {x:500});
    //TweenLite.to("#first", 2.5, { ease: Power2.easeOut, x: -500 });
   /* var tween = TweenLite.to("#first", 2, {
      x: -50,
      ease: Power1.easeInOut,
      delay: 2,
      onStart:6,
      
     });*/