   var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://foodog.herokuapp.com/articles', true);
 xhr.onload = function() {
      if(this.status == 200){
      var article = JSON.parse(this.responseText);
   //console.log(article.docs[0].title);

 var output = '';
 
    
      for(let i in article.docs){
        //console.log(article.docs[i]);
        output +=
        ` <article id="First_Article">
        <img  src="${article.docs[i].imgUrl}" />
        <div class="column">
        <div class="circle"></div>
        <p class="topic">LIFESTYLE<span>|</span></p>
        <h2 class="sub_Title"> ${article.docs[i].title}</h2>
        <p class="resume"> ${article.docs[i].text}</p>
        <section class="share_">
       <div class="share_arrow"> <a href="#"><i class="fas fa-share"></i></a></div><span>SHARE</span>
       </section>
      </div>
      </article>
      <hr>
        `

      }
      document.getElementById('all_Articles').innerHTML = output;
  }
 }
  xhr.send();    
