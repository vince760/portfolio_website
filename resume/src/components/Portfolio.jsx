import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";





const Portfolio = () => {

    const images = [
        {
            original: require("../images/forceTracker.jpg"),
            thumbnail: require("../images/forceTracker.jpg")
        },
        {
            original: "http://lorempixel.com/1000/600/nature/2/",
            thumbnail: "http://lorempixel.com/250/150/nature/2/"
        }
        
    ];




    return (
        <section id="portfolio">

            <div className="row">

                <div>
                   

                    <h1>Check Out Some of My Work.</h1>

                    <div style={{ maxBlockSize: 10 }}>

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