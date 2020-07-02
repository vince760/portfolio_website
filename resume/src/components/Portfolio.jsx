import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";





const Portfolio = () => {

    const images = [
        {
            original: require("../images/SourceOne.jpg"),
            thumbnail: require("../images/SourceOne.jpg")
        },
        {
            original: require("../images/forceTracker.jpg"),
            thumbnail: require("../images/forceTracker.jpg")
        }
        
        
    ];




    return (
        <section id="portfolio">

            <div className="row">

                <div>
                   

                    <h1>Check Out Some of My Work.</h1>

                    <div style={{ maxBlockSize: 10, minHeight: 700 }}>

                        <ImageGallery
                            items={images}
                        defaultImage={images}
                        
                        showIndex={true}
                        showThumbnails={false}
                        lazyLoad={true}
                        showPlayButton={false}

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio