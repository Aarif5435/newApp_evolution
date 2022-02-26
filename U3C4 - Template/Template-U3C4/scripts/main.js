async function apiCall(url) {


    //add api call logic here
    try{
        let res = await fetch(url);

        let data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err)
    }
   


}


function appendArticles(articles, main) {

    //add append logic here
    articles.map(elem =>{

        let div = document.createElement('div');
        div.id = "main_div";

        div.onclick = () =>{
            localStorage.setItem("article", JSON.stringify(elem));
            window.location.href = "news.html";
        }

        let image = document.createElement('img');
        image.src = elem.urlToImage;

        let div2 = document.createElement('div');


        let h2 = document.createElement('h2');
        h2.innerHTML = elem.title;

        let p = document.createElement('p');
        p.innerHTML = elem.content;

        div2.append(h2,p)

        div.append(image,div2)

        main.append(div);
    })

}

export { apiCall, appendArticles }