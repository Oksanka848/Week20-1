document.addEventListener('DOMContentLoaded', function() {
    getNews();
})
function getNews(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb02e7b20bd847c5aa804ae96453e40b')
.then(response => response.json())
.then(news => {
    console.log(news);
    document.getElementById('sourse').innerText = news.articles[0]['source']['name'];    
document.getElementById('title').innerText = news.articles[0].title;
document.getElementById('author').innerText = news.articles[0].author;
document.getElementById('publishedAt').innerText = news.articles[0].publishedAt;
document.getElementById('urlToImage').src = news.articles[0].urlToImage;
document.getElementById('content').innerText = news.articles[0].content;
document.getElementById('sourse4').innerText = news.articles[4]['source']['name'];    
document.getElementById('title4').innerText = news.articles[4].title;
document.getElementById('author4').innerText = news.articles[4].author;
document.getElementById('publishedAt4').innerText = news.articles[4].publishedAt;
document.getElementById('urlToImage4').src = news.articles[4].urlToImage;
document.getElementById('content4').innerText = news.articles[4].content;
document.getElementById('title10').innerText = news.articles[10].title;
document.getElementById('urlToImage10').src = news.articles[10].urlToImage;
document.getElementById('title8').innerText = news.articles[8].title;
document.getElementById('urlToImage8').src = news.articles[8].urlToImage;
document.getElementById('title11').innerText = news.articles[11].title;
document.getElementById('urlToImage11').src = news.articles[11].urlToImage;
})
.catch(error => (console.log(error)));
}
