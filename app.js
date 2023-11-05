const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const searchBar = document.querySelector('#searchbar input');

const resultContainer = document.querySelector('#resultcontainer');

resultContainer.addEventListener('mouseover', (e) =>{ //mouseover event listener for result highlight
    if(e.target.classList.contains('result')){
        e.target.classList.add('mouseover');
    }
});

resultContainer.addEventListener('mouseout', (e) =>{ //mouseout event listener for no highlight
    if(e.target.classList.contains('result')){
        e.target.classList.remove('mouseover');
    }
});

resultContainer.addEventListener('click', (e) => { //click event listener for input population
    if(e.target.classList.contains('result')){
        searchBar.value = e.target.textContent;
    }
});

function deletePreviousResults(){ //delete previous search results prior to new set of results
    const allResults = document.querySelectorAll('.result')
    allResults.forEach((result) => (result.remove()));
}

function displayResults(results){ //update the UI with search results
    for(let i = 0; i < results.length; i++){
        const result = document.createElement("div");
        result.innerText = results[i][0].toUpperCase() + results[i].slice(1);
        result.classList.add('result');
        resultContainer.append(result);
    }
}

function search(){ //searches fruit list to create a properly sized-result array
    deletePreviousResults();
    if(searchBar.value === ''){
        return;
    }
    const searchContents = searchBar.value.toLowerCase();
    const results = fruit.filter((val) =>{
        return val.toLowerCase().includes(searchContents);
    }).slice(0,5);
    displayResults(results);
}

searchBar.addEventListener('input', (e) => { //calls search() on searchBar input
   search();
})