const ShowMarkDownDetails = ({ showTitlesec , showMarkDownsec,ShowBlogDetails,ShowHeadingDetails,ShowItalicDetails,
    ShowRepcodeDetails,ShowLinkDetails ,ShowImageDetails,ShowUnorderDetails,ShowOrderDetails,ShowTaskDetails,ShowMentionDetails
    ,ShowRefDetails,ShowQouteDetails
}) => {

    return (
        <div className="col col-3 d-sm-none d-md-block">
            {/* title */}
            <div className={`d-${showTitlesec}  `}>
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
            {/* {bold} */}
            <div className={`d-${ShowBlogDetails}`}>
                <h6 className="display-6"> Bold Text('B')</h6>
                <p>'**' : This symbol represents strong emphasis or bold text</p>
                
            </div>

             {/* {heading} */}
             <div className={`d-${ShowHeadingDetails}`}>
                <h6 className="display-6">Heading('H')</h6>
                <p>
                "#" symbol refer to create headings. The number of "#" symbols you use will determine the level of the heading
                </p>
            </div>

               {/* {Italic} */}
               <div className={`d-${ShowItalicDetails}`}>
                <h6 className="display-6">Italic('I')</h6>
                <p>
                use the underscore (_) symbols to format text as italic. You can enclose the text you want to be italicized within a single pair of these symbols                </p>
            </div>


            {/* {represent code} */}
            <div className={`d-${ShowRepcodeDetails}`}>
                <h6 className="display-6">programming to represent code</h6>
                <p>
                it is a common symbol used in programming to represent code or programming languages.you can format text as code or a code block by enclosing it in backticks (`) or a set of triple backticks
                </p>
            </div>

                {/* {Link } */}
                <div className={`d-${ShowLinkDetails}`}>
                <h6 className="display-6">Link</h6>
                <p>
                You replace "link text" with the text that you want to display as the link, and "URL" with the actual URL that you want to link to.                </p>
            </div>
            {/* {image } */}
            <div className={`d-${ShowImageDetails}`}>
                <h6 className="display-6">Image</h6>
                <p>
                used in Markdown to display an image in your document.</p>
            </div>

              {/* {unorder } */}
              <div className={`d-${ShowUnorderDetails}`}>
                <h6 className="display-6">Unorder List</h6>
                <p>
                In Markdown, you can create an unordered list.Simply start each line with a hyphen (-) followed by a space, and the items will be displayed as an unordered list
                </p>
            </div>

             {/* {unorder } */}
             <div className={`d-${ShowOrderDetails}`}>
                <h6 className="display-6">order List</h6>
                <p>
                In Markdown, you can create an ordered list.Simply start each line with a number followed by a period and a space, and the items will be displayed as an ordered list
                </p>
            </div>

              {/* {task } */}
              <div className={`d-${ShowTaskDetails}`}>
                <h6 className="display-6">Task List</h6>
                <p>
                you can create a task list.Simply start each line with a hyphen (-), followed by a space, and then include a set of square brackets with a space inside</p>
            </div>

            {/* {task } */}
            <div className={`d-${ShowMentionDetails}`}>
                <h6 className="display-6">Mention</h6>
                <p>
                you can mention someone by using the "@" symbol followed by their username. This creates a link to their profile or username.
                </p>            
                </div>

                {/* {Ref } */}
            <div className={`d-${ShowRefDetails}`}>
                <h6 className="display-6">Mention</h6>
                <p>
                you can mention someone by using the "@" symbol followed by their username. This creates a link to their profile or username.
                </p>            
                </div>

                  {/* {Ref } */}
            <div className={`d-${ShowQouteDetails}`}>
                <h6 className="display-6">Qoute</h6>
                <p>
                you can create a quote by using the {">"} symbol at the beginning of a line.When you view the Markdown document, this will create a quote with the text "This is a quote. It can have multiple lines and is often used to highlight important text.                
                </p>            
                </div>


            
            
        </div>
    )
}

export default ShowMarkDownDetails;