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
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive}) => (isActive ? 'active' : "")}>Diaries</NavLink>
                    </li>
                    <li>Setting</li>
                    <li>Theme</li>
                    <li>Collections</li>
                </ul>
                
            </div>
        </div>
    )
}

export default Head