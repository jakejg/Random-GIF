
const form = document.querySelector('form')
const search = document.querySelector('#search')
const row = document.querySelector('.row')

form.addEventListener('submit', e => {
e.preventDefault();
getGify(search.value)
search.value = ""
})

async function getGify(search){
const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {api_key:"4EgGAYqbRvW88AishbuvZ0rOjdBbN66r", q: search, limit: 1}})

createContainer(search)
addGif(response)
}

function createContainer(search){
    const newCol = document.createElement('div')
        newCol.classList.add('col', 'm-2')
        newCol.id = `${search}`
        row.append(newCol)
}

function addGif(response){
    
    const newImage = document.createElement('img')
        newImage.src = response.data.data[0].images.fixed_width.url
    const col = row.lastElementChild
        col.append(newImage)
}

const remove = document.querySelector('#remove')
remove.addEventListener('click', () => {
  const test = Array.from(row.children)
  console.log(test)
   for (let div of test){
       console.log(div)
       div.remove();
   }
})