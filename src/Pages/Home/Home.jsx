import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import '../Pages.css'

function Home({ list, deleteItem, handleSetComplete }) {

    return (
        <ul className='unordered-list'>
            {list.map((list) =>
                <li key={list.id} className='pages-list'>

                    {
                        list.done ? (
                            <span onClick={() => handleSetComplete(list.id)} className='pages-list-checked' >
                                <BsCheckCircle size={24} /> {list.text}
                            </span>
                        )
                            : (
                                <span onClick={() => handleSetComplete(list.id)} className='pages-list-uncheck' >
                                    <BsCircle size={24} /> {list.text}
                                </span>
                            )
                    }
                    <button onClick={() => deleteItem(list.id)} className='pages-list-close'><GrClose size={30} color="white" /></button>
                </li>
            )}
        </ul>
    )
}

export default Home