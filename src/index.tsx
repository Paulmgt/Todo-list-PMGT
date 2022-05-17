//on importe la librairie REACT
import React from 'react'
// on importe la librairie react-dom (permet d'afficher react sur la page)
import { createRoot } from 'react-dom/client'

// const name: string = 'John week'
// const id: string = 'ma-super-div'
// const age: number = 32

// // On cree un element react ( du JSX)
// const element = (
//   // fragmet <> </>
//   <>
//     {/* <h3> h3 apprrait avant la div grace au fragment</h3> */}
//     <div id={`${name}-${id}`} className="test">
//       <h1> Bonjour tout le monde </h1>
//       <p>Coucou {name}</p>
//     </div>
//   </>
// )

// const notes: Array<number> = [12, 15, 8, 9]
// const age2: number = 16

// const element2: JSX.Element = (
//   // fragmet <> </>
//   <>
//     <div>
//       <h1> Bonjour {name}</h1>
//       <h2>Vos Notes</h2>
//       <p>{age2 >= 18 ? 'Vous etes majeur' : 'Vous etes mineur'}</p>
//       <ul>
//         {notes.map((note, index) => (
//           <li key={`note-${index}`}>{note}/ 20</li>
//         ))}
//       </ul>
//     </div>
//   </>
// )

type ObjetProps = {
  name: string
  age?: string
}

// ...................Fonction structurer.........................

//  fontion (Hello) parametrer (props) : avec un objet (ObjetProps)
// function Hello(props: ObjetProps): JSX.Element {
//   return (
//     <p>
//       Hello Word{props.name}, vous avez {props.age} ans
//     </p>
//   )
// }

//............... Fonction Destructurer.......................

function Hello({ name, age = 'XX' }: ObjetProps): JSX.Element {
  return (
    <p>
      Hello {name}, vous avez {age} ans
    </p>
  )
}
type BigTextProps = {
  children: React.ReactNode
}
function BigText({ children }: BigTextProps): JSX.Element {
  return (
    <div className="gros-text">
      <h1>{children}</h1>
    </div>
  )
}

//  instentiation + affichage de la fonction Hello qui prend une balise perso <Hello>
const element = (
  <div>
    <BigText>
      Coucou
      <br />
      <span> nimporte quoi ..........odjdkz</span>
    </BigText>
    <Hello name="Jean" />
    <Hello name="Pierre" age="23" />
    <Hello name="Jeane" age="34" />
    <Hello name="Rosie" age="43" />
  </div>
)

// on recupere la balise div#root de la page HTML
const root = document.querySelector('#root')

// Si il n'y a pas de balise root
if (!root) {
  // on leve l'erreur
  throw new Error("Echec..! il n'y a pas de balise root dans votre index.html")
}

// J'affiche l'element à l'ecran dans la balise
// div#root
createRoot(root).render(element)
