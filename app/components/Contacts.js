import React, { useEffect, useState } from "react";
import ContactPanel from './ContactPanel';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            let contacts = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                redirect: 'follow',
            });
            contacts = await contacts.json();
            setContacts(contacts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContacts();
    }, [])

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Favorite Color</th>
                            <th></th>
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
