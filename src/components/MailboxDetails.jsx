import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const selectedMailbox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )
  return (
    <>
      <h2>{selectedMailbox.id}</h2>
      <dl>
        <dt>Box Holder:</dt>
        <dd>{selectedMailbox.boxHolder}</dd>
        <dt>Box Size:</dt>
        <dd>{selectedMailbox.boxSize}</dd>
      </dl>
    </>
  )
}

export default MailboxDetails
