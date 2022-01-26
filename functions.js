
/* Array*/

let elementsHTML = [];

let divGeneral = document.createElement("div");


let select = document.createElement("select");
let optionOne = document.createElement("option");
optionOne.textContent = "Popularity (descendente)";
optionOne.value = "pupularity.desc"
select.appendChild(optionOne);

let select = document.createElement("select");
let optionTwo = document.createElement("option");
optionTwo.textContent = "Popularity (descendente)";
optionTwo.value = "pupularity.desc"
select.appendChild(optionTwo);

select.onchange = () => {
    makeImages(divGeneral);
};

makeImages(divGeneral);



let year = document.createElement("select");
let option01 = document.createElement("option");
option01.textContent = "Popularity (as)"

select.onchange = (1900) => (2022) {
    makeImages(divGeneral);
};



