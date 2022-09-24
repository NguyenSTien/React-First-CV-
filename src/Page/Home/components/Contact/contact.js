import React from 'react';
import { useState } from 'react';
import SectionTitle from '../Title';
import envelope from '../../../../assets/images/envelope.png';
import ContactItem from './contactItem';
import Map from '../Maps/index';
import { useColorContext } from '../../../../contexts/ColorContext';
import './style.scss';

export default function contact() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { color, textColor } = useColorContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
  };
  return (
    <section id='contact' className='contact animate__animated animate__zoomIn'>
      <div className='container'>
        <SectionTitle title='CONTACT' icon={envelope} />
        <div className='wrap_contact_all'>
          <div className='wrap_contact'>
            <ContactItem
              active={input.name ? false : true}
              name='Name'
              onChange={handleChange}
              value={setInput}
              inputType='input'
            />
            <ContactItem
              active={input.subject ? false : true}
              name='Subject'
              onChange={handleChange}
              value={setInput}
              inputType='input'
            />
            <ContactItem
              active={input.email ? false : true}
              name='Email'
              onChange={handleChange}
              value={setInput}
              inputType='input'
            />
            <ContactItem
              active={input.message ? false : true}
              name='Message'
              onChange={handleChange}
              value={setInput}
              inputType='textarea'
            />
            <button type='button' className={`${'button_click'} ${color}`}>
              SEND
            </button>
          </div>
          <Map />
        </div>
        <p className='text_footer'>
          © Material CV. All right reserved by
          <span className={`${'text_footer-blue'} ${textColor}`}>
            {' '}
            Trimatrixlab
          </span>
        </p>
      </div>
    </section>
  );
}
