import m from  './Menu.module.css'
import BlockOne from './blocks/blockOne/blockOne.jsx'
import BlockTwo from './blocks/blockTwo/blockTwo.jsx'
import BlockTree from './blocks/blockThree/blockThree.jsx'
import BlockFour from './blocks/blockFour/blockFour.jsx'
import BlockFive from './blocks/blockFive/blockFive.jsx'
import BlockSix from './blocks/blockSix/blockSix.jsx'
import BlockSeven from './blocks/blockSeven/blockSeven.jsx'
import BlockEight from './blocks/blockEight/blockEight.jsx'
function Menu() {
    return(
        <div className={m.menu}>
            <BlockOne/>
            <BlockTwo/>
            <BlockTree/>
            <BlockFour/>
            <BlockFive/>
            <BlockSix/>
            <BlockSeven/>
            <BlockEight/>
        </div>
    ) 
}

export default Menu