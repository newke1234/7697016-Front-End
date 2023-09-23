const reponse = await fetch("pieces-autos.json")
const pieces = await reponse.json()


for (let i = 0; i < pieces.length; i++) {

// Creation des elements et de leur contenu
const articleBalise = document.createElement('article')
const imageElement = document.createElement('img')
imageElement.src = pieces[i].image
const nomElement = document.createElement('h2')
nomElement.innerText = pieces[i].nom
const prixElement = document.createElement('p')
prixElement.innerText = `Prix : ${pieces[i].prix} € ${pieces[i].prix < 35 ? '€' : '€€€'}`
const categorieElement = document.createElement('p')
categorieElement.innerText = pieces[i].categorie ?? '(aucune catégorie)' 
const descriptionElement = document.createElement('p')
descriptionElement.innerText = pieces[i].description ?? '(pas de description pour le moment)'
const disponibiliteElement = document.createElement('p')
disponibiliteElement.innerText = pieces[i].disponibilite ? 'En stock' : 'Rupture de stock'

// rattachement des balises au DOM
const sectionFiches = document.querySelector('.fiches')
sectionFiches.appendChild(articleBalise)
articleBalise.appendChild(imageElement)
articleBalise.appendChild(nomElement)
articleBalise.appendChild(prixElement)
articleBalise.appendChild(categorieElement)
articleBalise.appendChild(descriptionElement)
articleBalise.appendChild(disponibiliteElement)

}