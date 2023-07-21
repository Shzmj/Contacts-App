import React, { useEffect, useState } from "react";
import ContactPanel from './ContactPanel';

export default function Contacts({ search, newContact }) {
    const [contacts, setContacts] = useState([]);
    const [displayContacts, setDisplayContacts] = useState([]);

    useEffect(() => {
        const storedContacts = sessionStorage.getItem("contacts");
        if (storedContacts && storedContacts.length > 0) {
            setContacts(JSON.parse(storedContacts));
        } else {
            // Fetch contacts from API and store in session storage
            const getContacts = async () => {
                try {
                    let contacts = await fetch('https://jsonplaceholder.typicode.com/users', {
                        method: 'GET',
                        redirect: 'follow',
                    });
                    contacts = await contacts.json();
                    sessionStorage.setItem("contacts", JSON.stringify(contacts));
                    setContacts(contacts);
                } catch (error) {
                    console.log(error);
                }
            }
            getContacts();
        }
    }, [])

    useEffect(() => {
        if (newContact) {
            setContacts(prevContacts => [...prevContacts, newContact]);
        }
    }, [newContact]);

    const handleDeleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    }

    const handleEditContact = (updatedContact) => {
        setContacts(prevContacts => prevContacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
    }

    useEffect(() => {
        if (contacts.length > 0 && search.length === 0) {
            sessionStorage.setItem("contacts", JSON.stringify(contacts));
        }
        setContacts(prevContacts => prevContacts.sort((a, b) => a.name.localeCompare(b.name)));
        const display = contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(search.toLowerCase()) ||
                contact.company.name.toLowerCase().includes(search.toLowerCase())
        }).map((contact) => (
            <ContactPanel key={contact.id} contact={contact} handleDeleteContact={handleDeleteContact} handleEditContact={handleEditContact} />
        ));
        setDisplayContacts(display);
    }, [contacts, search]);

    return (
        <>
            <div className="md:col-span-2 overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayContacts}
                    </tbody>
                </table>
            </div>

        </>
    )
}
