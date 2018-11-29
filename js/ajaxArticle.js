
function changePage(obj){
    //alert(obj.textContent);
    var numberForPage=obj.textContent;
    console.log(numberForPage)

   var xhr = new XMLHttpRequest();
   var url = new URLSearchParams(window.location.search); 
     url=url.get('id'); 
    var id;
    function takeId(){
      console.log(id)
       window.location.href =  'singlePage.html?' +'id='+this.id ;
   
   
   xhr.open('GET', 'https://foodog.herokuapp.com/articles?page=${numberForPage}', true);
   xhr.onload = function() {


   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
            for (let i in article) {
              var output = '';
              var articleLoop = article[i]
              //console.log(articleLoop)
            for(let ii in articleLoop){
              //console.log(articleLoop[ii].tagForArticle)
              var tags=articleLoop[ii].tagForArticle;
              for(let a=0;a<tags.length;a++){
                const pickTag=tags[a];
              if (pickTag=='lifestyle') {
                var arr= pickTag
                       output +=
                       ` <article class="Article all_Articles">
        <img alt="img" src="${articleLoop[ii].imgUrl}" width="500px" height="500px" />
        <div class="column">
        <div class="circle"></div>
        <p class="topic">LIFESTYLE<span>|</span></p>
        <h2 class="sub_Title"> ${articleLoop[ii].title}</h2>
        <p class="resume"> ${articleLoop[ii].text}</p>
        <section class="share_">
       <div class="share_arrow"> <a href="#" name="share"><i class="fas fa-share"></i></a></div><span>SHARE</span>
       </section>
      </div>
      </article>
      <hr>
        `
        document.getElementById('all_Articles').innerHTML = output;
                //console.log("its working")
                //console.log(arr)
              }//else{
                //console.log("is not working")
             // }
              }
            }
          }

         }
       }
/*
           for (let i in article.docs) {
               var output = '';
               var teste = article.docs[i].tagForArticle;
               console.log(teste)
               for(let a in teste){

                   var arr= teste[a]
                   console.log(arr)
                 for(let ii=0;ii<arr.length;i++){
            
                          // console.log(arr[i])

                   output +=
                       ` <article class="Article all_Articles">
        <img alt="img" src="${article.docs[i].imgUrl}" width="500px" height="500px" />
        <div class="column">
        <div class="circle"></div>
        <p class="topic">LIFESTYLE<span>|</span></p>
        <h2 class="sub_Title"> ${article.docs[i].title}</h2>
        <p class="resume"> ${article.docs[i].text}</p>
        <section class="share_">
       <div class="share_arrow"> <a href="#" name="share"><i class="fas fa-share"></i></a></div><span>SHARE</span>
       </section>
      </div>
      </article>
      <hr>
        `
        document.getElementById('all_Articles').innerHTML = output;
               
                }
               }   
           }
       }
   }*/
   xhr.send();

