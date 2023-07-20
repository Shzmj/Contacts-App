import React, { useEffect, useState } from "react";
import ContactPanel from './ContactPanel';

export default function Contacts({ search, newContacts }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            try {
                let contacts = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'GET',
                    redirect: 'follow',
                });
                contacts = await contacts.json();
                console.log(newContacts)
                contacts.push(...newContacts);
                setContacts(contacts.filter((contact) => {
                    return contact.name.toLowerCase().includes(search.toLowerCase()) ||
                        contact.company.name.toLowerCase().includes(search.toLowerCase())
                }));
            } catch (error) {
                console.log(error);
            }
        }
        getContacts();
    }, [search, newContacts])

    return (
        <>
            <div className="md:col-span-2 overflow-x-auto">
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
                        {contacts.map((contact, index) => (
                            <ContactPanel key={index} contact={contact} />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
