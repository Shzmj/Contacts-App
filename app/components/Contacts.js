import React, { useEffect, useState } from "react";
import Navbar from './Navbar';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [displayContacts, setDisplayContacts] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const getContacts = async () => {
        try {
            let contacts = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                redirect: 'follow',
            });
            contacts = await contacts.json();
            setContacts(contacts);
            console.log(contacts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContacts();
    }, [])

    useEffect(() => {
        const display = contacts.map((contact) => {
            return (
                <div key={contact.id}>
                    <img src={`https://ui-avatars.com/api/background=0D8ABC&color=fff?name=${contact.name}`} />
                    <h1>{contact.name}</h1>
                </div>
            )
        })
        setDisplayContacts(display)
    }, [contacts])

    return (
        <>
            <Navbar />
            <h1 className='text-center underline'>helo</h1>
            <div className="flex flex-col">
                <div>{displayContacts}</div>
            </div>
            <button onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
        </>
    )
}
