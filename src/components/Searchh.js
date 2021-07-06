import React from 'react'
import './Searchh.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TYPES } from '../redux/constants'

const Searchh = ({hideButtons=true}) => {
  const [input,setInput]=useState('')
  const history=useHistory()
 const dispatch=useDispatch()

    const search=(e)=>{
     e.preventDefault()
      history.push("/search")
       dispatch({
           type:TYPES.SET_SEARCH_TERM,payload:input
       })
    }
    return (
        <form className="searchh">
            <div className="searchh-input">
              <SearchIcon className="searchh-inputIcon"/>
              <input value={input} onChange={e=>setInput(e.target.value)}/>
              <MicIcon/>
            </div>
            {
                !hideButtons ? (
                    <div className="searchh-buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                   </div>
                ) : (
                    <div className="searchh-buttons">
                    <Button  className="searchh-buttonsHidden"type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="searchh-buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                   </div>
                )
            }
           

        </form>
    )
}

export default Searchh
