import "./leftbar.css"


import LeftbarItemList from "./LeftbarItemList";


export default function LeftBar() {
  return (
      <div className="leftBar">
        <div className="barwrapper">
          <ul className='sidebarList'>
            <LeftbarItemList className="LeftbarItemList"/>
          </ul>

        </div>
      </div>
  )
}
