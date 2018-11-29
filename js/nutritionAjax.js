
 var xhr = new XMLHttpRequest();
 var articleLoop = '';
 var url = new URLSearchParams(window.location.search);
 url = url.get('id');
 var  output = '';
 var footer = '';
 var id;  
 let ii;  

 function teste(obj){
  //id=obj._id;
  console.log(articleLoop[ii].url)
                      console.log(id)
                    }
   xhr.open('GET', 'https://foodog.herokuapp.com/articles?page=${numberForPage}', true);

   //xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   //var targetSinglePage = document.getElementsByClassName("sub_Title"); 
//var targetSinglePage = document.getElementsByTagName("img");
  //targetSinglePage.addEventListener("click",function(){console.log(id)})
 // targetSinglePage.onclick =function(){console.log(id)};
  //targetSinglePage.addEventListener("click",function(){console.log(id)})
   xhr.onload = function() {

       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
  
            for (let i in article) {
              //console.log(article[i])
              articleLoop= article[i]
           
            for(let ii in articleLoop){
              var target=articleLoop[ii]
                //console.log(articleLoop[ii].tagForArticle)
                var tags = articleLoop[ii].tagForArticle;


                for(let a=0;a<tags.length;a++){
                      var pickTag=tags[a];
                 if (pickTag == 'nutrition') {
                   console.log(articleLoop[ii]._id)
                   id=articleLoop[ii]._id;
                    
              output +=
               ` <article class="Article all_Articles">
        <img alt="img" src="${articleLoop[ii].imgUrl}" width="500px" height="500px" onclick="teste(this)"/>
        <div class="column">
        <div class="circle"></div>
        <p class="topic">NUTRITION<span>|</span></p>
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
       }

       }



              }
               footer += `
             <aside id="popular_posts">
        
        <div >
          <h3 class="title_footer">POPULAR POSTS</h3>
        </div>
          <article id= "first_Article">
            <img src="${articleLoop[1].imgUrl}">
            <h3 id="title_First_Article"> <a href="#">5 Reasons Your Dog is Vomiting</a> </h3>
          </article>
          <article id="second_Article">
            <img src="${articleLoop[2].imgUrl}">
             <h3 id="title_Second_Article"> <a href="#">Top 14 Fresh Snacks for Dogs</a></h3>
          </article>
          <article id="third_Article">
            <img src="${articleLoop[3].imgUrl}">
            <h3 id="title_Third_Article"> <a href="#">Why Skinny Dogs Live Longer</a></h3>
          </article>
      </aside>

        `
        document.getElementById('Second_Block').innerHTML = footer;

              
               }


          
         }



       }


function changePage(obj){
    //alert(obj.textContent);
    numberForPage=obj.textContent;
    console.log(numberForPage)


    xhr.open('GET', 'https://foodog.herokuapp.com/articles?page=${numberForPage}', true);
   //xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   xhr.onload = function() {

       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
  
            for (let i in article) {
              //console.log(article[i])
              articleLoop= article[i]
           
            for(let ii in articleLoop){
                //console.log(articleLoop[ii].tagForArticle)
                var tags = articleLoop[ii].tagForArticle;


                for(let a=0;a<tags.length;a++){
                      var pickTag=tags[a];
                 if (pickTag == 'nutrition') {
                  // console.log(articleLoop[ii]._id)
                   id=articleLoop[ii]._id;
              
              output +=
               ` <article class="Article all_Articles">
        <img alt="img" src="${articleLoop[ii].imgUrl}" width="500px" height="500px" />
        <div class="column">
        <div class="circle"></div>
        <p class="topic">NUTRITION<span>|</span></p>
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
       }
       }


              }
           

               }     
         }


       }
       xhr.send();

    }

  xhr.send();
//var targetSinglePage = document.getElementsByClassName("sub_Title"); 
//var targetSinglePage = document.getElementsByTagName("img");

 // targetSinglePage.onclick =function(){console.log(id)};
  //targetSinglePage.addEventListener("click",function(){console.log(id)})
       /* 
        document.getElements
         teste.addEventListener('click',function () {
          console.log(id)
        alert("hello world")},false);*/

 

