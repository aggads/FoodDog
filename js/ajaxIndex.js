
   var xhr = new XMLHttpRequest();
   var url = new URLSearchParams(window.location.search); 
     url=url.get('id'); 
    var id;
    function takeId(){
      console.log(id)
       window.location.href =  'singlePage.html?' +'id='+this.id ;
    }

   xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
           for(let t in article.docs){


           id=article.docs[t]._id;
            for (let i in article) {
              var wellness = '';
              var lifestyle = '';
              var footer= '';
              var articleLoop = article[i]
              //console.log(articleLoop)
            for(let ii in articleLoop){
             // console.log(articleLoop[ii].tagForArticle)
              var tags=articleLoop[ii].tagForArticle;
              for(let a=0;a<tags.length;a++){
                const pickTag=tags[a];
              if (pickTag=='wellness') {
                var arr= pickTag;
                console.log(arr)
          
                      wellness +=
                       `  <div class="container-fluid">
            <div class="row">
              <div id="mobile_first" class="myCont  col-md-9 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div id="FirstArt" class="col-md-6 ">
                  <div id="divf">
                    <div>
                      <div id="first" class="card md-whiteframe-8dp unify">

                       
                          <img alt="card" id="photo" class="card-img-top center-block img-responsive block" src="${articleLoop[ii].imgUrl}" onclick="takeId()">
                        <div class="card-body ">
                          <h5 class="card-title text-center"><a name="wellness" href="wellness.html">WELLNESS</a></h5>
                          <p id="firsText" class="card-text text-center">${articleLoop[ii].title}</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="deuxArt" class="col-lg-6 col-md-8 col-sm-10 ">
                 <div class="card  col-lg-5 col-md-6">
                    <div class="clearfix  md-whiteframe-5dp hidden-xs visible-sm  cardSM">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid  col-sm-5" src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body  col-sm-5">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                        <p class="hide_mobile">${articleLoop[ii].text}</p>
                      </div>
                    </div>
                    <div class="clearfix md-whiteframe-5dp  hidden-sm">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img class="card-img-top img-fluid " src="${articleLoop[ii].imgUrl}" alt="Card image cap"></a>
                      <div class="card-body ">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                      </div>
                    </div>
                  </div>
                  <div class="card  col-lg-5 col-md-6">

                    <div class="clearfix  md-whiteframe-5dp hidden-xs visible-sm  cardSM">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid  col-sm-5" src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body  col-sm-5">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                        <p class="hide_mobile">${articleLoop[ii].text}</p>
                      </div>
                    </div>

                    <div class="clearfix md-whiteframe-5dp  hidden-sm">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid " src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body ">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                      </div>
                    </div>

                  </div>
                  <div class="card  col-lg-5 col-md-6">

                    <div class="clearfix  md-whiteframe-5dp hidden-xs visible-sm  cardSM">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid  col-sm-5" src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body  col-sm-5">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                        <p class="hide_mobile">${articleLoop[ii].text}.</p>
                      </div>
                    </div>

                    <div class="clearfix md-whiteframe-5dp  hidden-sm">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid " src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body ">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                      </div>
                    </div>

                  </div>


                  <div class="card  col-lg-5 col-md-6">

                    <div class="clearfix  md-whiteframe-5dp hidden-xs visible-sm  cardSM">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid  col-sm-5" src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body  col-sm-5">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                        <p class="hide_mobile">${articleLoop[ii].text}</p>
                      </div>
                    </div>

                    <div class="clearfix md-whiteframe-5dp  hidden-sm">
                      <a name="singlepage" class="block" href="singlePage.html">
                        <img alt="card" class="card-img-top img-fluid " src="${articleLoop[ii].imgUrl}"></a>
                      <div class="card-body ">
                        <p class="card-text text-left cardText">${articleLoop[ii].title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        `
         document.getElementById('firstSect').innerHTML = wellness;

              }else if(pickTag=='lifestyle') {

               lifestyle+=
               `
                <div class="container-fluid">
            <div class="row">
              <div class=" col-md-6 col-md-offset-2  col-sm-10 col-sm-offset-1">

                <div class="">
                  <h5 class="text-divider col-md-12"><span>FEATURED POSTS</span></h5>
                </div>
              </div>
              <div class="row">
                <div class=" col-md-6 col-md-offset-2  col-sm-10 col-sm-offset-1">

                  <div class=" mySecond  ">
                    <div id="cont">
                      <div class="card secondPart  md-whiteframe-8dp">
                        <div class="row ">
                          <div class="col-md-5 ">
                            <a name="single" class="block" href="singlePage.html">
                              <img src="${articleLoop[ii].imgUrl}" alt="image-dog"></a>
                          </div>
                          <div class="col-md-5   art">
                            <div class="card-block ">
                              <h4 class="card-title SeCardTitle"><a name="nutrition" href="nutrition.html">FEATURED
                                  NUTRITION</a></h4>
                              <h5 class="card-title text-left SeCardTitle5">${articleLoop[ii].title}</h5>
                              <p class="card-text SeCardText">${articleLoop[ii].text}</p>
                              <a name="share" href="#" class="share"><i class="fas fa-share"></i>SHARE </a>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="divid">
                        <div class="text-divider "></div>
                      </div>

                      <div class="card secondPart md-whiteframe-8dp">
                        <div class="row ">
                          <div class="col-md-5 ">
                            <a name="single" class="block" href="singlePage.html">
                              <img src="${articleLoop[ii].imgUrl}" alt="image-dog"></a>
                          </div>
                          <div class="col-md-5   art">
                            <div class="card-block ">
                              <h4 class="card-title SeCardTitle"><a name="nutrition" href="nutrition.html">FEATURED
                                  NUTRITION</a></h4>
                              <h5 class="card-title text-left SeCardTitle5">${articleLoop[ii].title}</h5>
                              <p class="card-text SeCardText">${articleLoop[ii].text}</p>
                              <a name="share" href="#" class="share"><i class="fas fa-share"></i>SHARE </a>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="divid">
                        <div class="text-divider "></div>
                      </div>

                      <div class="card secondPart md-whiteframe-8dp">
                        <div class="row ">
                          <div class="col-md-5 ">
                            <a name="singlepage" class="block" href="singlePage.html">
                              <img src="${articleLoop[ii].imgUrl}" alt="image-dog"></a>
                          </div>
                          <div class="col-md-5   art">
                            <div class="card-block ">
                              <h4 class="card-title SeCardTitle"><a name="nutrition" href="nutrition.html">FEATURED
                                  NUTRITION</a></h4>
                              <h5 class="card-title text-left SeCardTitle5">${articleLoop[ii].title}</h5>
                              <p class="card-text SeCardText">${articleLoop[ii].text}</p>
                              <a name="share" href="#" class="share"><i class="fas fa-share"></i>SHARE </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <aside id="aside" class="col-md-3 clearfix visible-lg">
                  <div class="col-lg-10 ">

                    <a name="btn" class="btn btn-block btn-social btn-facebook" onclick="_gaq.push(['_trackEvent', 'btn-social', 'click', 'btn-facebook']);">
                      <span class=" fab fa-facebook-f"></span><span>21562 Fans</span><span style="float:right;">LIKE</span>
                    </a>
                    <a name="twitter" class="btn btn-block btn-social btn-twitter" onclick="_gaq.push(['_trackEvent', 'btn-social', 'click', 'btn-twitter']);">
                      <span class="fab fa-twitter"></span> <span>1401 Followers</span><span style="float:right;">FOLLOW</span>
                    </a>
                    <a name="instagram" class="btn btn-block btn-social btn-instagram" onclick="_gaq.push(['_trackEvent', 'btn-social', 'click', 'btn-instagram']);">
                      <span class="fab fa-instagram"></span><span>23538 Followers</span><span style="float:right;">FOLLOW</span>
                    </a>

                  </div>
                </aside>
              </div>
            </div>
          </div>


               `

   

               document.getElementById('secondSect').innerHTML = lifestyle;
              }
            
              }
               
              }
             

            }
             
          }

         }
       }
   xhr.send();

