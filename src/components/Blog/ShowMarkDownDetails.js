const ShowMarkDownDetails = ({ showTitlesec , showMarkDownsec}) => {

    return (
        <div className="col col-3">
            {/* title */}
            <div className={`d-${showTitlesec} d-sm-none d-md-block`}>
                <h6 className="display-6">Writing a Great Post Title</h6>
                <p>
                    Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                    Use keywords where appropriate to help ensure people can find your post by search.
                </p>
            </div>
            {/* markdown */}
            <div className={`d-${showMarkDownsec}`}>
                <h6 className="display-6">Editor Basics</h6>
                <p>
                    Use Markdown to write and format posts.
                    Commonly used syntax
                    Embed rich content such as Tweets,
                    YouTube videos, etc. Use the complete URL:


                    supported embeds.
                    In addition to images for the post's content, you can also drag and drop a cover image.
                </p>
            </div>

        </div>
    )
}

export default ShowMarkDownDetails;