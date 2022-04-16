import './App.css';
function App() {
  return (
    <><link href="index.css" rel="stylesheet" type="text/css" /><div className="header">
      <div className="inner-header">
        <div id="logo"><a href="index.html"><h2>Lifestyle Store</h2></a></div>
        <div className="header-link"><a href="index.html"><h2>Login</h2></a></div>
        <div className="header-link"><a href="index.html"><h2>Signup</h2></a></div>
      </div>
    </div><div className="content">
        <div className="banner-image">
          <div className="inner-banner">
            <div className="inner-banner-image">
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="items">
            <a href="index.html">
               <img src="watch.jpg" className="thumbnail" alt="watch img"></img>
                <div className="caption">
                  <h2>Watches</h2>
                  <p>Choose among the best in the world</p>
                </div>
              </a>
          </div>
          <div className="items">
            <a href="index.html">
               <img src="camera.jpg" className="thumbnail" alt="camera img"></img>
                <div className="caption">
                  <h2>Cameras</h2>
                  <p>Choose among the best in the world</p>
                </div>
              </a>
          </div>
          <div className="items">
            <a href="index.html">
               <img src="shirt.jpg" className="thumbnail" alt="shirt img"></img>
                <div className="caption">
                  <h2>Shirts</h2>
                  <p>Choose among the best in the world</p>
                </div>
              </a>
          </div>
        </div>
      </div><footer>
        <div className="container">
          <p>NASHPimenta</p>
        </div>
      </footer></>

  );
}
if('serviceworker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered ', err));

}

export default App;
