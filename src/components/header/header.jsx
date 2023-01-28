import './header.css'
import React from 'react'

function Header(){
return (
    <header>
    <span onClick={()=> window.scroll(0,0)} className='header'>Film Catch </span>
    </header>
)
}

export default Header