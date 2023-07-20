export default function ContactPanel({ contact }) {
    return (
        <>
            <tr key={contact.id} className="hover">
                <th>{contact.id}</th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img className="rounded-full h-10 w-10" src={`https://ui-avatars.com/api/background=0D8ABC&color=fff?name=${contact.name}`} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{contact.name}</div>
                            <div className="text-sm opacity-50">{contact.address.street}, {contact.address.city}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {contact.company.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{contact.company.catchPhrase}</span>
                </td>
                <td>
                    {contact.email}
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                </th>
            </tr>
        </>
    );
};