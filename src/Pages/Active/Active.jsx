import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import '../Pages.css'

function Active({ list, deleteItem, handleSetComplete }) {

    let activeList = list.filter(activeItem => activeItem.done == false);

    return (
        <ul className='unordered-list'>
            {activeList.map((activeItem) =>
                <li key={activeItem.id} className='pages-list'>
                    {
                        activeItem.done ? (
                            <div onClick={() => handleSetComplete(activeItem.id)} className='pages-list-checked' >
                                <BsCheckCircle size={24} /> {activeItem.text}
                            </div>
                        )
                            : (
                                <span onClick={() => handleSetComplete(activeItem.id)} className='pages-list-uncheck' >
                                    <BsCircle size={24} /> {activeItem.text}
                                </span>
                            )
                    }

                    <button onClick={() => deleteItem(activeItem.id)} className='pages-list-close'><GrClose size={30} color="white" /></button>
                </li>
            )}
        </ul>
    )
}

export default Active
