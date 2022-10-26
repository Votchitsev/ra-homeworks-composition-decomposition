import Weather from './Weather';
import Map from './Map';
import Visited from './Visited';
import Service from './Service';
import TvPropgramm from './TvPropgramm';
import Broadcast from './Broadcast';
import './Services.css';

function Services( { services }) {
  return (
    <div className='services-container'>
      <Service data={ services.weather }>
        <Weather data={ services.weather } />
      </Service>
      <Service data={ services.visited }>
        <Visited data={ services.visited } />
      </Service>
      <Map data={ services.germanyMap } />
      <Service data={ services.tv }>
        <TvPropgramm data={ services.tv }/>
      </Service>
      <Service data={ services.broadcast }>
        <Broadcast data={ services.broadcast }/>
      </Service>
    </div>
  )
}

export default Services;
