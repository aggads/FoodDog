//console.log(articleLoop._id)

   
   var xhr = new XMLHttpRequest();
     var url = new URLSearchParams(window.location.search); 
     let id=url.get('id'); 
    // console.log(id," ",window.location.search)
      //console.log(id)
    
   xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
   xhr.onload = function() {
       if (this.status == 200) {
           var article = JSON.parse(this.responseText);
           var footer= '';
           var teste='';
           //console.log(article.docs[0].title);

           for (let i in article.docs) {
               var output = '';
                teste = article.docs[i].tagForArticle
              // console.log(teste)
              //console.log(article.docs[i]._id)
    

               if (id === article.docs[i]._id) {
                //console.log("its working")
                


                   output +=
                       `
          <p id="nutrition">${article.docs[i].tagForArticle}</p><br/><br/><br/>
      <h1 id="hide">${article.docs[i].title}</span></h1>
      <img alt="image" src="${article.docs[i].imgUrl}" id="image_Dog" >
      <br/>
      <br/>
      <section id="comment">
        <hr class="hide" size="1">
        <div id="flex">
          <div class="" id="Circle_Text"></div>
          <p class="" id="farmer_dog">by:THE FARMER'S DOG  |</p>
          <div class="" id="btn_Comment"><i class="fas fa-comment"></i><span>COMMENT</span></div>
          <p class="" id="share_Text">SHARE</p>
          <section  class="" id="social_network">
            <div id="facebook_comment"><i class="fab fa-facebook-f"></i></div>
            <div id="twitter_comment"><i class="fab fa-twitter"></i></div>
            <div id="pinterest_comment"><i class="fab fa-pinterest"></i></div>
          </section>
        </div>
        <hr size="1">
         <div id="text_articule">
         <p class="resume"> ${article.docs[i].text}</p>
        </div>
        </section>
      <section id="subscribe">
        <div id="section_share" >
          <p>SHARE</p>
          <button id="count_comment">0 COMMENT</button>
          <button id="btn_share_facebook"><i class="fab fa-facebook-f"></i>SHARE</button>
          <button id="btn_share_tweet"><i class="fab fa-twitter"></i> TWEET</button>
          <button id="btn_share_pinterest"><i class="fab fa-pinterest"></i> PIN IT</button>
        </div>
        <h2 class="hide" id="subscribe_sub">Subscribe to The Digest Newletter</h2>
        <p class="hide" id="sub_title_section_share">Get health and wellness tips about your dog delivered to your inbox</p>
        <form class="hide" id="sign_up">
          <input id="sign_up_input" type="email" placeholder="Your email">
          <button>SIGN UP</button><hr size="1">
          <p id="previous">< PREVIOUS ARTICLE </p>
          <h3 id="Superfoods">SUPERFOODS IN YOUR KITCHEN: PUMPKINGS FOR <br/>DOGS</h3><hr size="1">
        </form>
        <br/>
      </section>
       <section class="hide"  id="info">
        <div id="Circle_Text2"></div>
        <h4 id="info_Title">The Farmer's Dog</h4>
        <p id="info_text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen. </p>
      </section>
      <section id=Might_Like>
        <p>YOU MIGHT ALSO LIKE</p><hr/ size="1">
        <div id="Migth_Like_Row">
          <article id="Might_Like_First_Article">
            <img  alt="Might Like Third Article"  src="${article.docs[1].imgUrl}"/>
            <p>SUPERFOODS IN YOUT KITCHEN:<br/>PUMPKINS FOR DOGS</p>
          </article>
          <article id="Might_Like_Second_Article">
            <img  alt="Might Like Third Article"  src="${article.docs[2].imgUrl}"/>
            <p>THE TRUTH ABOUT TABLE SCRAPS<br/>FOR DOGS</p>
          </article>
          <article id="Might_Like_Third_Article">
            <img  alt="Might Like Third Article"  src="${article.docs[3].imgUrl}"/>
            <p>SUPERFOODS IN YOUR KITCHEN:<br/>APPLE CIDER VINEGAR FOR</p>
          </article>
        </div>
      </section>
      <section id="leave_comment" class="hide1">
        <h3>LEAVE A REPONSE</h3>
        <form>
          <textarea name="msg" placeholder="Whrite your comment here" id="msg"></textarea>
          <input name="name" type="texte" placeholder="Name..." id="name">
          <input name="email" type="texte" placeholder="Email..." id="email">
          <input name="website" type="texte" placeholder="Website..." id="website"><br/>
          <button>LEAVE A COMMENT</button>
        </form>
      </section>
      <section class="Might_like hide">
        <p>YOU MIGHT ALSO LIKE</p><hr/ size="1">
        <div id="Migth_Like_Row">
          <article id="Might_Like_First_Article">
            <img alt="Might Like Third Article"  src="http://digest.thefarmersdog.com/wp-content/uploads/2017/09/360x250x,40butterandwilson-help-rescues-360x250.jpg.pagespeed.ic.35t8dQ23Ei.webp"/>
            <p>${article.docs[i].title}</p>
          </article>
          <article id="Might_Like_Second_Article">
            <img alt="Might Like Third Article"  src="http://digest.thefarmersdog.com/wp-content/uploads/2017/09/360x250x,40butterandwilson-help-rescues-360x250.jpg.pagespeed.ic.35t8dQ23Ei.webp"/>
            <p>${article.docs[i].title}</p>
          </article>
          <article id="Might_Like_Third_Article">
            <img alt="Might Like Third Article" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/09/360x250x,40butterandwilson-help-rescues-360x250.jpg.pagespeed.ic.35t8dQ23Ei.webp"/>
            <p>${article.docs[i].title}</p>
          </article>
        </div>
      </section>
      <section id="leave_comment" class="hide">
        <h3>LEAVE A REPONSE</h3>
        <form>
           <label for="msg"></label>
          <textarea name="msg" placeholder="Whrite your comment here" id="msg"></textarea>
           <label for="name"></label>
          <input name="name" type="texte" placeholder="Name..." id="name">
           <label for="email"></label>
          <input name="email" type="texte" placeholder="Email..." id="email">
           <label for="website"></label>
          <input name="website" type="texte" placeholder="Website..." id="website"><br/>
          <button>LEAVE A COMMENT</button>
        </form>
      </section>
      
    </article>
        `
        document.getElementById('article_nutrition').innerHTML = output;


                

               }else{
                //console.log("its not working")
               }

           }


       }



       /*footer += `
           <div class="row s12"  id="First_Block">
     <div class="col s12 m5 l5 red" id="first_col">
        <aside id="categories">
        <div >
          <h3 id="title_footer">CATEGORIES</h3>
        </div>
        <ul>
          <li><a name="community" href="community.html">Community</a></li><hr size="1">
          <li><a name="Featured" href="#">Featured</a></li><hr size="1">
          <li><a name="lifestyle" href="lifestyle.html">Lifestyle</a></li><hr size="1">
          <li><a name="nutrition" href="nutrition.html">Nutrition</a></li><hr size="1">
          <li><a name="wellness" href="wellness.html">Wellness</a></li>
      </aside>
     </div>
    <div class="col s12 m2 l2 " id="Second_Block">
             <aside id="popular_posts">
        <div >
          <h3 class="title_footer">POPULAR POSTS</h3>
        </div>
          <article id= "first_Article">
            <img  alt="first_Article"  src="${article.docs[1].imgUrl}">
             <a name="title" href="#"><h3 id="title_First_Article">${article.docs[1].title}</a> </h3>
          </article>
          <article id="second_Article">
            <img  alt="second_article" src="${article.docs[2].imgUrl}">
              <a name="title" href="#"><h3 id="title_Second_Article">${article.docs[2].title}</a></h3>
          </article>
          <article id="third_Article">
            <img alt="third_article"  src="${article.docs[3].imgUrl}">
             <a name="title" href="#"><h3 id="title_Third_Article">${article.docs[1].title}</a></h3>
          </article>
          </div>
          <div class="col s12 m2 l2" id="third_col">
      <aside id="instagram_pic">
        <div >
          <h3 class="title_footer">Instagram</h3>
        </div>
        <section id="instagram_Pictures">
         <img alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
        <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
         <img  alt="instagram" src="http://digest.thefarmersdog.com/wp-content/uploads/2017/02/110x85x,40lifeofvi-vomit-110x85.jpg.pagespeed.ic.sQ8UPNT-C_@2x.webp">
        </section>
      </aside>
    </div>
   </div>
   <div class="row s12">
   <section id="Social_Network" class="col s12 m5 l5" >
    <a href="#" name="facebook" class="hide" ><div class="hide" id="facebook"><i class="fab fa-facebook-f" ></i></div></a>
    <a href="#" name="twitter" class="hide"><div   id="twitter"><i class="fab fa-twitter"></i></div></a>
    <a href="#" name="instagram" class="hide"><div   id="instagram"><i id="insta" class="fab fa-instagram"></i></div></a>
    <a href="#top" name="up"><div id="up"><i class="fas fa-sort-up"></i></div></a>
    <h1>Copyright © 2018 Foodog</h1>
   </section>
 </div>

        `
        document.getElementById('footer').innerHTML = footer;*/
   }


   xhr.send();

