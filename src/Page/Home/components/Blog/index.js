import React from 'react';
import post from '../../../../assets/images/post-it.png';
import Sectiontitle from '../Title';
import { blogData } from '../../../../utils/Mockdata';
import './style.scss';

const index = () => {
  return (
    <>
      <div id='blog' className='wrap_blog'>
        <div className='container'>
          <Sectiontitle title='BLOG' icon={post} />
          <div className='blog'>
            {blogData.map((data, index) => (
              <div
                className={
                  index % 2 === 0 ? 'blog_block_left' : 'blog_block_right'
                }
              >
                <div className='wrap_blog_img'>
                  <figure className='blog_img' id='a'>
                    <img src={data.img} alt='jdhfkjdhs'></img>
                  </figure>
                  <div className='blog_img_content' id='b'>
                    <div className='blog_img_text'>
                      <p className='blog_img_text_a'>{data.ppImg}</p>
                      <p className='blog_img_text_a'>{data.timeImg}</p>
                      <p className='blog_img_text_a'>{data.Commentimg}</p>
                    </div>
                  </div>
                </div>
                <div className='blog_content'>
                  <div className='blog_content_title'>
                    <p className='blog_content_title_text blog_content_title_text-blue'>
                      {data.titleOne}
                    </p>
                    <p>/</p>
                    <p className='blog_content_title_text blog_content_title_text-blue'>
                      {data.titleTwo}
                    </p>
                    <p>/</p>
                    <p className='blog_content_title_text'>{data.titleThere}</p>
                  </div>
                  <h4>{data.subTitle}</h4>
                  <p>{data.content}</p>
                  <p className='blog_content_title_text-blue'>Read more</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
