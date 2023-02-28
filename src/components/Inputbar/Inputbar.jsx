import React from 'react'
import './Inputbar.css'

function Inputbar({ input, handleKeyDown, setInput }) {

    return (
        <div className='inputbar'>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Insert your tasks and press ↩ ENTER...'
            />
        </div>
    )
}

export default Inputbar