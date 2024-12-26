import { useState } from "react"
import "./DisplayDiaries.css"

function DisplayDiaries({ diaries, setDiaries, setSelectDiaries })
{
    const [keyID, setKeyID] = useState(null)
    const handleClose = (index) => {
        const newDiaries = diaries.filter((diary, i) => i !== index)
        setDiaries(newDiaries)
    }

    const handleClickDiaries = (diary, index) => {
        setSelectDiaries(diary)
        setKeyID(index)
    }

    return (
        <div className='diaries-left-body'>
        {
            diaries.map((diary, index) => (
                <div className= {`diaries-left-item  ${index === keyID ? "activeDiary" : ""}`} key={index} onClick={() => handleClickDiaries(diary, index)}>
                    <div className='diaries-left-item-date'>
                        <i className="diaries-left-item-icon fa-solid fa-book"></i>
                        {diary.date}
                    </div>
                    <div className='diaries-left-item-title'>
                        {diary.title}
                    </div>
                    <div className="diaries-left-close"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClose(index)
                        }}    
                    >
                        <i className=" fa-solid fa-xmark"></i>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default DisplayDiaries