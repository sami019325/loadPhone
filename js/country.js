fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(countryData => displayData(countryData));



displayData = data => {
    const appendDiv = document.getElementById('append_div')
    data.forEach(allData => {
        const div = document.createElement('div');
        console.log(allData);
        div.innerHTML = `
        <div class="bg-gray-900 h-full text-white p-2 rounded-lg grid grid-cols-1 md:grid-cols-2 ">
            <img class="img-responsive w-full h-full" src="${allData.flags.png}" alt="" srcset="">
            <div class=" text-left p-2 w-full">
                <h1 class="font-bold text-3xl p-2">Country: ${allData.name.common}</h1>
                <h2 class="font-bold text-xl p-2">capital: ${allData.capital ? allData.capital : 'No Capital'}</h2>
                <a class="font-bold text-xl p-2 text-lime-200" href='${allData.maps.googleMaps}'
                    target="_blank">Location</a>
                    <button class="bg-lime-400 py-2 px-5 mt-2 hover:bg-lime-200 text-black font-bold rounded-full"
                    onclick="loadDetails('${allData.cca3}')">Dynamic
                    Details</button>
            </div>
       </div>
`
        appendDiv.appendChild(div);
    })
}

loadDetails = (cco) => {
    console.log("clicked", cco)
}