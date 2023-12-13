"use client"

import Plyr from "plyr-react"
import "plyr-react/plyr.css"



function MyPlyrVideo({videoItem}) {
  const plyrProps = {
    source:  {
      type: 'video',
      title: 'Example title',
      sources: [
        {
          src: '/1.mp4',
          type: 'video/mp4',
        },
      ],
    }, // https://github.com/sampotts/plyr#the-source-setter
    // options: undefined, // https://github.com/sampotts/plyr#options
    // Direct props for inner video tag (mdn.io/video)
  }


  return <Plyr {...plyrProps} />
}
export default MyPlyrVideo