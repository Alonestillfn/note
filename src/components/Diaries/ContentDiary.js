import './ContentDiary.css'

function ContentDiary({ showAddDiaries, selectDiary })
{
    return (
            !showAddDiaries && (selectDiary ? (
                <div className='contentDiary'>
                    <div className='contentDiary-date'>{selectDiary.date}</div>
                    <div className='contentDiary-title'>{selectDiary.title}</div>
                    {selectDiary.imagePreview && (
                    <img 
                        className='contentDiaryImage'
                        src={selectDiary.imagePreview} 
                        alt="diary-image"
                    />
                    )}
                    <p className='contentDiary-content'>{selectDiary.content}</p>
                </div>
            ) : (
                <p className='detailDiaries'>Select a diary to see detail</p>
            )
        )
    )
}

export default ContentDiary