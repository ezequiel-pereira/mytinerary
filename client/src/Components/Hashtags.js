import React from 'react'

import '../styles/Activity.css'

const Hashtags = ({hashtags}) =>
  <div  className="Hashtags">
    {hashtags.join(' ')}
  </div>

export default Hashtags