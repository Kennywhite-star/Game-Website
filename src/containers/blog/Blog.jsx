import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
  return (
    <div className= 'gpt3__blog section-padding' id='blog'>
      <div  className= 'gpt3__blog-heading'>
        <h1  className='gradient-text'>
          A lot is happening, 
          We are blogging about it.
        </h1>
      </div>
      
      <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
           <Article imageurl= {blog01} date='sep 26, 2021' title=' GPT-3 and Open AI is the Future. Let us explorre how it is?' />
          </div>

          <div className='gpt3__blog-container_groupB'>

          <Article imageurl= {blog02} date='sep 26, 2021' title=' GPT-3 and Open AI is the Future. Let us explorre how it is?'/>
          <Article  imageurl= {blog03} date='sep 26, 2021' title=' GPT-3 and Open AI is the Future. Let us explorre how it is?' />
          <Article  imageurl= {blog04} date='sep 26, 2021' title=' GPT-3 and Open AI is the Future. Let us explorre how it is?' />
          <Article imageurl= {blog05} date='sep 26, 2021' title=' GPT-3 and Open AI is the Future. Let us explorre how it is?' />

          </div>
      </div>
    </div>
  )
}

export default Blog