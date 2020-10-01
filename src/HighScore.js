import React, {Component} from 'react';


class HighScore extends Component{

    render(){
        if(this.props.overTEn){
            return(
                <h3>
                    Beat HighScore of 10!

                    <button onClick={this.props.onReset}>Reset</button>
                </h3>
        )}else{
            return null
        }
    }
}

export default HighScore;