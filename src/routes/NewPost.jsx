import React from 'react'
import './NewPost.css'

import blogFetch from '../axios/config'

import { useState } from 'react'

import {useNavigate} from 'react-router-dom'

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault()
    const post = {title, body, userId: 1};

    await blogFetch.post('/posts', {
      body: post
    })

    navigate('/')
    
  }

  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value)
  }

  const handleBody = (e) => {
    const value = e.target.value;
    setBody(value)
  }



  return (
    <div className='new-post'>
      <h2>Inserir novo Post :</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Titulo: </label>
          <input
          type="text" 
          name="title" 
          id="title"
          placeholder='Digite o título'
          onChange={handleTitle} />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo: </label>
          <textarea 
          name="body"
          id="body"
          placeholder='Digite o conteúdo'
          onChange={handleBody}>
          </textarea>
        </div>
        <input type="submit" value='Criar Post' className='btn'/>
      </form>

    </div>
  )
}

export default NewPost