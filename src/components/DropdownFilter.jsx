import React from 'react'
import { useState } from 'react'

const DropdownFilter = ({ setDropdownResult }) => {
  const [disabled, setDisabled] = useState(false)
  let options = [
    { label: 'No filtering', value: 'nothing' },
    { label: 'By date', value: 'created_at' },
    { label: 'Most votes', value: 'votes' },
    { label: 'Most commented on', value: 'comment_count' },
  ]

  let handleChange = (event) => {
    event.preventDefault()
    setDisabled(true)
    setDropdownResult(event.target.value)
  }
  return (
    <div>
      <section>
        <select id="reviewFilter" onChange={handleChange}>
          <option disabled={disabled} value="Filter reviews:">
            ~ Filter reviews ~
          </option>
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>
    </div>
  )
}

export default DropdownFilter
