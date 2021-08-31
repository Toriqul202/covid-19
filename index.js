const loadCountries=()=>{
    const search= document.getElementById('searchText')
    const searchValue=search.value
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${searchValue}`)
    .then(res=>res.json())
    .then(data=>getCountry(data))
}
function getCountry(country){
       const parentDiv=document.getElementById('div')
       parentDiv.textContent='';
        const div=document.createElement('div')
        div.innerHTML=`
       <h2 class="p-3 bg-primary border rounded">Today Case:${ country.todayCases}</h2>
       <h2 class="p-3 bg-warning">Today Deaths:${ country.todayDeaths}</h2>
       <h2 class="p-3 bg-danger">Total Case:${ country.cases}</h2>
       <h2 class="p-3 bg-danger">Total Deaths:${ country.deaths}</h2>
       `
       parentDiv.appendChild(div) 
       console.log(country) 
}