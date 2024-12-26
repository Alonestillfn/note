import './Head.css'
import { NavLink } from 'react-router-dom'

function Head()
{
    return (
        <div className='header'>
            <div className='primaryName'>
                My Diary
            </div>
            <div className='navbar'>
                <nav>
                    <NavLink className='navbarItem' to='/'>Home</NavLink>
                    <NavLink className='navbarItem' to='/setting'>Setting</NavLink>
                    <NavLink className='navbarItem' to='/collection'>Collection</NavLink>
                    <NavLink className='navbarItem' to='/theme'>Theme</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Head