
/* Array*/

let elementsHTML = [];

let divGeneral = document.createElement("div");


let select = document.createElement("select");
let optionOne = document.createElement("option");
optionOne.textContent = "Popularity (descendente)";
optionOne.value = "pupularity.desc";
select.appendChild(optionOne);

let select = document.createElement("select");
let optionTwo = document.createElement("option");
optionTwo.textContent = "Promedio de votos (descendente)";
optionTwo.value = "vote_average.desc";
select.appendChild(optionTwo);

select.onchange = () => {
    makeImages(divGeneral);
};

makeImages(divGeneral);



let year = document.createElement("select");
let option01 = document.createElement("option");
option01.textContent = "Popularity (descendente)";

select.onchange = (year) => {
    for(let i = 1900, i< 2022,i++) {
        console.log(i)
    }
    makeImages(divGeneral);
};

document.body.appendChild(divGeneral);
document.body.appendChild(select);


