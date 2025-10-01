import React,{useState,useContext} from 'react'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'

const SignIn = () => {
    const {url} =useContext(StoreContext)
  return (
    <div>
      This is sign in page
    </div>
  )
}

export default SignIn
