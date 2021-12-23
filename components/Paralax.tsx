const Paralax = () => {
    return (
        <div className="container">

            <div className="myPara" id="img-1">
                <div className="text">
                    <span className="border" >COOL PLACE</span>
                </div>
            </div>
            <div id="page-1">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit vehicula venenatis. Aenean risus nulla, tincidunt et erat et, ornare blandit justo. Aenean dictum dui velit, non feugiat tortor lacinia eu. Cras vel bibendum est. Morbi ultrices tellus lectus, sit amet mattis diam condimentum eget. Nullam nec ex a leo tempus elementum. Fusce leo libero, auctor et est eu, imperdiet efficitur orci. Sed sit amet auctor massa. Phasellus a mollis erat. Aenean leo ante, fermentum et mi et, varius rutrum sapien. Proin a rhoncus dui. Donec tincidunt interdum ornare.
                    </p>
                    <p>
                        Donec scelerisque tempus magna et faucibus. Fusce porta, nisi sed cursus semper, metus libero imperdiet leo, vitae feugiat dolor augue ut leo. Maecenas ac ex dapibus, elementum odio eu, facilisis ipsum. Praesent sapien nisi, rutrum vitae sagittis ac, commodo vel nibh. Maecenas tincidunt sit amet tellus ultrices venenatis. Quisque erat orci, mattis vitae arcu nec, consectetur consequat eros. Etiam risus orci, tincidunt sed justo nec, tincidunt ultrices mauris. Quisque sollicitudin tempor velit sed suscipit. Aenean vitae nulla quam.

                        Proin dolor nibh, porta at risus eu, interdum pharetra metus. Phasellus imperdiet in lectus quis vestibulum. Sed mollis, tortor pulvinar consectetur vulputate, est massa pharetra magna, eget convallis sapien metus eu turpis. Nulla risus mauris, imperdiet non purus at, congue pellentesque justo. Fusce eget fermentum leo. Fusce at dignissim lectus. Curabitur sed purus neque. Quisque in quam in libero blandit volutpat. Suspendisse semper bibendum ullamcorper. Vestibulum viverra diam a rhoncus condimentum. Duis egestas maximus quam sit amet cursus. Aliquam erat volutpat. Maecenas lobortis est at posuere ultricies. Aliquam erat volutpat. Ut nulla augue, vestibulum quis efficitur lobortis, convallis ac dui.
                    </p>
                </div>
            </div>
            <div className="myPara" id="img-2">
                <div className="text">
                    <span className="border" >Welcome fall</span>
                </div>
            </div>
            <div id="page-2">
                <h2>The next photo don't connect to previous. It's just a simple demo.</h2>
            </div>
            <div className="myPara" id="img-3" >
                <div className="text" >
                    <span className="border">It was my paralax demo</span>
                </div>
            </div>
            <style jsx>{`

body, html {
    height: 100%;
				padding:0;
				margin:0;
				overflow-x: hidden;
}


.container {
	margin: auto;
}

.myPara{
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
	position: relative;
	margin:0;
}

#img-1{
	background-image:  url("https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
}

#img-2 {
	background-image: url("http://img07.deviantart.net/c0a5/i/2012/353/e/2/autumn_railroad_by_celem-d5ogfhq.jpg");
}

#img-3 {
	background-image: url("http://cdn.litlepups.net/2016/02/14/beautiful-cats-pictures-free-download-hd-wallpapers-12.jpg");
}

.text {
		position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #fff;
		font-size: 30px;
		padding: 20px;
	
}

.text span.border {
	letter-spacing: 10px;
}

#page-1 {
	text-align: justify;
	background-color:#18B7E0;
	background-size:cover;
	//position: absolute;
	padding: 150px;
	font-size: 18px;
	opacity: 0.8;	
}

#page-2{
	background-color: #2E1B36;
	background-size: cover;
	margin: 0;
	position: relative;
	padding: 30px;
	color: white;
}







`}</style>


        </div>
    );
}

export default Paralax;