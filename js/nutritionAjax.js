
 let xhr = new XMLHttpRequest();
 let articleLoop = '';
let url = new URLSearchParams(window.location.search);
//console.log(url)
var  output = '';

url = url.get('id');
     //console.log(url);
    var id;

      

   xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
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
        <p class="topic">Nutrition<span>|</span></p>
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

              var teste=document.querySelectorAll(".sub_Title");

         teste.addEventListener('click',function () {
        alert("hello world")},false);

 

