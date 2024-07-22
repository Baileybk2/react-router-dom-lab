import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import MailboxList from "./components/MailboxList"
import NavBar from "./components/NavBar"
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from "./components/MailboxForm"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  return (
    <>
      <h1>Post Office</h1>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Mailbox List</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        {/* <Route
          path="/mailboxes/new"
          element={<MailboxForm addMailbox={addMailbox} />}
        /> */}
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>Oops, page not found.</h2>} />
      </Routes>
    </>
  )
}

export default App
