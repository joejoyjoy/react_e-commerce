import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { MdOutlineEdit } from 'react-icons/md'
import { MdOutlineEditOff } from 'react-icons/md'
import '../Pages.css'

function Home({ list, setList, deleteItem, handleSetComplete, editTask, editTaskContent }) {

    return (
        <ul className='unordered-list'>
            {list.map((list) =>
                <li key={list.id} className='pages-list'>

                    {
                        list.done ? (
                            <span className='pages-list-checked' >
                                <BsCheckCircle onClick={() => handleSetComplete(list.id)} size={24} />
                                <input type="text" onChange={(e) => editTaskContent(e, list.id)} disabled={!list.isEditing} value={list.text} className='task-list-input' />
                            </span>
                        )
                            : (
                                <span className='pages-list-uncheck' >
                                    <BsCircle onClick={() => handleSetComplete(list.id)} size={24} />
                                    <input type="text" onChange={(e) => editTaskContent(e, list.id)} disabled={!list.isEditing} value={list.text} className='task-list-input' />
                                </span>
                            )
                    }

                    <div>
                        {
                            list.isEditing ? (
                                <button onClick={() => editTask(list.id)} className='pages-list-btn'><MdOutlineEditOff size={30} color="white" /></button>
                            )
                                : (
                                    <button onClick={() => editTask(list.id)} className='pages-list-btn'><MdOutlineEdit size={30} color="white" /></button>
                                )
                        }
                        <button onClick={() => deleteItem(list.id)} className='pages-list-btn'><GrClose size={30} color="white" /></button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Home