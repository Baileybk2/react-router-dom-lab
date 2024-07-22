import { Link } from "react-router-dom"

const MailboxList = (props) => {
  console.log("mailboxes:", props.mailboxes)
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map((currentBox, index) => (
          <li key={index}>
            <Link to={`/mailboxes/${currentBox._id}`}>
              Mailbox {currentBox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList
