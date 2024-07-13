import bfour from './blockFour.module.css'
import Img from './../../../img/rocket2.jpg'

function BlockFour() {
    return(
        <div className={bfour.blockFour}>
            <div className={bfour.span}>
            <span>Why $MEPAD Tokens are no joke</span>
            </div>
            <div className={bfour.blockFourM}>
                <div className={bfour.blockFourMini}>
                    <img src={Img} alt=""/>
                    <span>Automatic LP Generation</span>
                    <p>A 10% fee is charged automatically and added tothe Liquidity Pool</p>
                </div>
                <div className={bfour.blockFourMini}>
                    <img src={Img} alt=""/>
                    <span>Automatic LP Generation</span>
                    <p>A 10% fee is charged automatically and added tothe Liquidity Pool</p>
                </div>
                <div className={bfour.blockFourMini}>
                    <img src={Img} alt=""/>
                    <span>Automatic LP Generation</span>
                    <p>A 10% fee is charged automatically and added tothe Liquidity Pool</p>
                </div>
            </div>
        </div>
    )
}

export default BlockFour