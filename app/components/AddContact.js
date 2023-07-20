import React, { useState } from "react";

export default function AddContact({ onAddContact }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: Date.now(),
            name,
            email,
            phone,
            company,
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
    };

    return (
        <>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">New Contact</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                Name:
                                <input
                                    type="text"
                                    className="input input-primary input-bordered"
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
                                    className="input input-primary input-bordered"
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
                                    className="input input-primary input-bordered"
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
                                    className="input input-primary input-bordered"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                City:
                                <input
                                    type="text"
                                    className="input input-primary input-bordered"
                                    value={company}
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
                                    className="input input-primary input-bordered"
                                    value={company}
                                    onChange={(e) => setStreet(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit" className="btn bg-primary" htmlFor="my_modal_7">
                            Add Contact
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    );
};
