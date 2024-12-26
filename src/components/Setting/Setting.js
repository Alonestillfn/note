import "./Setting.css"
import SettingLeft from "./SettingLeft"
import SettingRight from "./SettingRight"

function Setting(){
    return (
        <div className="settingWrap">
            <SettingLeft></SettingLeft>
            <SettingRight></SettingRight>
        </div>
    )
}

export default Setting