import React, { useState } from 'react'
import * as UI from '../shared/ui'
import uniqid from 'uniqid'

export type Todo = {
  id: string
  label: string
  done: boolean
}

// Exercices:
// *
// * 1. Afficher le contenu de l'état (state) « taskList »
// *    dans le JSX du composant en utilisant la méthode « map »
// *    dans les enfant du composant « UI.TodoListContainer »
// *
// *     ° Bonus : Afficher « Il n'y pas encore de taches » si la liste est vide
// *
// * 2. Lors du clique (onClick) sur le bouton + (« UI.InputIcon »),
// *    lancer une fonction "addTaskToList" qui :
// *    1. Ajoute l'état « task » à l'intérieur de notre tableaux « taskList »
// *    2. Vider l'état « task » (le rendre égale à une chaine de caractère vide)
// */

//exercice 2

//1.   Ajouter une foction "toggleTodo" qui ce lance lors du click (onClick) du composant
// "UI.Todo"
// Dans cette foction Todo, faire en sorte de modifier
// la proprieter Done du todo et mettre à jour la liste (faire un "map" sur la (taskList))

// 2.  Ajouter une foction "removeTodo" du todo, faire en sorte de supprimer
// le todo et mettre à jour la liste (faire un "filter" sur la "taskList")

export type Task = string

export type TaskList = Array<Todo>

// IMMUTABILTE.................

export default function TodoList() {
  const [task, setTask] = useState<string>('')

  const [taskList, setTaskList] = useState<Array<Todo>>([])
  //.................................................

  const OnTaskChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    // console.log('valeur de Task : ' + task)

    setTask(event.currentTarget.value)

    // console.log('changement...')
    // console.log(event.currentTarget.value)
  }

  const addTaskToList = () => {
    if (!task) {
      return
    }

    const todo: Todo = {
      id: uniqid(),
      done: false,
      label: task,
    }

    const newList: TaskList = [todo, ...taskList]

    setTaskList(newList)
  }

  const toggleTodo = (todo: Todo) => () => {
    const newList: TaskList = taskList.map(t => {
      if (t.id !== todo.id) {
        return t
      }
      return {
        ...t,
        done: !t.done,
      }
    })
    setTaskList(newList)
  }

  const removeTodo = (todo: Todo) => (e: React.SyntheticEvent<HTMLElement>) => {
    e.stopPropagation()
    const newList: TaskList = taskList.filter(t => {
      if (t.id !== todo.id) {
        return true
      }
      return false
    })
    setTaskList(newList)
  }

  return (
    <UI.AppContainer>
      <UI.TopNav>
        <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        <UI.TopNavTitle>Petites Courses</UI.TopNavTitle>
      </UI.TopNav>

      <UI.CenteredFlexContainer>
        <UI.Tag>
          <UI.TagIcon className="fa-solid fa-user"></UI.TagIcon>
          <UI.TagLabelContainer>
            <UI.TagLabelEntitled>Par</UI.TagLabelEntitled>
            <UI.TagLabel>John</UI.TagLabel>
          </UI.TagLabelContainer>
        </UI.Tag>
      </UI.CenteredFlexContainer>

      <UI.StretchFlexContainer>
        <UI.InputContainer>
          <UI.Input placeholder="votre todo ..." onChange={OnTaskChange} />
          <UI.InputIcon
            className="fa-solid fa-circle-plus"
            onClick={addTaskToList}
          />
        </UI.InputContainer>
      </UI.StretchFlexContainer>

      <UI.TodoListContainer>
        {taskList.length > 0 ? (
          taskList.map(todo => (
            <UI.Todo
              key={`todo${todo.id}`}
              done={todo.done}
              onClick={toggleTodo(todo)}
            >
              <UI.TodoLabel>{todo.label}</UI.TodoLabel>
              <UI.TodoIcon
                className="fa-solid fa-trash"
                onClick={removeTodo(todo)}
              ></UI.TodoIcon>
            </UI.Todo>
          ))
        ) : (
          <p>Vous n'avez pas encore de taches</p>
        )}
      </UI.TodoListContainer>

      <UI.BottomNav>
        <UI.BottomNavAction>
          <UI.BottomNavShare>
            <i className="fa-solid fa-share"></i>
          </UI.BottomNavShare>
          <UI.BottomNavDelete>
            <i className="fa-solid fa-trash"></i>
          </UI.BottomNavDelete>
        </UI.BottomNavAction>

        <UI.BottomNavMenu>
          <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
          <UI.BottomNavItem className="fa-solid fa-user"></UI.BottomNavItem>
        </UI.BottomNavMenu>
      </UI.BottomNav>
    </UI.AppContainer>
  )
}
