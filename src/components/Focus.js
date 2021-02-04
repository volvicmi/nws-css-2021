import React from 'react'
import { find, isEmpty } from 'lodash'

const Collection = ({ collection, mediaType }) => {
  if (isEmpty(collection)) {
    return null
  }

  if (mediaType === 'image') {
    let src = find(collection, (link) =>
      link.split('~').pop().startsWith('orig'),
    )

    if (src.endsWith('.tif')) {
      src = find(collection, (link) =>
        link.split('~').pop().startsWith('large'),
      )
    }

    return <img className="focus-modal__media img" alt="" src={src} />
  }

  if (mediaType === 'video') {
    const src = find(collection, (link) => link.split('~').pop() === 'orig.mp4')
    const poster = find(
      collection,
      (link) => link.split('~').pop() === 'large.jpg',
    )

    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        className="focus-modal__media video"
        src={src}
        poster={poster}
        controls
      >
        Votre navigateur ne supporte pas les vidéos.
      </video>
    )
  }
  return null
}

export default Collection
