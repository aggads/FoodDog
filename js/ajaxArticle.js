   var lifestyle =document.getElementById("title_lifestyle").innerHTML;
   var nutrition =document.getElementById("title_nutrition").innerHTML;
   var community =document.getElementById("title_community").innerHTML;
   var wellness =document.getElementById("title_wellness").innerHTML;
   console.log(lifestyle);

   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);

           for (let i in article.docs) {
               var output = '';
               var teste = article.docs[i].tagForArticle
               console.log(teste)
               for(let a in teste){

               if (teste[a] === 'community' && community===community) {
                var arr= teste[a]
                   console.log(arr)
               

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
   }
   xhr.send();

