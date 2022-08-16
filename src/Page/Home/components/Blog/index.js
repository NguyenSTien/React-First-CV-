import React from 'react';
import post from '../../../../assets/images/post-it.png';
import Sectiontitle from '../Title';
import { blogData } from '../../../../utils/Mockdata';
import './style.scss';

const index = () => {
  return (
    <>
      <div className='wrap_blog'>
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
                    {data.img}
                  </figure>
                  <div className='blog_img_content' id='b'>
                    <p className='blog_img_text'>{data.ppImg}</p>
                    <p className='blog_img_text'>{data.timeImg}</p>
                    <p className='blog_img_text'>{data.Commentimg}</p>
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
