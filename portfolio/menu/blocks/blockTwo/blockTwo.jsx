import btwo from './blockTwo.module.css'
import dog from './../../../img/dog.png'
import gorilla from './../../../img/gorilla.png'
import rocket from './../../../img/rocket.jpg'
import lock from './../../../img/lock.png'

 export function BlockTwo() {
    return (
        <div className={btwo.blockTwo}>
            <div className={btwo.heading}>
                <p>IDO Launchpad for Micro-Caps</p>
            </div>
            <div className={btwo.mini}>
                <div className={btwo.dog}>
                    <img src={dog} alt=''/>
                    <span>Specializing in Memecoins</span>
                    <p>Raise liquidity for memecoins, shitcoins, and charity-coins with small market caps.</p>
                </div>
                <div className={btwo.gorilla}>
                    <img src={gorilla} alt=''/>
                    <span>Ape-minded Community</span>
                    <p>Bootstrap your community with our ape-base ready support alltypes of memecoins.</p>
                </div>
                <div className={btwo.rocket}>
                    <img src={rocket} alt=''/>
                    <span>Rapid Launches</span>
                    <p>Launch your IDO on Memepad within days of being approved.</p>
                </div>
                <div className={btwo.lock}>
                    <img src={lock} alt=''/>
                    <span>Full KYC & Compliance</span>
                    <p>Regulation is not a meme, so we providefull-service KYC and whitelisting.</p>
                </div>
            </div>
        </div>
    )
}
