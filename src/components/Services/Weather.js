import cloud from './cloud.svg';

function Weather({ data }) {
  return (
    <div className="weather">
      <img className="weather-icon" src={ cloud } alt="cloud" />
      <div className="weather-temperature">{ data.temperature }</div>
      <div className="weather-subscribe-container">
        <div className="weather-subscribe--item">{ `Утром ${data.morning},` }</div>
        <div className="weather-subscribe--item">{ `днём ${data.afternoon }` }</div>
      </div>
    </div>
  )
}

export default Weather;
