import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUsers, toggleCurrentUser } from '../../store/userSlice/userSlice'
import "../Login/Login.css"
import { useEffect } from 'react'
import { fetchUsers } from '../../store/userSlice/usersAPI'
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser, usersData } = useSelector(selectUsers)
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const { login: { value: login }, password: { value: password } } = formRef.current
    dispatch(toggleCurrentUser({ login, password }))
    formRef.current.reset()
    // console.log(usersData.map(user=>(user.username))
  }

  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers())
    }
  }, [])

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      navigate('/home')
    }
  }, [currentUser])

  return (
    <div className='container-login'>
      <div className='leftLog'>
        <img src='https://www.psicomodena.it/wp-content/uploads/2021/01/Facebook-Logo-no-space-1200.png' alt='facebook' />
        <h3>Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.</h3>
      </div>
      <div className='RightLog'>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input name='login' defaultValue={"bret"} placeholder="Phone number, username or email" type="text" />
          <input name='password' defaultValue={"gwenborough"} placeholder="Password.." type="text" />
          <button>вход</button>
          <p>Забыли пароль?</p>
        </form>
        <hr />
        <div className='botBut'>Создать новый аккаунт</div>
      </div>

    </div>
  )
}

export default Login