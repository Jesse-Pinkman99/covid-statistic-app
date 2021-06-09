import "./Table.css"
import TableHeader from "./TableHeader/TableHeader";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import InfoWindow from "../InfoWindow/InfoWindow";
import {setCurrentCountry} from "../../actions/actions";

const TableRow = (props) => {
    const dispatch = useDispatch()

    const showInfoWindow = (country) => {
        dispatch(setCurrentCountry(country))
        props.setActive(true)
    }

    return (
        <tr>
            <td align="center" width="79">{props.id}</td>
            <td className="paddingAndBorder" width="65%"><span onClick={() => showInfoWindow(props.country)}>{props.country}</span></td>
            <td className="paddingAndBorder">{props.totalConfirmed}</td>
        </tr>
    )
}

const Table = () => {
    let countries = useSelector(state => state.countries.countries)
    let currentCountry = useSelector(state => state.countries.currentCountry)
    let searchValue = useSelector(state => state.searchValue.searchValue)
    let [activeInfoWindow, setActiveInfoWindow] = useState(false)

    return (
        <div>
            <TableHeader />

            {countries.length === 0
                ? <h1>Loading...</h1>
                : <><table className="Table" cellSpacing="0">
                <tbody className="tableContent">
                {countries
                    .filter(country => {
                        return country.Country.includes(searchValue)
                    })
                    .map((country, index) => {
                        return <TableRow key={index + 1}
                                         id={index + 1}
                                         country={country.Country}
                                         totalConfirmed={country.TotalConfirmed}
                                         setActive={setActiveInfoWindow}
                        />
                    })}
                </tbody>
            </table>
            <InfoWindow active={activeInfoWindow} setActive={setActiveInfoWindow} country={currentCountry}/></>}
        </div>
    )
}

export default Table;