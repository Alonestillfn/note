import "./DisplayDiaries.css"

function DisplayDiaries({ diaries, setDiaries, setSelectDiaries })
{
    const handleClose = (index) => {
        const newDiaries = diaries.filter((diary, i) => i !== index)
        setDiaries(newDiaries)
    }

    const handleClickDiaries = (diary) => {
        setSelectDiaries(diary)
    }

    return (
        <div className='diaries-left-body'>
        {
            diaries.map((diary, index) => (
                <div className='diaries-left-item' key={index} onClick={() => handleClickDiaries(diary)}>
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