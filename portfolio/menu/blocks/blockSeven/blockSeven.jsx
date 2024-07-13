import bse from './blockSeven.module.css'
import Img from './../../../img/rocket3.jpg'

function BlockSeven() {
    return(
        <div className={bse.blockSeven}>
            <div className={bse.heading}>
                <span>Alocation Levels</span>
            </div>
            <div className={bse.miniBlock}>
                <div className={bse.miniBlockOne}>
                    <img src={Img} alt=''/>
                    <span className={bse.span}>Pled</span>
                    <p>Staking Requirement</p>
                    <span>10,000 MEPAD Tocens</span>
                    <p>Pool Weight</p>
                    <span>10</span>
                    <p>Guaranteed Allocation</p>
                    <span>YES</span>
                </div>
                <div className={bse.miniBlockOne}>
                    <img src={Img} alt=''/>
                    <span className={bse.span}>Pled</span>
                    <p>Staking Requirement</p>
                    <span>10,000 MEPAD Tocens</span>
                    <p>Pool Weight</p>
                    <span>10</span>
                    <p>Guaranteed Allocation</p>
                    <span>YES</span>
                </div>
                <div className={bse.miniBlockOne}>
                    <img src={Img} alt=''/>
                    <span className={bse.span}>Pled</span>
                    <p>Staking Requirement</p>
                    <span>10,000 MEPAD Tocens</span>
                    <p>Pool Weight</p>
                    <span>10</span>
                    <p>Guaranteed Allocation</p>
                    <span>YES</span>
                </div>
            </div>
        </div>
    )
}

export default BlockSeven