const helloButton= document.getElementById('hello-button');
const petlist = document.getElementById('pet-list');

const categories = 
{
    dogs: 
    {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },

    cats: 
    {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },

    mices:
    {
         button: document.getElementById('mices-link'),
         content: document.getElementById('mices')
    },
}

let doglist =
[
    {
        name: "Chihuahua",
        region: "Mexico",
        description: "A tiny noise dog"
    },
    {
        name: "Pug",
        region: "England",
        description: "A medium funny dog"
    },
    {
        name: "Husky",
        region: "Alaska",
        description: "A large mighty dog"
    },
    {
        name: "Shiba-Inu",
        region: "Japan",
        description: "A large cute doggy"
    },
];
let catlist =
[
    {
        name: "Eupean",
        region: "Spain",
        description: "A tiny cute buddy"
    },
    {
        name: "Asian",
        region: "Japan",
        description: "Very fast nig"
    },
    {
        name: "Brown",
        region: "Germany",
        description: "Mighty"
    },
    {
        name: "Nigger",
        region: "USA",
        description: "Nigger"
    },
];
let micelist =
[
    {
        name: "Hedgedog",
        region: "Unknown",
        description: "Spikes"
    },
    {
        name: "Nigster",
        region: "England",
        description: "very fastnigster"
    },
    {
        name: "Amoasfd",
        region: "Niggerland",
        description: "Der ist ein efsfa"
    },
    {
        name: "Nice",
        region: "Ostrich",
        description: "We don't know"
    },
];

categories.dogs.button.onclick = ()=>
{  
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        return;
    }

    doglist.forEach(dog =>
    {
        categories.dogs.content.innerHTML += `<li>${dog}
            <span>${dog.name}</span>
            <div>Region: ${dog.region}</div>
            <div>Description: ${dog.description}</div></li>`;
    }
);
}
categories.cats.button.onclick = ()=>
{  
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
        return;
    }
    
    catlist.forEach(cat =>
    {
        categories.cats.content.innerHTML += `<li>${cat}
            <span>${cat.name}</span>
            <div>Region: ${cat.region}</div>
            <div>Description: ${cat.description}</div></li>`;
    }
);
}
categories.mices.button.onclick = ()=>
{  
    if(categories.mices.content.innerHTML){
        categories.mices.content.innerHTML = '';
        return;
    }

    micelist.forEach(mice =>
    {
        categories.mices.content.innerHTML += `<li>${mice}
            <span>${mice.name}</span>
            <div>Region: ${mice.region}</div>
            <div>Description: ${mice.description}</div></li>`;
    }
    );
}
