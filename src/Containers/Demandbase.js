import React from 'react'
import "../stylesheets/Demandbase.css"

class Demandbase extends React.Component {

    renderDemandbase = () => {
        return (
            (function(d,b,a,s,e){let t=b.createElement(a),
                fs=b.getElementsByTagName(a)[0];t.async=1;t.id=e;t.src=s;
                fs.parentNode.insertBefore(t,fs);})
            (window,document,'script','https://tag.demandbase.com/edfc31da3c22de40.min.js','demandbase_js_lib')
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderDemandbase()}
                <h1>Welcome</h1>
                <img src="https://alchemyinsurance.com/wp-content/uploads/2018/06/lightbulb.jpg" alt="light-bulb" />
            </div>
        )
    }
}

export default Demandbase

