//on importe la librairie REACT
import React from 'react'
// on importe la librairie react-dom (permet d'afficher react sur la page)
import { createRoot } from 'react-dom/client'

import App from './App'




// on recupere la balise div#root de la page HTML
const root = document.querySelector('#root')

// Si il n'y a pas de balise root
if (!root) {
  // on leve l'erreur
  throw new Error("Echec..! il n'y a pas de balise root dans votre index.html")
}

// J'affiche l'element à l'ecran dans la balise
// div#root
createRoot(root).render(<App />)
