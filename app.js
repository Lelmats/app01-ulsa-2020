const helloButton= document.getElementById('hello-button');
const petlist = document.getElementById('pet-list');

const categories = 
{
    dogs: {
    button: document.getElementById('dogs-link'),
    content: document.getElementById('dogs')
    },
    cats: document.getElementById('cats'),
    mices: document.getElementById('mices')
}

let doglist =
[
    {
        name: "chihuahua",
        region: "mexico",
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
    'Europeo',
    'Español',
    'Persa',
    'Egipcio',
    'Negro'
];

let micelist =
[
    'Hedgeod',
    'Nigger',
    'Mice',
    'Masddsf',
    'Nastynig'
];

categories.dogs.button.onclick = ()=>{  
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        return;
    }
  
    doglist.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>${dog}
            <span>${dog.name}</span>
            <div>Region: ${dog.region}</div>
            <div>Description: ${dog.description}</div>
        </li>`;
    });

    catlist.forEach(cat =>
    {
        categories.cats.innerHTML += `<li>${cat}</li>`;
    });

    micelist.forEach(mice =>
    {
        categories.mices.innerHTML += `<li>${mice}</li>`;
    });
}
