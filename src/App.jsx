import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { AuthContextProvider } from './context/AuthContext'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'
import MovieDetail from './pages/MovieDetail'

const App = () => {
  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/movie/:id' element={<MovieDetail/>} />
        <Route path='/account' element={
        <ProtectedRoute>
          <Account/>
        </ProtectedRoute>
        }/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App