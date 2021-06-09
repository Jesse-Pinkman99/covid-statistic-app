import './App.css';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import {countriesAPI} from "./api/api";
import {useEffect} from "react";
import {setCountries} from "./actions/actions";
import {useDispatch} from "react-redux";

function App() {
    let dispatch = useDispatch()

    const getCountries = () => {
        countriesAPI.getCountries().then(response => {
            dispatch(setCountries(response.Countries))
        })
    }

    useEffect(() => {
        getCountries()
    }, [])

  return (
    <div className="App">
      <Header />
      <Table/>
    </div>
  );
}

export default App;