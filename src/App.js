import Content from './Components/Content';
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import './App.css'

function App() {
    return ( 
        <div className='app-wrapper'>
            <Header />
            <NavBar />
            <Content />
        </div>
        );
}

export default App;