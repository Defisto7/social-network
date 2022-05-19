import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import s from'./App.module.css'
import Dialogs from './Components/Dialogs/';

function App({dialogs, message, post, dispatch, newMessageData}) {
    return ( 
        <BrowserRouter>
        <div className={s.appWrapper}>
            <Header />
            <NavBar />      
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile/*' element={<Content post={post} dispatch={dispatch}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} message={message} newMessageData={newMessageData} dispatch={dispatch}/>}/>
                </Routes>    
            </div>
        </div>
        </BrowserRouter>
        );
}

export default App;