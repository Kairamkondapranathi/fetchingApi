fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9da497e0530c4fd6abffcdead497fd45")
.then((data)=>{
    //console.log(data);
    return data.json();

})
.then((completedata)=>{
    //console.log(completedata[0].title);
    let data1="";
    completedata.articles.map((values)=>{
        data1+=`<div class="api">
            <h1 class="author">${values.author}</h1>
            <h1 class="title">${values.title}</h1>
            <p>${values.description}</p>
            <link rel=${values.url} href="link">
            <img src=${values.urlToImage} alt="img" class="images" width="200" height="200">
            <p class="publishedAt">${values.publishedAt}</p>
            <p class="content">${values.content}</p>
        </div>`
    })

    document.getElementById("xyz").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})



