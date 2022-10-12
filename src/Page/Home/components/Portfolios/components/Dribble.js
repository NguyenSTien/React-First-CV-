import React from 'react';
import { dribbleData } from '../../../../../utils/Mockdata';
import '../Portfolios.scss';
import DribbleContent from '../DribbleItem/DribbleContent';

const Dribble = () => {
  return (
    <div className='wrap_dribble'>
      {dribbleData.map((data, index) => (
        <DribbleContent data={data} index={index} />
      ))}
    </div>
  );
};

export default Dribble;
