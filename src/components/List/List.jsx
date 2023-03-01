import React from 'react'
import './List.css'
import { RouterPaths } from "../../Routes/Router";
import notFound from '../../assets/nothing-found.png';

function List({ list, setList, deleteItem, handleSetComplete, editTask, editTaskContent }) {

    return (
        <>
            <div className='list'>
                <div className='list-width'>

                    {
                        list.length > 0 ? (
                            <RouterPaths list={list} setList={setList} deleteItem={deleteItem} handleSetComplete={handleSetComplete} editTask={editTask} editTaskContent={editTaskContent} />
                        ) : (
                            <><h2>List empty. Please add</h2>
                                <img src={notFound} alt="svg of woman searching" className='list-img' />
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default List
