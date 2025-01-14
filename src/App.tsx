import './App.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindJobs } from './Pages/FindJobs';
import { HelpLinks } from './Components/HelpLinks';
import { Header } from './Header/Header';
import { FindTalent } from './Pages/FindTalent';
import { TalentProfilePage } from './Pages/TalentProfilePage';

function App() {
  const theme = createTheme({
    colors: {
      'mine-shaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d',],
      'bright-sun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902',],
      'bright-turquoise': ['#effefd','#c8fff9','#92fdf4','#53f5ee','#20e1de','#08dddd','#029c9f','#077a7e','#0b6064','#0e5053','#012e32',],
    
    },
    fontFamily: "poppins,san-serif"
  })


  return (
    <MantineProvider defaultColorScheme='dark' theme={theme} >
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/find-jobs' element={<FindJobs/>}/>
          <Route path='/find-talent' element={<FindTalent/>}/>
          <Route path='/talent-profile' element={<TalentProfilePage/>}/>
          <Route path='*' element={<HomePage />} />
        </Routes>
        <HelpLinks/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
