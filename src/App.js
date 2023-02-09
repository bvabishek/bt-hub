import React from 'react';
import Login from './components/Login';
import Auth from './components/Auth';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import PrintQueue from './components/PrintQueue';
import Splash from './components/Splash';
import PrintQr from './components/PrintQr';
import PrintingPage from './components/PrintingPage';
import Fingerprint from './components/Fingerprint';
import Aadhar from './components/Aadhar';
import Plenome from './components/Plenome';
import Settings from './components/Settings';
import PlenomeMain from './components/PlenomeMain';
import CompletedJobs from './components/CompletedJobs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
     <Routes>
     <Route path='/' element={<Splash />}></Route>
     <Route path='/login' element={<Login />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/mainpage' element={<Mainpage />}></Route>
        <Route path='/printqueue' element={<PrintQueue />}></Route>
        <Route path='/printqr' element={<PrintQr />}></Route>
        <Route path='/printpage' element={<PrintingPage />}></Route>
        <Route path='/fingerprint' element={<Fingerprint />}></Route>
        <Route path='/aadhar' element={<Aadhar />}></Route>
        <Route path='/plenome' element={<Plenome />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/plenomemain' element={<PlenomeMain />}></Route>
        <Route path='/completedjobs' element={<CompletedJobs />}></Route>
     </Routes>
    <Footer />
    </div>
  )
}

export default App;