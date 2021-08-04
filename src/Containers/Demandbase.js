import React from 'react'
import "../stylesheets/Demandbase.css"

class Demandbase extends React.Component {

    renderDemandbase = () => {
        return (
            (function(d,b,a,s,e){
                var t = b.createElement(a),
                    fs = b.getElementsByTagName(a)[0];
                    t.async = 1;
                    t.id = e;
                    t.src = s;
                    fs.parentNode.insertBefore(t,fs);
            })
            (window,document,'script','https://tag.demandbase.com/d409891be0b1d71b.min.js','demandbase_js_lib'))
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome</h1>
                <img src="https://alchemyinsurance.com/wp-content/uploads/2018/06/lightbulb.jpg" alt="light-bulb" />
                <div>{this.renderDemandbase()}</div>
                <iframe data-uri={"http://localhost:3000/demandbase"}></iframe>
            </div>
        )
    }
}

export default Demandbase

