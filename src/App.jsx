import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import MailboxList from "./components/MailboxList"
import NavBar from "./components/NavBar"
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from "./components/MailboxForm"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <NavBar />
      <h1>Post Office</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/new"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
      </Routes>
    </>
  )
}

export default App
