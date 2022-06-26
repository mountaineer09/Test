const Paralax2 = () => {
    return (
        <div className="container">

            <head>

                <style jsx>{`

body, html {
    height: 100%;
    margin: 0;
    font: 400 15px/1.8 "Lato", sans-serif;
    color: #777;
  }
  
  .bgimg-1, .bgimg-2, .bgimg-3 {
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
  }
  .bgimg-1 {
    background-image: url("unsplash2.jpg");
    min-height: 100%;
  }
  
  .bgimg-2 {
    background-image: url("unsplash3.jpg");
    min-height: 400px;
  }
  
  .bgimg-3 {
    background-image: url("unsplash4.jpg");
    min-height: 400px;
  }
  
  .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
  }
  
  .caption span.border {
    background-color: #111;
    color: #fff;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 10px;
  }
  
  h3 {
    letter-spacing: 5px;
    text-transform: uppercase;
    font: 20px "Lato", sans-serif;
    color: #111;
  }
  
  /* Turn off parallax scrolling for tablets and phones */
  @media only screen and (max-device-width: 1024px) {
    .bgimg-1, .bgimg-2, .bgimg-3 {
      background-attachment: scroll;
    }
  }
`}</style>
            </head>

            <body>

                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border">SCROLL DOWN</span>
                    </div>
                </div>

                <div>
                    <h3>Parallax Demo</h3>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>

                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border">LESS HEIGHT</span>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    </div>
                </div>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border">SCROLL UP</span>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    </div>
                </div>

                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border">COOL!</span>
                    </div>
                </div>

            </body>



        </div >
    );
}

export default Paralax2;