// 'use client'
import './globals.css'

// import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
// import { useState, useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   setIsDarkMode(Boolean(localStorage.getItem('darkMode')));
  // }, []);

  // useEffect(() => {
  //   const classNames = document.documentElement.classList;
  //   if (isDarkMode) {
  //     classNames.add('dark');
  //   } else {
  //     classNames.remove('dark');
  //   }
  //   localStorage.setItem('darkMode', isDarkMode.toString());
  // }, [isDarkMode]);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    // <html lang="en" className={`${isDarkMode ? 'dark' : ''}`}>
    //   <body className='bg-white text-black dark:bg-[#111111] dark:text-white'>
    //     <button onClick={toggleDarkMode} className='p-4'>
    //       {isDarkMode ? <LightModeRoundedIcon /> : <Brightness2RoundedIcon />}
    //     </button>
    //     {children}
    //   </body>
    // </html>
    <html lang="en" className='dark'>
      <body className='bg-white text-black dark:bg-[#111111] dark:text-white'>
        {children}
      </body>
    </html>
  );
}