import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import MovieDetail from './Components/MovieDetail/MovieDetail.jsX'
import PageNotFound from './Components/PageNotFound/PageNotFound'



function App() {


  return (
    <div className='app'>
      <Header/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
        <Route element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
