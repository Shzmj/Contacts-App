import React, { useEffect, useState } from "react";
import ContactPanel from './ContactPanel';

export default function Contacts({ search }) {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            let contacts = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                redirect: 'follow',
            });
            contacts = await contacts.json();
            setContacts(contacts.filter((contact) => { return contact.name.toLowerCase().includes(search.toLowerCase()) }));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContacts();
    }, [search])

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <ContactPanel contact={contact} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
