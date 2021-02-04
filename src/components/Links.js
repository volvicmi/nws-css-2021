import React from 'react'
import { isEmpty } from 'lodash'

const Links = ({ links, fetchNasaData }) => {
  if (isEmpty(links)) {
    return null
  }

  return links.map(({ rel, prompt, href }) => (
    <button
      className="link"
      type="button"
      key={rel}
      onClick={() => fetchNasaData(href)}
    >
      {prompt}
    </button>
  ))
}

export default Links
