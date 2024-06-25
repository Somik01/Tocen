import m from  './Menu.module.css'
import BlockOne from './blocks/blockOne/blockOne.jsx'


function Menu() {
    return(
        <div className={m.menu}>
            <BlockOne/>
        </div>
    ) 
}

export default Menu