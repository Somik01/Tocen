import bn from './blockNav.module.css'
// import {NavLink} from 'react-router-dom'

function BlockNav() {
    return (
        <div className={bn.blockNav}>
            <div className={bn.nameProject}>
                <a href='/PageOne'>NameProject</a>
            </div>
            <div className={bn.overview}>
                <a>Overview</a>
                {/* <NavLink to='./pageOverview'>Overview</NavLink> */}
            </div>
            <div className={bn.projects}>
                <a>Projects</a>
                {/* <NavLink to='./pageProjects'>Projects</NavLink> */}
            </div>
            <div className={bn.staking}>
                <a>Staking</a>
                {/* <NavLink to='./pageStaking'>Staking</NavLink> */}
            </div>
        </div>
    )
}

export default BlockNav()