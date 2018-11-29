
  var xhr = new XMLHttpRequest();
  var url = new URLSearchParams(window.location.search);
   url = url.get('id');
  var id;
    function takeId(){
      console.log(id)
       window.location.href =  'singlePage.html?' +'id='+this.id ;
    }
     xhr.open('GET', 'https://foodog.herokuapp.com/articles?page=${numberForPage}', true);
   //xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
           for(let t in article.docs){


           id=article.docs[t]._id;
            for (let i in article) {
              var wellness = '';
              var lifestyle = '';
              var nutrition = '';
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
                     </div>
                      </div>
                     </div>
                    


               `

   

               document.getElementById('articleAjaxFeatured').innerHTML = lifestyle;
              }else if(pickTag=='nutrition'){
                 nutrition +=
                 `
                  <div class=" col-sm-6 col-md-6 ">

                  <div class="image-flip">

                    <div class="mainflip">
                      <div class="frontside">
                        <div class="card  ">
                          <div class="card-body text-center">
                            <p><a name="singlepage" class="block" href="singlePage.html">
                                <img class=" img-fluid" src="${articleLoop[ii].imgUrl}" alt="card image"></a></p>
                            <h4 class="card-title SeCardTitle">NUTRITION</h4>
                            <h5 class="card-title SeCardTitle5">${articleLoop[ii].title}</h5>
                            <p class="card-text SeCardText">Consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut
                              labore et
                              dolore magna aliqua. </p>

                          </div>
                        </div>
                      </div>
                      <div class="backside">
                        <div class="card">
                          <div class="card-body text-center mt-4">
                            <h4 class="card-title"><a name="nutrition" href="nutrition.html">NUTRITION</a></h4>
                            <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut
                              labore et
                              dolore magna aliqua.</p>
                            <ul class="list-inline">
                              <li class="list-inline-item text-xs-center">
                                <a name="social-icon" aria-label="social icon" class="social-icon text-xs-center" target="_blank" href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a name="social-icon" aria-label="social icon" class="social-icon text-xs-center" target="_blank" href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>

                              <li class="list-inline-item">
                                <a name="social-icon" aria-label="social icon" class="social-icon text-xs-center" target="_blank" href="#">
                                  <i class="fab fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>









                 `
                 document.getElementById('thirSectionNutrition').innerHTML = nutrition;
              }
            
              }
               
              }
              
             /*  footer += `
           <aside id="popular_posts">
              <article id="first_Article">
                <h3 class="title_footer" id="popular_post">POPULAR POSTS</h3>
                <img alt="img" src="${articleLoop[1].imgUrl}">
                <a name="title" href="#">
                  <h3 id="title_First_Article"> 5 Reasons Your Dog is <br />Vomiting</</h3>
                </a>
              </article>
              <article id="second_Article">
                <img alt="img" src="${articleLoop[2].imgUrl}">
                <a name="title" href="#">
                  <h3 id="title_Second_Article">Top 14 Fresh Snacks for Dogs</</h3>
                </a>
              </article>
              <article id="third_Article">
                <img alt="img" src="${articleLoop[3].imgUrl}">
                <a name="title_footer" href="#">
                  <h3 id="title_Third_Article">Why Skinny Dogs Live Longer</h3>
                </a>
              </article>
            </aside>

        `
        document.getElementById('Second_Block').innerHTML = footer;*/

             

            }
             
          }

         }
       }

function changePage(obj){
    //alert(obj.textContent);
    numberForPage=obj.textContent;
    console.log(numberForPage)


    xhr.open('GET', 'https://foodog.herokuapp.com/articles?page=${numberForPage}', true);

    xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
           for(let t in article.docs){


           id=article.docs[t]._id;
            for (let i in article) {
              var wellness = '';
              var lifestyle = '';
              var nutrition = '';
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
                     </div>
                      </div>
                     </div>
                    


               `

   

               document.getElementById('articleAjaxFeatured').innerHTML = lifestyle;
              }else if(pickTag=='nutrition'){
                 nutrition +=
                 `
                  <div class=" col-sm-6 col-md-6 ">

                  <div class="image-flip">

                    <div class="mainflip">
                      <div class="frontside">
                        <div class="card  ">
                          <div class="card-body text-center">
                            <p><a name="singlepage" class="block" href="singlePage.html">
                                <img class=" img-fluid" src="${articleLoop[ii].imgUrl}" alt="card image"></a></p>
                            <h4 class="card-title SeCardTitle">NUTRITION</h4>
                            <h5 class="card-title SeCardTitle5">${articleLoop[ii].title}</h5>
                            <p class="card-text SeCardText">Consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut
                              labore et
                              dolore magna aliqua. </p>

                          </div>
                        </div>
                      </div>
                      <div class="backside">
                        <div class="card">
                          <div class="card-body text-center mt-4">
                            <h4 class="card-title"><a name="nutrition" href="nutrition.html">NUTRITION</a></h4>
                            <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut
                              labore et
                              dolore magna aliqua.</p>
                            <ul class="list-inline">
                              <li class="list-inline-item text-xs-center">
                                <a name="social-icon" aria-label="social icon" class="social-icon text-xs-center" target="_blank" href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a name="social-icon" aria-label="social icon" class="social-icon text-xs-center" target="_blank" href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>

                              <li class="list-inline-item">
                                <a name="social-icon" aria-label="social icon" class="social-icon text-xs-center" target="_blank" href="#">
                                  <i class="fab fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>









                 `
                 document.getElementById('thirSectionNutrition').innerHTML = nutrition;
              }
            
              }
               
              }
            /*  footer += `
           <aside id="popular_posts">
              <article id="first_Article">
                <h3 class="title_footer" id="popular_post">POPULAR POSTS</h3>
                <img alt="img" src="${articleLoop[1].imgUrl}">
                <a name="title" href="#">
                  <h3 id="title_First_Article"> 5 Reasons Your Dog is <br />Vomiting</</h3>
                </a>
              </article>
              <article id="second_Article">
                <img alt="img" src="${articleLoop[2].imgUrl}">
                <a name="title" href="#">
                  <h3 id="title_Second_Article">Top 14 Fresh Snacks for Dogs</</h3>
                </a>
              </article>
              <article id="third_Article">
                <img alt="img" src="${articleLoop[3].imgUrl}">
                <a name="title_footer" href="#">
                  <h3 id="title_Third_Article">Why Skinny Dogs Live Longer</h3>
                </a>
              </article>
            </aside>

        `
        document.getElementById('Second_Block').innerHTML = footer;*/

             

            }
             
          }

         }
       }



xhr.send();
}

   xhr.send();

