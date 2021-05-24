import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (

        <div className="max-w-7xl mx-auto" style={{"backgroundColor": "red"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('reactjs')) {
    ReactDOM.render(<Example />, document.getElementById('reactjs'));
}
