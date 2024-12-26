
import './SettingRight.css'

function SettingRight(){

    return (
        <div className='settingRight'>
            <div id='basicInfo' className='basicInfo' data-target='basicInfo'>
                <div className='settingRightHead'>Basic Info</div>
                <div className='settingRightBody'>
                    <div className='basicInfoName'>Name: Huỳnh Văn Tài</div>
                    <div className='basicInfoEmail'>Email: vawnitaf1307@gmail.com</div>
                </div>
            </div>
            <div id='passwordLock' className='passwordLock' data-target='passwordLock'>
                <div className='settingRightHead'>Password Lock</div>
                <div className='settingRightBody'>
                    <div className='passwordLockBodyText'>
                        My Diary integrated Google and Facebook login, so normally you don't need an extra password just click the sign out menu item before you close
                        <br></br>
                        For the users who need double protection or do not want to sign out. My Diary provide a password lock page which you have to input your password every time before access this app.
                    </div>
                    <div className='passwordLockTurn'>
                        <i class="settingRightIcon settingRightIconCheck fa-regular fa-square"></i>
                        Turn on password lock
                    </div>
                </div>
            </div>
            <div id='spellCheck' className='spellCheck' data-target='spellCheck'>
                <div className='settingRightHead'>Spell Check</div>
                <div className='settingRightBody'>
                    <div className='spellCheckTurn'>
                        <i class="settingRightIcon settingRightIconCheck fa-regular fa-square"></i>
                        Turn on spell check
                    </div>
                </div>
            </div>
            <div id='noteEmail' className='noteEmail' data-target='noteEmail'>
                <div className='settingRightHead'>Note by Email</div>
                <div className='settingRightBody'>
                    <div className='noteEmailBody-head'>
                        You can send Email to vawnitaf1307@gmail.com. Which will create a diary for you automatically
                    </div>
                    <div className='noteEmailBody-body'>
                        <ol className='noteEmailBody-bodyList'>
                            <li className='noteEmailBody-bodyItem'>
                                The Email subject will be your diary title and Email body be the diary body.
                            </li>
                            <li className='noteEmailBody-bodyItem'>
                                To create điaries with labels, you simply append label at the end of your Email subject, surrouneded by #. e.g if the Email subject is "This diary is created by Email #homework". It will be create a new diary with title "This diary is created by Email" and label "homework"
                            </li>
                            <li className='noteEmailBody-bodyItem'>
                                You can create diary with multiple labels by surrounding each label with #
                            </li>
                        </ol>
                    </div>
                    <div className='noteEmailBody-footer'>
                        <div className='noteEmailBody-footerItem'>
                            <i class="settingRightIcon fa-solid fa-info"></i> The number of your diaríes and labels you can create through email is limited by your..........
                        </div>
                        <div className='noteEmailBody-footerItem'>
                            <i class="settingRightIcon fa-solid fa-user"></i> Your sending email must be the same with your account email, or it can not figure out who this diary will be create for
                        </div>
                    </div>
                </div>
            </div>
            <div id='export' className='export' data-target='export'>
                <div className='settingRightHead'>Export</div>
                <div className='settingRightBody'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </div>
            </div>
            <div id='upgrade' className='upgrade' data-target='upgrade'>
                <div className='settingRightHead'>Upgrade</div>
                <div className='settingRightBody'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
        </div>
    )
}

export default SettingRight