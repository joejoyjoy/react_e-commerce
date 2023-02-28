import React from 'react'
import './List.css'
import { RouterPaths } from "../../Routes/Router";
import notFound from '../../assets/nothing-found.png';

function List({ list, deleteItem, handleSetComplete }) {

    return (
        <>
            <div className='list'>
                <div className='list-width'>

                    {
                        list.length > 0 ? (
                            <RouterPaths list={list} deleteItem={deleteItem} handleSetComplete={handleSetComplete} />
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
