import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate,  } from "react-router-dom";
const Search = ({ history }) => {

  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    const serchText = keyword.trim()
    if (serchText) {
  
    
    
      navigate(`/search/${serchText}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} style={{ display: "flex" }}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      
        <Button type='submit' variant='outline-secondary' className='px-3'>
    
        <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      
    </Form>
  )
}

export default Search
