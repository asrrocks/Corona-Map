import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const Contacts = () => {


    const [contacts, setContacts] = useState([]);

    var i = 1;
    useEffect(() => {
        getContactData();
    }, []);

    const getContactData = async () => {
        const response = await fetch('https://api.rootnet.in/covid19-in/contacts');
        const ContactsData = await response.json();
        setContacts(ContactsData.data.contacts.regional);
        // console.log(ContactsData.data.contacts.regional);
    }

    return (
        <div className="indian">

            <h3>Important Phone Numbers</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>State</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(phone => (
                        <tr>
                            <td>{i++}</td>
                            <td>{phone.loc}</td>
                            <td>{phone.number}</td>
                        </tr>
                    ))}

                </tbody>

            </Table>
        </div>
    )
}

export default Contacts;