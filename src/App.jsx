import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    const newMailboxWithId = {
      ...newMailbox,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newMailboxWithId]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Welcome to the Post Office</h1>
              <p>
                Get started by{' '}
                <Link to="/new-mailbox">opening a new mailbox</Link> to receive your mail or{' '}
                <Link to="/mailboxes">check your mailbox</Link> to see if you have any mail.
              </p>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  );
};

export default App;
