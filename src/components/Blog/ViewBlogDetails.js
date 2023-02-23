import './css/blogs.css';

import { Remarkable } from "remarkable";
import { useState } from 'react';
const md = new Remarkable()

const ViewBlogDetails = () => {
    const [blogContent, setBlogContent] = useState("*React-Markdown* is **Awesome**");


    return (
        <div class="blog-slider">
            <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                        {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" /> */}
                        <img className="imgBar" src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" />

                    </div>
                    <div class="blog-slider__content">
                        <span class="blog-slider__code">26 December 2019</span>
                        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?


                            <div
                                className="content"
                                dangerouslySetInnerHTML={{ __html: md.render(blogContent) }}
                            ></div>
                        </div>
                        <a href="#" class="blog-slider__button">READ MORE</a>
                    </div>
                </div>
            </div>
            <div class="blog-slider__pagination"></div>
        </div>
    );
}

export default ViewBlogDetails;