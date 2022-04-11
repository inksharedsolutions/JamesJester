import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
// import Event from '../components/event'


import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | James N. Jester" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                        </div>


                        <article className="article-section column" id="author">

                            <p>
                            James N. Jester grew up on the eastern shore of Maryland and has been in church all his life. He served in the Air Force, Civil Engineering; and in the Army National Guard, Clerk, Power Generator Repair and Small Arms Repair. He has also worked for the American Rescue Workers in Washington D.C., the Salvation Army in Cincinnati, Hennegan printing, Kroger grocery, and other small companies. He attended God’s Bible School and College in Cincinnati from 1990-1994. He presently is retired and lives in Kentucky and serves as a pastor at the Fellowship of God’s Covenant People church.
                            </p>


                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">James N. Jester</span>
                                </span> 
                            </p>

                        </article>
                    </section>
                </div>

                {/* <Event /> */}


            </Layout>
        </>
    )
}


export default ATB;
