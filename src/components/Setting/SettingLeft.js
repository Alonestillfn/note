import './SettingLeft.css'
import { useState } from 'react'

function SettingLeft(){
    const [state, setState] = useState(null)
    const handleClickSettingLeft = (select, id) => {
        return () =>
            {
                setState(id)
                document.querySelector(select).scrollIntoView({behavior: "smooth"})
            }
    }
    return (
        <div className='SettingLeft'>
            <nav className='SettingLeftSelect'>
                <div className={`settingLeftItem ${state === 'basicInfo' ? "activeSettingLeft" : ""}`} onClick={handleClickSettingLeft('#basicInfo', 'basicInfo')}>
                    <i class="settingLeftIcon fa-solid fa-user"></i>
                    Basic Info
                </div>
                <div className={`settingLeftItem ${state === 'passwordLock' ? "activeSettingLeft" : ""}`} onClick={handleClickSettingLeft('#passwordLock', 'passwordLock')}>
                    <i class="settingLeftIcon fa-solid fa-key"></i>
                    Password Lock
                </div>
                <div className={`settingLeftItem ${state === 'spellCheck' ? "activeSettingLeft" : ""}`} onClick={handleClickSettingLeft('#spellCheck', 'spellCheck')}>
                    <i class="settingLeftIcon fa-solid fa-spell-check"></i>
                    Spell Check
                </div>
                <div className={`settingLeftItem ${state === 'noteEmail' ? "activeSettingLeft" : ""}`} onClick={handleClickSettingLeft('#noteEmail', 'noteEmail')}>
                    <i class="settingLeftIcon fa-solid fa-envelope"></i>
                    Note by Email
                </div>
                <div className={`settingLeftItem ${state === 'export'? "activeSettingLeft" : ""}`} onClick={handleClickSettingLeft('#export', 'export')}>
                    <i class="settingLeftIcon fa-solid fa-file-arrow-down"></i>
                    Export
                </div>
                <div className={`settingLeftItem ${state === 'upgrade' ? "activeSettingLeft" : ""}`} onClick={handleClickSettingLeft('#upgrade', 'upgrade')}>
                    <i class="settingLeftIcon fa-solid fa-upload"></i>
                    Upgrade
                </div>
            </nav>
        </div>
    )
}

export default SettingLeft