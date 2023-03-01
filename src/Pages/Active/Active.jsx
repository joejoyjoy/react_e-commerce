import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { MdOutlineEdit } from 'react-icons/md'
import { MdOutlineEditOff } from 'react-icons/md'
import '../Pages.css'

function Active({ list, deleteItem, handleSetComplete, editTask, editTaskContent }) {

    let activeList = list.filter(activeItem => activeItem.done == false);

    return (
        <ul className='unordered-list'>
            {activeList.map((activeItem) =>
                <li key={activeItem.id} className='pages-list'>
                    {
                        activeItem.done ? (
                            <span className='pages-list-checked' >
                                <BsCheckCircle onClick={() => handleSetComplete(activeItem.id)} size={24} />
                                <input type="text" onChange={(e) => editTaskContent(e, activeItem.id)} disabled={!activeItem.isEditing} value={activeItem.text} className='task-list-input' />
                            </span>
                        )
                            : (
                                <span className='pages-list-uncheck' >
                                    <BsCircle onClick={() => handleSetComplete(activeItem.id)} size={24} />
                                    <input type="text" onChange={(e) => editTaskContent(e, activeItem.id)} disabled={!activeItem.isEditing} value={activeItem.text} className='task-list-input' />
                                </span>
                            )
                    }

                    <div>
                        {
                            activeItem.isEditing ? (
                                <button onClick={() => editTask(activeItem.id)} className='pages-list-btn'><MdOutlineEditOff size={30} color="white" /></button>
                                )
                                : (
                                    <button onClick={() => editTask(activeItem.id)} className='pages-list-btn'><MdOutlineEdit size={30} color="white" /></button>
                                )
                        }
                        <button onClick={() => deleteItem(activeItem.id)} className='pages-list-btn'><GrClose size={30} color="white" /></button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Active
