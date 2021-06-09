import "./InfoWindow.css"
import heart from "../../assets/img/heart.png"
import skull from "../../assets/img/skull.png"
import doc from "../../assets/img/doc.png"
import {useSelector} from "react-redux";

const InfoWindow = (props) => {
    let country = useSelector(state => state.countries.countries
        .find(country => country.Country === props.country))

    return (
        <div className={props.active ? "InfoWindow active" : "InfoWindow"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "InfoWindow__content active" : "InfoWindow__content"} onClick={event => event.stopPropagation()}>
                <div className="InfoWindow_header">{country?.Country}</div>
                <table className="InfoWindow__table" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td align="left"><img alt="image" src={heart}/></td>
                            <td>Total Confirmed</td>
                            <td align="right">{country?.TotalConfirmed}</td>
                        </tr>
                        <tr>
                            <td align="left"><img alt="image" src={skull}/></td>
                            <td>Total Deaths</td>
                            <td align="right">{country?.TotalDeaths}</td>
                        </tr>
                        <tr>
                            <td align="left"><img alt="image" src={doc}/></td>
                            <td>Total Recovered</td>
                            <td align="right">{country?.TotalRecovered}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="infoWindow__btn" onClick={() => props.setActive(false)}>OK</button>
            </div>
        </div>
    )
}

export default InfoWindow