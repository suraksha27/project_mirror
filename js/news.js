function injectNews() {
  let newsHtml = "";
  news.articles.forEach(function (article) {
    if (article.title && article.description) {
      newsHtml += `<div class="carousel-item" style="text-align:center">
                    <h6>`+article.title+`</h6>
                    <em>`+article.description+`</em>
                   </div>`;
    }
  });
  let carosel=`<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" style="color:white;font-size:12">
                    <div class="carousel-item active" >
                        <h2 >Loading News...</h2>
                    </div>
                    `+newsHtml+`
                </div>
                </div>`;
  const newsContainer = document.querySelector("#fotter-container");
  newsContainer.innerHTML = carosel;
}

injectNews();