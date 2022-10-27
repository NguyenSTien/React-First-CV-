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
    setInputClick(value);
  };
  const { color, textColor } = useColorContext;
  const formik = useFormik({
    initialValues: { name: '', subject: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, ' Your must be 1 character!')
        .max(25, 'Your must be 25 character!')
        .required('Required'),
      subject: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
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
                  name='name'
                  className='input name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onClick={() => handleInputClick('name')}
                  placeholder=''
                />
                {formik.errors.name && formik.touched.name && (
                  <p className='notice_error'>{formik.errors.name}</p>
                )}
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
                  name='subject'
                  className='input'
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  placeholder=''
                />
                {formik.errors.subject && formik.touched.subject && (
                  <p className='notice_error'>{formik.errors.subject}</p>
                )}
              </div>
              <div
                className={
                  inputClick === 'email' ? 'wrap_label active' : 'wrap_label'
                }
                onClick={() => handleInputClick('email')}
              >
                <label className='label'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='input'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder=''
                />
                {formik.errors.email && formik.touched.email && (
                  <p className='notice_error'>{formik.errors.email}</p>
                )}
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
                  name='message'
                  className='textarea'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  placeholder=''
                />
                {formik.errors.message && formik.touched.message && (
                  <p className='notice_error-message'>
                    {formik.errors.message}
                  </p>
                )}
              </div>
              <input
                type='submit'
                value='Send'
                className={`button_click ${color}`}
                onClick={() => handleInputClick('name')}
              />
            </form>
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
