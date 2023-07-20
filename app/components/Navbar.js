import Contacts from './Contacts';
import React, { useState } from "react";
import AddContact from './AddContact';

export default function Navbar() {
    const [search, setSearch] = useState('');
    const [newContacts, setNewContacts] = useState([]);

    const onAddContact = (contact) => {
        console.log(contact);
        setNewContacts([...newContacts, contact]);
    }

    return (
        <div className="grid md:grid-cols-1 gap-4 w-9/12">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-samsungBlue">Contacts</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="join">
                        <input className="input input-bordered join-item text-samsungBlue" placeholder="Search" onChange={e => { setSearch(e.target.value) }} />
                        <button className="btn join-item rounded-r-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-samsungBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <label htmlFor="my_modal_7" className="btn btn-ghost btn-circle ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-samsungBlue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </label>

                </div>
            </div>
            <AddContact onAddContact={onAddContact} />
            <Contacts search={search} newContacts={newContacts} />
        </div>
    );
};