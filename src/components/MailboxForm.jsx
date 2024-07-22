import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
  _id: 0,
  boxSize: "",
  boxHolder: "",
}

const MailboxForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: let's debug this to see if we are doing what we think
    // TODO: need to set the id (something along the lines of mailboxes.length + 1)
    props.addMailbox(formData)
    setFormData(initialState)
    navigate("/mailboxes")
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }
  console.log(formData)

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Enter a Box Holder</label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          onChange={handleChange}
        />
        <label htmlFor="boxSize">
          Box Size:
          <select onChange={handleChange} id="boxSize" name="boxSize">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm
