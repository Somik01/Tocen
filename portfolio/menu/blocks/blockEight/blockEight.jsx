import be from './blockEight.module.css'
import Img from './../../../img/planet.png'

function BlockEight() {
    return (
        <div className={be.blockEight}>
            <div className={be.blockEightLeft}>
                <p className={be.blockEightLeftPTop}>
                    Apply for an IDO on MemePad
                </p>
                <p>Submit your project and get a response within 24 hours</p>
                <div className={be.blockEightLeftButton}>
                    <button>ApplyNow</button>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className={be.blockEightRight}>
                <img src={Img} alt=''/>
            </div>
        </div>
    )
}
export default BlockEight