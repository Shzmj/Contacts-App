import React, { useEffect, useState } from "react";

export default function ContactDeets({ contact, handleDeleteContact, handleEditContact }) {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [companyName, setCompanyName] = useState(contact.company.name);
    const [city, setCity] = useState(contact.address.city);
    const [street, setStreet] = useState(contact.address.street);
    const [catchPhrase, setCatchPhrase] = useState(contact.company.catchPhrase);
    const [detailsChanged, setDetailsChanged] = useState(false);

    const handleClose = () => {
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setCompanyName(contact.company.name);
        setCity(contact.address.city);
        setStreet(contact.address.street);
        setCatchPhrase(contact.company.catchPhrase);
        setDetailsChanged(false);
    };

    const handleDelete = () => {
        handleDeleteContact(contact.id);
        const modalCheckbox = document.getElementById("modal-toggle");
        if (modalCheckbox) {
            modalCheckbox.checked = false;
        }
        handleClose();
    };

    const handleSave = () => {
        const updatedContact = {
            id: contact.id,
            name: name,
            email: email,
            phone: phone,
            company: {
                name: companyName,
                catchPhrase: catchPhrase,
            },
            address: {
                city: city,
                street: street,
            },
        };
        handleEditContact(updatedContact);
        const modalCheckbox = document.getElementById("modal-toggle");
        if (modalCheckbox) {
            modalCheckbox.checked = false;
        }
        handleClose();
    };

    useEffect(() => {
        if (name !== contact.name || email !== contact.email ||
            phone !== contact.phone || companyName !== contact.company.name ||
            city !== contact.address.city || street !== contact.address.street ||
            catchPhrase !== contact.company.catchPhrase) {
            setDetailsChanged(true);
        }
    }, [name, email, phone, companyName, city, street, catchPhrase]);

    return (
        <>
            <label htmlFor={`contact_deets_${contact.id}`} className="btn">
                Details
            </label>

            <input type="checkbox" id={`contact_deets_${contact.id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex items-center mb-4">
                        <div className="mask mask-squircle w-12 h-12 mr-3">
                            <img
                                className="rounded-full h-10 w-10"
                                src={`https://ui-avatars.com/api/background=0077C9&color=fff?name=${contact.name}`}
                                alt="Avatar"
                            />
                        </div>
                        <input
                            type="text"
                            className="text-lg font-bold bg-inherit"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label>Email: </label>
                            <input
                                type="text"
                                className="text-lg font-bold bg-inherit"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Phone: </label>
                            <input
                                type="text"
                                className="text-lg font-bold bg-inherit"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <label>Company name: </label>
                            <input
                                type="text"
                                className="text-lg font-bold bg-inherit"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>City: </label>
                            <input
                                type="text"
                                className="text-lg font-bold bg-inherit"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <label>Street: </label>
                            <input
                                type="text"
                                className="text-lg font-bold bg-inherit"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <label>Company catch phrase: </label>
                            <input
                                type="text"
                                className="text-lg font-bold bg-inherit"
                                value={catchPhrase}
                                onChange={(e) => setCatchPhrase(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="button" className="btn btn-error" onClick={handleDelete}>
                            Delete
                        </button>
                        {detailsChanged && (
                            <button type="button" className="btn ml-4" onClick={handleSave}>
                                Save new details
                            </button>
                        )}
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={`contact_deets_${contact.id}`} onClick={handleClose}>
                    Close
                </label>
            </div>
        </>
    );
}
