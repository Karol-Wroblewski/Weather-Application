import React from 'react'
import './style/SearchCity.css';
import WeatherInformation from './WeatherInformation';
import Error from './Error';
class SearchCity extends React.Component{

    state = {
        active: false,
        error: false,
        value: "",
        temperature: "",
        pressure: "",
        wind: "",
        icon: "",
        sunrise: "",
        sunset: "",
        showError: true,
        tab: ""
    }

    handleApi = () =>{
     fetch(`https://api.apixu.com/v1/forecast.json?key=5fb808b748894e6fbbc220539192005&q=${this.state.value}&days=7`)
     .then(response => {
         if(!response.ok)
            throw Error(response.statusText);
        return response;
     })
     .then(response => response.json())
     .then(data => {
         this.setState({
             temperature: data.current.temp_c,
             pressure: data.current.pressure_mb,
             wind: data.current.wind_kph,
             icon: data.current.condition.icon,
             active: 1,
             error: false,
             value: "",
             showError: false,
             tab: data.forecast,
         })
     })
     .catch( () => 
         {
            if(this.state.showError){
            this.setState({
            error: true,
            active: false,
            showError: true,
         })
        }

     })
    }
     
     
    

    handleInput = (e) => {
        this.setState({
            value: e.target.value,
            showError: true,
        })
    }

    handleButton = (e) => {
        e.preventDefault();
        if(this.state.value.length < 1)
            return;
        else{
            this.handleApi()
        }
    }
    render() {
        return(
            <>
                <form>
                <input type="text" className="smallInput" placeholder="Podaj miasto" value={this.state.value} onChange={this.handleInput} ></input>
                <input type="submit" value="sprawdź" className="button" onClick={this.handleButton}></input>
                </form>
                <div className="flex">
                {this.state.error ? <Error></Error> : null}
                {this.state.active ? <WeatherInformation date="Dzisiaj" temperature={this.state.temperature} pressure={this.state.pressure} wind={this.state.wind} icon={this.state.icon} ></WeatherInformation> : null}

                {this.state.active ? <WeatherInformation date="Jutro" temperature={this.state.tab.forecastday[1].day.avgtemp_c} pressure="0" wind={this.state.tab.forecastday[1].day.avgvis_km}
                icon={this.state.tab.forecastday[1].day.condition.icon} alt={this.state.tab.forecastday[1].day.condition.text}></WeatherInformation> : null}

                {this.state.active ? <WeatherInformation date={this.state.tab.forecastday[2].date} temperature={this.state.tab.forecastday[2].day.avgtemp_c} pressure="0" wind={this.state.tab.forecastday[2].day.avgvis_km}
                icon={this.state.tab.forecastday[2].day.condition.icon} alt={this.state.tab.forecastday[2].day.condition.text}></WeatherInformation> : null}

                {this.state.active ? <WeatherInformation date={this.state.tab.forecastday[3].date} temperature={this.state.tab.forecastday[3].day.avgtemp_c} pressure="0" wind={this.state.tab.forecastday[3].day.avgvis_km}
                icon={this.state.tab.forecastday[3].day.condition.icon} alt={this.state.tab.forecastday[3].day.condition.text}></WeatherInformation> : null}

                {this.state.active ? <WeatherInformation date={this.state.tab.forecastday[4].date} temperature={this.state.tab.forecastday[4].day.avgtemp_c} pressure="0" wind={this.state.tab.forecastday[4].day.avgvis_km}
                icon={this.state.tab.forecastday[4].day.condition.icon} alt={this.state.tab.forecastday[4].day.condition.text}></WeatherInformation> : null}
                </div>
            </>
        )
    }
}

export default SearchCity;