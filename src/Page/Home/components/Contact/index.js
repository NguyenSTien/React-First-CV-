/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './style.scss';
import Sectiontitle from '../Title';
import enve from '../../../../assets/images/envelope.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Map from '../Maps/index';

export const index = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      email: '',
      message: '',
    },
    alidationSchema: Yup.object({
      name: Yup.string().min(2).max(30).required(''),
      email: Yup.string().email('').required(''),
      subject: Yup.string().required(''),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container'>
      <Sectiontitle
        title='CONTACT'
        icon={enve}
        onChange={formik.handleChange}
      />
      <div className='wrap_form'>
        <div className='form'>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type='text'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.toucher.name && (
                <p>{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label>Subject</label>
              <input
                type='text'
                name='subject'
                value={formik.values.subject}
                onChange={formik.handleChange}
              />
              {formik.errors.subject && formik.toucher.subject && (
                <p>{formik.errors.subject}</p>
              )}
            </div>
            <div>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.toucher.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label>Message</label>
              <input
                type='text'
                name='message'
                value={formik.values.message}
                onChange={formik.handleChange}
                className='input_message'
              />
              {formik.errors.message && formik.toucher.message && (
                <p>{formik.errors.message}</p>
              )}
            </div>
            <button type='SEND' value='send'>
              SEND
            </button>
          </form>
        </div>
        <div className='wrap_map'>
          <Map />
        </div>
      </div>
      <p className='text_footer'>
        © Material CV. All right reserved by{' '}
        <span className='text_footer-blue'>Trimatrixlab</span>
      </p>
    </div>
  );
};
export default index;
