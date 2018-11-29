var numberForPage=1;

  function changePage(obj){
    //alert(obj.textContent);
    numberForPage=obj.textContent;
    console.log(numberForPage)

   var xhr = new XMLHttpRequest();
   
   xhr.open('GET', 'https://foodog.herokuapp.com/articles?page=${numberForPage}', true);
   xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           //console.log(article.docs[0].title);
            for (let i in article) {
              var output = '';
              var footer= '';
              var articleLoop = article[i]
              //console.log(articleLoop)
            for(let ii in articleLoop){
              //console.log(articleLoop[ii].tagForArticle)
              var tags=articleLoop[ii].tagForArticle;
              for(let a=0;a<tags.length;a++){
                const pickTag=tags[a];
              if (pickTag=='nutrition') {
                var arr= pickTag
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


       
       
                //console.log("its working")
                //console.log(arr)
              }//else{
                //console.log("is not working")
             // }
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
    }

