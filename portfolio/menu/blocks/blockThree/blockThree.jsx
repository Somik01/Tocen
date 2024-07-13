import bthree from './blockThree.module.css'
import Img from './../../../img/rocket1.jpg'

function BlockThree() {
    return(
        <div className={bthree.blockThree}>
            <div className={bthree.blockone}>
                <div className={bthree.img}>
                    <img src={Img} alt=''/>
                </div>
                <div className={bthree.pspan}>
                    <span>Easy Liquidity Fundraising</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus molestias.</p>
                </div>
            </div>
            <div className={bthree.blocktwoo}>
                <div className={bthree.pspan}>
                    <span>Easy Liquidity Fundraising</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus molestias.</p>
                </div>
                <div className={bthree.img}>
                    <img src={Img} alt=''/>
                </div>
            </div>
            <div className={bthree.blockthree}>
                <div className={bthree.img}>
                    <img src={Img} alt=''/>
                </div>
                <div className={bthree.pspan}>
                    <span>Easy Liquidity Fundraising</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus molestias.</p>
                </div>
            </div>
        </div>
    )
}

export default BlockThree