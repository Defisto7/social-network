import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import s from'./App.module.css'
import Dialogs from './Components/Dialogs/';

function App() {
    return ( 
        <BrowserRouter>
        <div className={s.appWrapper}>
            <Header />
            <NavBar />      
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile/*' element={<Content />}/>
                    <Route path='/dialogs/*' element={<Dialogs />}/>
                </Routes>    
            </div>
        </div>
        </BrowserRouter>
        );
}

export default App;