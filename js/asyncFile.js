console.log('asying')



function fetchData() {
    fetch('https://randomuser/api/?gender=female')
        .then(Response => Response.json())
        .then(randomFemale => console.log(randomFemale.results[0]))
        .catch(error => console(error))



};



document.getElementById('btn').addEventListener('click', function () {
    console.log('asying-----------')
    fetchData()
});



const getData = async () => {
    const url = 'https://randomuser.me/api/?gender=female'

    try {
        const respns = await fetch(url);
        const data = await respns.json();
        console.log(data.results[0]);
    }
    catch (err) {
        console.log(err)
    }
}