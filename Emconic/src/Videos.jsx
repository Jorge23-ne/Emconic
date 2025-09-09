import "./Videos.css";

function Videos() {
    return (
        <>
         <div className="Videos">
            <div className="fondoVideos">
                <h2>
                    Videos
                </h2>
            </div>
            <div className="VideosInstructivos">

                <div className="Video1">
                    <iframe
                        width="400"
                        height="200"
                        src="https://www.youtube.com/embed/QVLjoVPJJ1o"
                        frameBorder="0"
                        allowFullScreen
                        title="Video 1"
                    ></iframe>
                </div>

                <div className="Video2">
                    <iframe
                        width="400"
                        height="200"
                        src="https://www.youtube.com/embed/v6mQBFVLjzc"
                        frameBorder="0"
                        allowFullScreen
                        title="Video2"
                    ></iframe>
                </div>

                <div className="Video3">
                    <iframe
                        width="400"
                        height="200"
                        src="https://www.youtube.com/embed/BDNRUeiwjCU"
                        frameBorder="0"
                        allowFullScreen
                        title="Video3"
                    ></iframe>
                </div>

                <div className="Video4">
                    <iframe
                        width="400"
                        height="200"
                        src="https://www.youtube.com/embed/v6mQBFVLjzc"
                        frameBorder="0"
                        allowFullScreen
                        title="Video4"
                    ></iframe>
                </div>
            </div>

        </div>

        </>
       
    )
}

export default Videos;
