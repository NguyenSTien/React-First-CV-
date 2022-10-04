import React, { useState } from 'react';
import SectionTitle from '../Title/Title';
import * as Yup from 'yup';
import envelope from '../../../../assets/images/envelope.png';
import Map from '../Maps/Maps';
import { useFormik } from 'formik';
import { useColorContext } from '../../../../contexts/ColorContext';
import './Contact.scss';

export default function Contact() {
  const [inputClick, setInputClick] = useState('');
  const handleInputClick = (value) => {
    if (value === 'name') {
      setInputClick('name');
    }
    if (value === 'subject') {
      setInputClick('subject');
    }
    if (value === 'email') {
      setInputClick('email');
    }
    if (value === 'message') {
      setInputClick('message');
    }
  };
  const { color, textColor } = useColorContext;
  const formik = useFormik({
    initialValues: { name: '', subject: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Requierd'),
      subject: Yup.string().required('Requierd'),
      email: Yup.string().required('Requierd'),
      message: Yup.string().required('Requierd'),
    }),

    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <section>
      <div className='container'>
        <section className='section'>
          <SectionTitle title='CONTACT' icon={envelope} />
        </section>
        <section className='section wrap_contact_all'>
          <div className='wrap_contact'>
            <form onSubmit={formik.handleSubmit}>
              <div
                className={
                  inputClick === 'name' ? 'wrap_label active' : 'wrap_label'
                }
                onClick={() => handleInputClick('name')}
              >
                <label className='label'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='input name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder=''
                />
              </div>
              <div
                className={
                  inputClick === 'subject' ? 'wrap_label active' : 'wrap_label'
                }
                onClick={() => handleInputClick('subject')}
              >
                <label className='label'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  className='input'
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  placeholder=''
                />
              </div>
              <div
                className={
                  inputClick === 'email' ? 'wrap_label active' : 'wrap_label'
                }
                onClick={() => handleInputClick('email')}
              >
                <label className='label'>Email</label>
                <input
                  type='text'
                  id='email'
                  className='input'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder=''
                />
              </div>
              <div
                className={
                  inputClick === 'message' ? 'wrap_label active' : 'wrap_label'
                }
                onClick={() => handleInputClick('message')}
              >
                <label className='label'>Message</label>
                <input
                  type='text'
                  id='message'
                  className='textarea'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  placeholder=''
                />
              </div>
            </form>
            <button type='button' className={`button_click ${color}`}>
              SEND
            </button>
          </div>
          <Map />
        </section>
        <p className='text_footer'>
          © Material CV. All right reserved by
          <span className={`text_footer-blue ${textColor}`}> Trimatrixlab</span>
        </p>
      </div>
    </section>
  );
}
