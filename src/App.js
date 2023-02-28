import React, { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout';
import List from './components/List/List';

const listFromLocalStorage = JSON.parse(localStorage.getItem("wish-list") || '[]')

function App() {

    const [list, setList] = useState(listFromLocalStorage);
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("wish-list", JSON.stringify(list))
    }, [list])

    const addItem = (item) => {
        if (item != "" && item.length > 3) {
            const newItem = {
                id: Math.floor(Math.random() * 9999),
                text: item,
                done: false,
                isEditing: false,
            };

            setList([...list, newItem]);

            setInput("");

        } else {
            alert("Please insert min 3 characters")
        }

    };

    const deleteItem = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addItem(input);
        }
    };

    const handleSetComplete = (id) => {

        const updatedList = list.map(list => {
            if (list.id === id) {
                return { ...list, done: !list.done }
            }
            return list;
        })

        setList(updatedList);
    }

    return (
        <>
            <Layout input={input} handleKeyDown={handleKeyDown} setInput={setInput} />
            <List list={list} deleteItem={deleteItem} handleSetComplete={handleSetComplete} />
        </>
    );
}

export default App;
