import React from 'react'
import AuthorImg from '../../static/author/author.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";
import { Link } from 'gatsby'

const Author = () => {
    return (
        <>
            <section className="upper-main-author" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <h1 className="author-name-tag">
                            <span>James N. Jester</span>
                        </h1>

                        <p className="author-p">
                        James N. Jester grew up on the eastern shore of Maryland and has been in church all his life. He served in the Air Force, Civil Engineering; and in the Army National Guard, Clerk, Power Generator Repair and Small Arms Repair. 
                        </p>

                       

                        {/* <span className="author-tagline">
                            Author & Writer
                        </span> */}

                        <button className="btn-about-author">
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                        <div className="about-author-line">
                            <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                        </div>

                    {/* <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Author;