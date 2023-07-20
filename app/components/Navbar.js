import Contacts from './Contacts';
import React, { useState } from "react";

export default function Navbar() {
    const [search, setSearch] = useState('');

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Contacts</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="flex align-center">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={e => { setSearch(e.target.value) }} />
                        <button class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <button class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                </div>
            </div>
            <Contacts search={search} />
        </>
    );
};