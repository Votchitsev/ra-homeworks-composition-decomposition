import './App.css';
import data from './data';
import TopNews from './components/TopNews/TopNews';
import TopNewsAdvertising from './components/TopNews/TopNewsAdvertising';
import Search from './components/Search/Search';
import Advertising from './components/Advertising/Advertizing';

function App() {
  return (
    <div className="App">
      <section className='top-news-section'>
        <TopNews data={ data } />
        <TopNewsAdvertising /> 
      </section>
      <Search services={ data.services } searchExemple={ data.searchExemple } />
      <Advertising />
    </div>
  );
}

export default App;
