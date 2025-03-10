import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            <h1>Mailbox List</h1>
            <div className="mailbox-container">
                {mailboxes.map((mailbox) => (
                    <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
                        <div>{mailbox._id}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MailboxList;
