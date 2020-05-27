
const PARAGRAPH = document.querySelector(".final-ideas");

const fetchAPIIdeas = ()=>{
    let PARTICIPANTS = document.querySelector(".participants").value;
    const URL_TO_API = `https://www.boredapi.com/api/activity?participants=${PARTICIPANTS}`;

    fetch(URL_TO_API)
    .then(response => response.json()) // retorna uma promise  
    .then(result => { 
        PARAGRAPH.innerHTML = result.activity;
        PARAGRAPH.style.display = "block";
    })
    .catch(err => { 
    // trata se alguma das promises falhar
        console.error('Failed retrieving information', err); 
        alert("Um erro ocorreu durante o processamento de sua solicitação.");
    });    
}