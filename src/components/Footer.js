import React from 'react';
const Footer = () => {
    return (
        <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Cohort 2.2 Soccer</h5>
              <p className="grey-text text-lighten-4"> This website was created by Cohort v2.2 for a constant viewership of livescores. Long live football</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Contact Us</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Tumblr</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center">
          © 2019 Copyright LearnFactory
          
          </div>
        </div>
      </footer>
    )
}

export default Footer;