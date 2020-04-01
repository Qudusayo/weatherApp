import React from 'react'
import './form.css'

const Form = props => {
    return (
        <form onSubmit={props.loadweather}>
            <div className="container">
                <div>{props.error ? error(): null}</div>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
                    </div>
                    <div className="col-md-3 mt-md-0 py-2 text-md-left">
                        <button className="btn  btn-warning">Get Weather</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and  Country
        </div>
    );
}

export default Form;