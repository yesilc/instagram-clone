import React, {useState} from 'react'
import Icon from './Icon'
import { AiFillCloseCircle } from "react-icons/ai";
import classNames from 'classnames';

const Search = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-[268px] relative group rounded bg-[#efefef]'>
      <span className={classNames({
        'absolute text-[#8e8e8e] pointer-events-none top-0 left-0 h-9 w-9 flex items-center justify-center':true,
        'hidden': open
      })}>
        <Icon name="search" />
      </span>
      <input onFocus={() =>setOpen(true)} onBlur={() =>setOpen(false)} type="text" placeholder='Ara' className='h-9 outline-none focus:pl-3 pl-9 rounded bg-[#efefef]' />
      <button onClick={() => setOpen(false)} className={classNames({
        'absolute text-[#c7c7c7] hidden focus:hidden group-focus-within:flex top-0 right-0 w-9 h-9 items-center justify-center': true,
        "flex": !open
      })}>
        <AiFillCloseCircle></AiFillCloseCircle>
      </button>
    </div>
  )
}

export default Search   