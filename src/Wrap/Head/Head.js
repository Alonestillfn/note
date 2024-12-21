import './Head.css'

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
                        <a href='/'>Diaries</a>
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