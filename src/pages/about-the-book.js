import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'james-jester',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | James N. Jester" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Will the Real Israel Please Stand Up!`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    What can we do about the decline of the Christian west? Like the ancient Israelites in Egypt, Americans are simply slaves driven by the taskmasters to produce more with less. The author exposes some little known history of our ancestors and shows the path to regain our liberty. This book is "the rest of the story" and it should give Christians the basic principles needed to understand who they are, where they are going, and what is going on in the world. A primer into Christian Identity in a blend of history, politics and theology. You will never view the Bible the same after reading this book. A must read for Christians and Patriots who wonder what happened to a Christian nation.
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/will-the-real-israel-please-stand-up-jim-jester/1112544953?ean=9781648957574',
                                    amazon: 'https://www.amazon.com/Will-Real-Israel-Please-Stand-ebook/dp/B09STTJQSF/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1646086980&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Will-Real-Israel-Please-Stand/dp/1648957560/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646086980&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/will-the-real-israel-please-stand-up-jim-jester/1112544953?ean=9781648957567',
                                    booksamillion: 'https://www.booksamillion.com/p/Will-Real-Israel-Please-Stand/James-N-Jester/9781648957567?id=8158356429268',
                                }
                            }}
                        />

                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;