import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages';


const App = () => {
  return (
    <main className='container' role="main">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='cart' element={"cart-page"} />
            <Route path='*' element={<Navigate to = "/" replace />} />
        </Routes>
    </main>
  )
}

export default App;