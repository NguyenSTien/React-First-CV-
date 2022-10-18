import React, { useState } from 'react';
import { useColorContext } from '../../../../../contexts/ColorContext';
import ModalExperience from '../ModalExperience/ModalExperience';

const ExperienceItem = ({ data, index }) => {
  const { color, border, textColor } = useColorContext();
  const [buttonModal, setButtonModal] = useState(false);
  const handleModal = () => {
    setButtonModal(true);
  };
  return (
    <section
      key={index}
      className={`${
        index % 2 === 0 ? 'section name__exp ' : 'section name__exp_right'
      } ${border}`}
    >
      <section
        className={`${
          index % 2 === 0 ? 'section circle_exp' : 'section circle_exp-right'
        } ${color}`}
      >
        <p className='circle_exp_text'>{data.keyword}</p>
        <section
          className={`${
            index % 2 === 0 ? 'section line_left' : 'section line_right'
          } ${color}`}
        ></section>
      </section>
      <h3 className='text_title'>{data.title}</h3>
      <h4 className='text_subTitle'>
        {data.subTitle}
        <br />
        {data.date}
      </h4>
      <p className='content'>{data.content}</p>
      <button
        className={`data-icon ${textColor}`}
        onClick={() => handleModal(true)}
      >
        {data.icon}
      </button>
      {buttonModal && (
        <ModalExperience indexValue={index} clsModal={setButtonModal} />
      )}
    </section>
  );
};

export default ExperienceItem;
