import './Body.css'

function Body()
{
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
                    <div className='diaries-add'>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>

                <div className='diaries-left-body'>
                    <div className='diaries-left-item'>
                        <div className='diaries-left-item-date'>
                            March, 2024
                        </div>
                        <div className='diaries-left-item-title'>
                            <div className='diaries-left-item-1'>3. Eat something so good</div>
                            <div className='diaries-left-item-1'>8. Give my girl flowers</div>
                        </div>
                    </div>
                    <div className='diaries-left-item'>
                        <div className='diaries-left-item-date'>
                            March, 2024
                        </div>
                        <div className='diaries-left-item-title'>
                            <div className='diaries-left-item-1'>3. Eat something so good</div>
                            <div className='diaries-left-item-1'>8. Give my girl flowers</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="diaries-right">
                <div className='diaries-right-navbar'>
                    <i class="fa-regular fa-image"></i>
                </div>
                <p className='diaries-right-type'>
                    When it comes to food, there’s nothing like indulging in flavors that hit just right.
                    <br></br>
                        1. Nothing beats a warm bowl of ramen on a chilly evening.
                    <br></br>
                        2. Savoring a perfectly cooked steak feels like pure joy.
                    <br></br>    
                        3. Freshly baked cookies straight out of the oven are irresistible.
                </p>
            </div>
        </div>
    )
}

export default Body