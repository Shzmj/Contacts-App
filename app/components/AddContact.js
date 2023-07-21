import React, { useState } from "react";

export default function AddContact({ onAddContact }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: Date.now(),
            name,
            email,
            phone,
            company: {
                name: company,
                catchPhrase: catchPhrase
            },
            address: {
                city,
                street,
            },
        };

        onAddContact(newContact);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setCity("");
        setStreet("");
        setCatchPhrase("");

        const modalCheckbox = document.getElementById("my_modal_7");
        if (modalCheckbox) {
            modalCheckbox.checked = false;
        }
    };

    return (
        <>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-center mb-4">Create new contact:</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-control">
                                <label className="label">
                                    Name:
                                    <input
                                        type="text"
                                        className="input input-info input-bordered"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Email:
                                    <input
                                        type="email"
                                        className="input input-info input-bordered"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Phone:
                                    <input
                                        type="text"
                                        className="input input-info input-bordered"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Company:
                                    <input
                                        type="text"
                                        className="input input-info input-bordered"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Catch Phrase:
                                    <input
                                        type="text"
                                        className="input input-info input-bordered"
                                        value={catchPhrase}
                                        onChange={(e) => setCatchPhrase(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    City:
                                    <input
                                        type="text"
                                        className="input input-info input-bordered"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Street:
                                    <input
                                        type="text"
                                        className="input input-info input-bordered"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn btn-outline btn-info" htmlFor="my_modal_7">
                                Add Contact
                            </button>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </>
    );
};
