//icons 


export default function Image({ image }) {
    const { urls, alt_description, links, user } = image
    return (
        <>
            <span></span>
            <img src={urls.regular} alt={alt_description} className='rounded-md' />
            <span></span>
        </>
    )
}
