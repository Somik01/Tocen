import b from './BlockOne.module.css'
import Img from './../../../img/1-1.png'
import Icon from './../../../img/images.jpg'
import Bnb from './../../../img/bnb.png'
// import Phone from './img/phone.svg'
// import Laptop from './img/laptop.svg'
// import Tablet from './img/tablet.svg'

function BlockOne() {
    return (
        <div className={b.blockOne}>
            <div className={b.blockOneLeft}>
                <div className={b.blockOneLeftP}>
                <p>We Launch <span>Memecoins</span></p>
                <p className={b.pM}>The first-ever IDO launchpad focusing exclusively on memecoins and other micro-cap coins</p>
                </div>
                <div className={b.blockOneLeftButton}>
                    <button><img src={Icon} alt=''/> Buy on PancakeSwap</button>
                    <button>Enter Application</button>
                </div>
                <div className={b.blockOneLeftSpan}>
                    <p>Exclusively on <img src={Bnb} alt=''/> <span>BNB Smart Chain</span></p>
                </div>
            </div>
            <div className={b.blockOneRight}>
                <div className={b.blockOneRightImg}>
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BlockOne