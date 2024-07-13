import bsi from './blockSix.module.css'
import Img from './../../../img/state.jpg'

function BlockSix() {
    return (
        <div className={bsi.blockSix}>
            <div className={bsi.top}>
                <span>Tocenomics</span>
                <p>Below is the structure of the $MEPAD token economy.</p>
            </div>
            <div className={bsi.bottom}>
                <div className={bsi.img}>
                    <img src={Img} alt=''/>
                </div>
                <div className={bsi.statistic}>
                    <p>Plarform <span className={bsi.span1}>•</span> 30%</p>
                    <p>Plarform <span className={bsi.span2}>•</span> 30%</p>
                    <p>Plarform <span className={bsi.span3}>•</span> 30%</p>
                    <p>Plarform <span className={bsi.span4}>•</span> 30%</p>
                    <p>Plarform <span className={bsi.span5}>•</span> 30%</p>
                    <p>Plarform <span className={bsi.span6}>•</span> 30%</p>
                </div>
            </div>
        </div>
    )
}

export default BlockSix