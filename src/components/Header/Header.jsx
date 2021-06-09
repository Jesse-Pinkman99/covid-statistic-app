import "./Header.css"
import logo from "../../assets/img/logo.png"
import Search from "./Search/Search";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                <img alt="logo" src={logo} />
                <div className="statisticLabel">
                    STATISTIC
                </div>
            </div>
            <Search />
        </div>
    )
}

export default Header