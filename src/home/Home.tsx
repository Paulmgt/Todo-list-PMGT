import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../shared/BottomNav'
import TopNav from '../shared/TopNav'

export default function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    const registeredUser = localStorage.getItem('user')
    if (!registeredUser) {
      navigate('/connection')
    }
  })

  return (
    <>
      <TopNav />
      <p>
        <Link to="liste/826278390"> Todo Liste </Link>
      </p>
      <BottomNav />
    </>
  )
}
