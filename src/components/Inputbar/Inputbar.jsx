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
                placeholder='Press ↩ ENTER to add tasks...'
            />
        </div>
    )
}

export default Inputbar