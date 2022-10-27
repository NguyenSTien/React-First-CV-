import React from 'react';
import { dribbleData } from '../../../../../utils/MapData';
import '../Portfolios.scss';
import DribbleContent from '../DribbleItem/DribbleContent';

const Dribble = () => {
  return (
    <div className='wrap_dribble'>
      {dribbleData.map((data, index) => (
        <DribbleContent data={data} index={index} key={index} />
      ))}
    </div>
  );
};

export default Dribble;
