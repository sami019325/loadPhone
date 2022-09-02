// console.log("jascri")
const getDta = (search) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
        .then(response => response.json())
        .then(data => showData(data.data));
}


const container = document.getElementById('Phone-containter');

const showData = (GottenData) => {
    phoneList = GottenData.slice(0, 12)
    console.log("phone list", phoneList)

    phoneList.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
      <div class="bg-slate-50 h-full rounded-md m-3 p-5">
        <img class="m-auto mb-4" src="${phone.image}" alt="" srcset="">
       <h1 class=" text-center font-bold text-2xl">${phone.phone_name}</h1>
       <p class="text-md text-center mt-4">It is a nice and log-term useable phone for you and your family members. Buy is from out official website with discount</p>
</div>
      `
        container.appendChild(phoneDiv)
    }
    )
    showLoading(false)

    if (phoneList == 0) {
        document.getElementById('noPhoneFound').style.display = 'block';
    }
    else {
        document.getElementById('noPhoneFound').style.display = 'none';

    }
}


getDta('iphone');

const findtext = () => {
    container.innerHTML = '';
    const enteredValue = document.getElementById('input_bar').value;
    getDta(enteredValue)
}

const activeSearch = () => {
    showLoading(true)
    findtext()

}


addEventListener('keyup', (event) => {
    if (event.code == 'Enter') {
        findtext()
    };
});


const showLoading = (signal) => {
    const loader = document.getElementById('loading')
    console.log('loading', signal);

    if (signal) {
        loader.classList.remove('hidden');
        document.getElementById('noPhoneFound').style.display = 'none';
    }
    else {
        loader.classList.add('hidden');
    }
}

