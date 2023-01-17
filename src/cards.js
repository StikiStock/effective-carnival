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


class LoginCard extends React.Component {

  render() {
    return (
      <div className='bg-[url(./img/card-dark-bg.jpg)] bg-cover bg-[50%_50%] rounded-[5px] w-fit'>
        <div className='p-[8px_24px]'>
          <div className='flex flex-col p-[16px_0_8px_0] mx-auto w-fit'>
            <img className='w-auto h-[32px] invert mx-auto' src='https://img.logoipsum.com/263.svg' alt='Logoipsum'/>
            <p className="!font-['IRSans'] text-white text-sm my-4">به حساب خود وارد شوید</p>
          </div>
          <div className='flex mx-auto w-fit'>
            <Button className="font-bold !m-[16px_0_8px_0]" variant="contained" theme={theme}>ورود</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginCard;