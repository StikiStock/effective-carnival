import React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
// import { ReactComponent as Walter } from './svg/walter.svg';
// import { ReactComponent as Moon1 } from './svg/moon_thin.svg';
// import { ReactComponent as Moon2 } from './svg/moon_regular.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3ae57f',
    }
  },
});

class Header extends React.Component {

  render() {
    return (
      <div className='relative m-5 p-[1em_1.5em] rounded-md border border-[#5a5a5a] bg-gradient-to-r from-[#000000] to-[#1e4937] overflow-hidden'>
        {/* <Walter className='mx-auto mb-[1em]'/> */}
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Button variant="outlined" theme={theme}>آزمون</Button>
            <Button variant="outlined" theme={theme}>آموزش</Button>
          </div>
          <Button className="whitespace-nowrap" variant="contained" href="/#" theme={theme}>پنل کاربری</Button>
        </div>
      </div>
    );
  }
}



export default Header;