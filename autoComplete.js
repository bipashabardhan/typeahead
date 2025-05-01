let availableKeywords = [
    "The sky is blue",
    "I love codings",
    "This is a pens",
    "She likes pizzas",
    "It is raining today",
    "Its a testing sentence",
    "Lets see if i can do it",
    "Patience is what i need to have the most",
    "This is a static list",
    "I will have to integrate it with some api"
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keywords)=>
            keywords.toLowerCase().includes(input.toLowerCase())
        );
        display(result);
    } else {
        resultBox.innerHTML = '';
    }
    
}

function display(result) {

    if(result.length) {
        let content = result.map((listData)=>{
            return "<li onclick=selectInput(this)>"+ listData+ "</li>"
        }).join('');
    
        resultBox.innerHTML = "<ul>"+content+"</ul>";
        resultBox.style.overflowY = "auto";
    } else {
        resultBox.innerHTML = "<ul><li>No matching data</li></ul>";
        resultBox.style.overflowY = "hidden";
    }
    
}

function selectInput(data) {
    inputBox.value = data.innerHTML;
    resultBox.innerHTML = '';
}