console.log("hindustan times js connected.")
// console.log("javaScript is connected.");
// bcd9b116cc3e4c4db6b83a23568c2c58 api key

let newaccordian = document.getElementById('newsaccordian');



const xhr = new XMLHttpRequest();
xhr.open('get', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bcd9b116cc3e4c4db6b83a23568c2c58`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles)
        console.log(json)

        let newshtml = "";
        articles.forEach((element, index) => {

            console.log(element["news"])
            let news = `
            <div class="accordion container" id="newsaccordian">
                <div class="accordion-item mx-3 my-1">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                          <b>Breaking news ${index + 1}:<h5> ${element.title} </h5>
                        </button>
                    </h2>
                </div>
                    <div id="collapse${index}" class="accordion-collapse collapse container" aria-labelledby="heading${index}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${element.content}. <a href=${element.url} target="_blank">Read more here.</a>
                        </div>
                    </div>
            </div>`;
            newshtml += news;
        });
        newaccordian.innerHTML = newshtml;
    } else {
        console.error("some error occured")
    }

}

xhr.send();

function displayTime() {
    time = new Date();
    // console.log(time);
    document.getElementById('date').innerHTML = time;
}
setInterval(displayTime, 1000);
