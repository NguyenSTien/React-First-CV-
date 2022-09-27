import React from 'react';
import post from '../../../../assets/images/post-it.png';
import { useColorContext } from '../../../../contexts/ColorContext';
import SectionTitle from '../Title/Title';
import { blogData } from '../../../../utils/Mockdata';
import './Blog.scss';

const Blog = () => {
  const { textColor } = useColorContext();
  return (
    <>
      <div id='blog' className='wrap_blog animate__animated animate__zoomIn'>
        <div className='container'>
          <SectionTitle title='BLOG' icon={post} />
          <div className='blog'>
            {blogData.map((data, index) => (
              <div
                className={
                  index % 2 === 0 ? 'blog_block_left' : 'blog_block_right'
                }
              >
                <div className='wrap_blog_img'>
                  <figure className='blog_img'>
                    <img src={data.img} alt='title'></img>
                  </figure>
                  <div className='blog_img_content'>
                    <div className='blog_img_text'>
                      <p className='blog_img_textC'>{data.ppImg}</p>
                      <p className='blog_img_textC'>{data.timeImg}</p>
                      <p className='blog_img_textC'>{data.Commentimg}</p>
                    </div>
                  </div>
                </div>
                <div className='blog_content'>
                  <div className='blog_content_title'>
                    <p
                      className={`blog_content_title_text blog_content_title_text-blue ${textColor}`}
                    >
                      {data.titleOne}
                    </p>
                    <p>/</p>
                    <p
                      className={`blog_content_title_text blog_content_title_text-blue ${textColor}`}
                    >
                      {data.titleTwo}
                    </p>
                    <p>/</p>
                    <p className='blog_content_title_text'>{data.titleThere}</p>
                  </div>
                  <h4 className='blog_content_head'>{data.subTitle}</h4>
                  <p className='blog_main_content'>{data.content}</p>
                  <p className={`blog_content_title_text-blue ${textColor}`}>
                    Read more
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
