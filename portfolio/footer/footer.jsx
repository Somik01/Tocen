import f from './Footer.module.css'

function Footer() {
    return (
        <div className={f.footer}>
            <div className={f.footerTop}>
                <div className={f.nameProject}>
                    <span>NameProject</span>
                </div>
                <div className={f.informationPolicy}>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={f.seti}>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                </div>
            </div>
            <div className={f.footerBottom}>
                <p>Copyright &#0169; 2023. All Rights Rederved.</p>
            </div>
        </div>
    )
}

export default Footer