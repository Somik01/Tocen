import h from './Header.module.css'

function Header() {
    return (
        <div className={h.header}>
            <div className={h.headerLinkTelegram}>
                <a>Telegram</a>
            </div>
            <div className={h.headerEnterApplication}>
                <a>NameProject</a>
                <button>Enter Application</button>
            </div>
        </div>
    )
}

export default Header