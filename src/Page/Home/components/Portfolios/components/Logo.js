import React from 'react';
import { logoData } from '../../../../../utils/Mockdata';
import LogoItem from '../LogoItem/LogoItem';
import '../Portfolios.scss';
import 'animate.css';

const Logo = () => {
  return (
    <div>
      <div className='wrap_logo'>
        {logoData.map((data, index) => (
          <LogoItem data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Logo;
