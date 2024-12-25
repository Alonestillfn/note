import { useState, useEffect } from 'react'

import './Diaries.css'
import AddDiaries from './AddDiaries.js'
import DisplayDiaries from './DisplayDiaries.js'
import ContentDiary from './ContentDiary.js'

function Diaries()
{
    const [showAddDiaries, setShowAddDiaries] = useState(false)
    const handleAddDiaries = () => setShowAddDiaries(!showAddDiaries)

    const [diaries, setDiaries] = useState(() => {
        const storeDiaries = JSON.parse(localStorage.getItem("diaries"))
        return storeDiaries || []
    }, [])  

    const [selectDiary, setSelectDiaries] = useState(null)

    useEffect(() => {
        localStorage.setItem("diaries", JSON.stringify(diaries))
    }, [diaries])

    

    return (
        <div className="diaries">
            <div className="diaries-left">
                <div className='diaries-left-navbar'>
                    <select id='diaries-sort'>
                        <option value="date">Date</option>
                        <option value="name">Name</option>
                    </select>
                    <div className='diaries-find'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='diaries-favourite'>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className='diaries-add' onClick={() => handleAddDiaries()}>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>

                <DisplayDiaries diaries={diaries} setDiaries={setDiaries} setSelectDiaries={setSelectDiaries}></DisplayDiaries>
            </div>
            
            <div className='diaries-right-navbar'>
                
                {showAddDiaries && <AddDiaries diaries={diaries} setDiaries={setDiaries} setShowAddDiaries={setShowAddDiaries}></AddDiaries>}
                <ContentDiary showAddDiaries={showAddDiaries} selectDiary={selectDiary}></ContentDiary>
                
            </div>

        </div>
    )
}

export default Diaries