import React, {Component} from 'react';

class ButtonClass extends Component {
    returnIndex = () =>{
        this.props.dispFun(this.props.val)
    }
    render()
    {
        return <button onClick={this.returnIndex}>{this.props.buttonName}</button>
    }
}

export default ButtonClass;