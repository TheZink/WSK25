'use strict';
let movie_list = [];
let ulList = document.getElementById("ul1");

function MovieRating() {

    const inputTimes = Number(prompt("How many times you want to rate?"));

    for (let i = 0; i < inputTimes; i++) {
        let inputTitle = prompt("Give a movie title");
        let inputRating = Number(prompt(`Give a rating to ${inputTitle}`));

        if (inputRating < 1) {
            inputRating = 1;
        } else if (inputRating > 5){
            inputRating = 5;
        }

        movie_list.push({title: inputTitle, rating:inputRating});
    }

    movie_list.sort((a,b) => b.rating - a.rating);

    console.log(movie_list)

    for (let k = 0; k < movie_list.length; k++){
        const list = document.createElement("li");
        list.textContent = movie_list[k].title + ": " + movie_list[k].rating;
        ulList.appendChild(list);
    }
}

MovieRating();

