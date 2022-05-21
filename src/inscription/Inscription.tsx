import * as UI from '../shared/ui'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../util/firebase'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inscription() {
  const [username, setUsername] = useState<string>('')
  const [email, setEamil] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!username) {
      setUsernameError('Champs obligatoire')
      return
    }
    if (username.length < 4) {
      setUsernameError('nom trop court')
      return
    }
    if (username.length > 20) {
      setUsernameError('nom trop long')
      return
    }
    setUsernameError('')
  }, [username])

  const OnChange =
    (setter: (v: string) => void) =>
    (e: React.SyntheticEvent<HTMLInputElement>) =>
      setter(e.currentTarget.value)
  const onSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault()

    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    await updateProfile(credential.user, {
      displayName: username,
    })

    localStorage.setItem('user', JSON.stringify(credential.user))

    navigate('/')
  }

  return (
    <>
      <h1> Inscription</h1>
      <UI.AppContainer as="form" onSubmit={onSubmit}>
        <UI.InputContainer>
          <UI.Input
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={OnChange(setUsername)}
            value={username}
          />
        </UI.InputContainer>
        <p>{usernameError}</p>
        <UI.InputContainer>
          <UI.Input
            name="email"
            placeholder="Email"
            onChange={OnChange(setEamil)}
            value={email}
          />
        </UI.InputContainer>
        <UI.InputContainer>
          <UI.Input
            name="password"
            placeholder="Mot de passe"
            onChange={OnChange(setPassword)}
            value={password}
          />
        </UI.InputContainer>
        <button type="submit">S'inscrire</button>
      </UI.AppContainer>
    </>
  )
}
