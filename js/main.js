
let news = document.getElementById('news');
let headline = document.getElementById('headline');
let randNum = Math.floor(Math.random() * 50) + 1;

axios.get('https://newsapi.org/v2/top-headlines?q=covid&apiKey=a58ea3296f104a31bee826abbb984ad8&country=ng').then((res) => {

    headline.style.background = `url('${res.data.articles[2].urlToImage}') no-repeat`

    headline.innerHTML = `<div class="col-md-6 px-0">
    <h1 class="display-4 font-italic">${res.data.articles[2].title}</h1>
    <p class="lead my-3">${res.data.articles[2].description}</p>
    <p class="lead mb-0"><a href="${res.data.articles[2].url}" class="text-white font-weight-bold">Continue reading...</a></p>
</div>`

    Object.values(res.data.articles).forEach((el) => {

        news.innerHTML += `<div class="col-md-6">
            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                    <strong class="d-inline-block mb-2 text-primary">${el.source.name}</strong>
                    <h5 class="mb-0">
                        <a class="text-dark" href="#">${el.title}</a>
                    </h5>
                    <div class="mb-1 text-muted">${el.publishedAt}</div>
                    <!--<p class="card-text mb-auto">${el.description}</p>-->
                    <a href="${el.url}">Continue reading</a>
                </div>
                <img class="card-img-right flex-auto d-none d-lg-block" src="${el.urlToImage}"
                    alt="Card image cap">
            </div>
        </div>`

    });
    console.log(res.data.articles);
});
