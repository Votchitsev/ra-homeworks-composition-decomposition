/**
 * В компоненте содержаться заголовки карточек и кнока "Эфир" для 
 * одноимённой карточки. В пропсе передаётся компонент, который необходимо 
 * отобразить внутри карточки.
 */

function Service(props) {
  return (
    <div className="main-services-item">
      <div className="main-services-item--title">
        <span>{ props.data.title }</span>
        { props.data.titleButton ? <button className="title-button">{ 'Эфир' }</button> : undefined }
        </div>
      { props.children }
    </div>
  )
} 
export default Service;
