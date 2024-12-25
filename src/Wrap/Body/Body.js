import { Routes, Route, NavLink} from 'react-router-dom'

import './Body.css'
import Diaries from '../../components/Diaries/Diaries'

function Body()
{
    return (
        <>
            <nav>
                <NavLink to='/'></NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Diaries/>}></Route>
            </Routes>
        </>
    )
}

export default Body