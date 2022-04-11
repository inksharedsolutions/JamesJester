import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/JamesWBosleybook.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                
                     <div className="grid-flex-row">
                               <h1>
                                    <span>Featured Book</span>
                                </h1>
                        
                        <hr className="hr-line"></hr>
                        
                        <div className="grid-two-columns" id="wrapper-two-books">

                            <div className="book-wraps">
                                <img src={FrontBook} alt="book-img" />
                            </div>
                        

                            <div className="content-wraps">
                                <div className="grid-child" id="author-contents">
                                    <p id="book-content">
                                        What can we do about the decline of the Christian west? Like the ancient Israelites in Egypt, Americans are simply slaves driven by the taskmasters to produce more with less. The author exposes some little known history of our ancestors and shows the path to regain our liberty...
                                    </p>
                                    
                                    <button className="btn-book-featured">
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default MidBook