const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const input = document.querySelector('input#searchByID');
        fetchData(input); 
    })
}; 

function fetchData(input) {
    return fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => updateHTML(data));
};

function updateHTML(data) {
    document.querySelector('h4').textContent = data.title; 
    document.querySelector('p').textContent = data.summary; 
}; 


document.addEventListener('DOMContentLoaded', init);

