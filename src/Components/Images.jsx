import React from 'react'

export default function Images({ links, user, urls, alt }) {
    return (
        <div className=''>
            <img src={urls.regular} alt={alt} style={{width:"100%",  display:"block"}} />
        </div>
    )
}
