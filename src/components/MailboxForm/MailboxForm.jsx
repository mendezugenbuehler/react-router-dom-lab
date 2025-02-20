import React, { useState } from 'react';

const MailboxForm = ({ addBox }) => {
    const [boxOwner, setBoxOwner] = useState('');
    const [boxSize, setBoxSize] = useState('Small');

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox({ boxOwner, boxSize });
        setBoxOwner('');
        setBoxSize('Small');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Open a New Mailbox </h1>
            <label>
                Box Owner:
                <input
                    type="text"
                    value={boxOwner}
                    onChange={(e) => setBoxOwner(e.target.value)}
                    required
                />
            </label>
            <label>
                Box Size:
                <select
                    value={boxSize}
                    onChange={(e) => setBoxSize(e.target.value)}
                    required
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            <button type="submit">Create Mailbox</button>
        </form>
    );
};

export default MailboxForm;