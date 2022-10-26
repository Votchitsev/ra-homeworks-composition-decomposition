/**
 * Компонент отображает котировки валют и ресурсов под списком "ТОП-новостей".
 */

function Rates({ rates }) {
  return (
    <ul className="rates-container">
      {rates.map(rate => <li className="rate-item" key={ rate.id }>
        <div className="rate-item-name">{ rate.name }</div>
        <div className="rate-item-value">{ rate.value }</div>
      </li>)}
    </ul>
  )
}

export default Rates;
