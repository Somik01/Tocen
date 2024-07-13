import  bf from './blockFive.module.css'

function BlockFive() {
    return (
        <div className={bf.blockFive}>
            <div className={bf.pspan}>
                <span>MemePad Roadmap</span>
                <p>See our plan for the remainder of 2023</p>
            </div>
            <div className={bf.qb}>
                <div className={bf.q}>
                        <div className={bf.q2}>
                            <span>Launch IDO Platform</span>
                            <p>Begin launches on Memepad</p>
                        </div>
                        <div className={bf.q22}>
                            <p>Q2</p>
                        </div>
                </div>
                <div className={bf.q}>
                        <div className={bf.q3}>
                            <span>Launch IDO Platform</span>
                            <p>Begin launches on Memepad</p>
                        </div>
                        <div className={bf.q33}>
                            <p>Q2</p>
                        </div>
                </div>
                <div className={bf.q}>
                        <div className={bf.q4}>
                            <span>Launch IDO Platform</span>
                            <p>Begin launches on Memepad</p>
                        </div>
                        <div className={bf.q44}>
                            <p>Q2</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BlockFive