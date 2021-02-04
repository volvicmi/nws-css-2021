import React from 'react'
import { find, isEmpty } from 'lodash'

const ItemPreview = ({ links, fetchCollection }) => {
  if (isEmpty(links)) {
    return null
  }

  const link = find(links, { render: 'image' })
  return (
    link && (
      <img
        className="item__preview"
        key={link.href}
        alt={link.rel}
        src={link.href}
        aria-hidden
        onClick={fetchCollection}
      />
    )
  )
}

export default ItemPreview
