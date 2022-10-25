import './Search.css';

function Search({ services, searchExemple }) {
  return (
    <section className="search">
      <ul className="services-list">
        { services.map(service => <li className="service-item">{ service.value }</li>) }
      </ul>
      <form className="search-field">
        <div className="search-field--logo">
          <span className='first-letter'>Я</span>
          <span className='other-letters'>ндекс</span>
        </div>
        <input type="text" className="search-input"></input>
        <input type="submit" className="search-submit" value="Найти"></input>
        <div className='triangle'></div>
      </form>
      <div className="search-exemple">Найдётся всё. Например, <span className="search-exemple--text">{ searchExemple }</span></div>
    </section>
  )
}

export default Search;
