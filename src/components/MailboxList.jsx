import { Link } from "react-router-dom"

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map((currentBox, index) => (
          <li key={index} className="mail-box">
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
