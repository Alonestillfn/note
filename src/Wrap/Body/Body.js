import { Routes, Route} from 'react-router-dom'

import './Body.css'
import Diaries from '../../components/Diaries/Diaries'
import Setting from '../../components/Setting/Setting'

function Body()
{
    return (
        <>
            <Routes>
                <Route path='/' element={<Diaries/>}></Route>
                <Route path='setting' element={<Setting/>}></Route>
            </Routes>
        </>
    )
}

export default Body