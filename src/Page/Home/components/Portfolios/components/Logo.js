import React from 'react';
import { logoData } from '../../../../../utils/MapData';
import LogoItem from '../LogoItem/LogoContent';
import '../Portfolios.scss';
import 'animate.css';

const Logo = () => {
  return (
    <div>
      <div className='wrap_logo'>
        {logoData.map((data, index) => (
          <LogoItem data={data} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Logo;
