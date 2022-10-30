import React from 'react';

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,  
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';

const Share = ({state})=> {

    console.log(state)

    const shareUrl = state.url

    return (
      <div
        style={{
          background: '#0000',
          height: '3rem',
          width: '3rem',
          display:"flex",
          marginLeft:"2rem"
        }}
      >
       

        <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
      
        >
          <FacebookIcon className="ms-2" size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          < TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </div>
    );
  
}

export default Share