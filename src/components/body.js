import React, { Component } from 'react';
import ButtonClass from './buttons';
import ViewTables from './viewTables';

class Body extends Component {

    constructor(props){
        super(props)
        this.state={'display':-1,'range':['All Time']};
    }
    componentDidMount()
    {
        this.setData();
    }
    setData = () =>{
        let obj = {
            'allTime': []
        }
        var rangeArr = ['All Time']
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].title.substring(0, 11).toLowerCase() == "listened to") {
                if (obj[this.props.data[i].time.split('-')[0]] == undefined) {
                    obj[this.props.data[i].time.split('-')[0]] = [];
                    obj[this.props.data[i].time.split('-')[0]].push({'song':this.props.data[i].title.substring(12),'artist':this.props.data[i].description})
                    rangeArr.push(this.props.data[i].time.split('-')[0])
                }
                else {
                    obj[this.props.data[i].time.split('-')[0]].push({'song':this.props.data[i].title.substring(12),'artist':this.props.data[i].description})
                }
                obj.allTime.push({'song':this.props.data[i].title.substring(12),'artist':this.props.data[i].description})
            }
        }
        this.setState({'data': obj, 'range': rangeArr, 'display': -1 })

    }

    changeDisplay = (index) => {
        let obj = { ...this.state }
        obj['display'] = index;
        this.setState(obj);
    }



    render() {
        if (this.state.display == -1) {
            return (
                <div id="buttonRow" className="row">
                    {this.state.range.map((rangeVal, index) => (<ButtonClass dispFun={this.changeDisplay} buttonName={rangeVal} key={index} val={index} />))}
                    </div>
            )
        }
        else {
            let val = this.state.range[this.state.display], dataToPass;
            if(val=="All Time"){dataToPass = this.state.data['allTime'];}else{dataToPass = this.state.data[val];}
            console.log(dataToPass)
            return (
                <React.Fragment>
                <div id="buttonRow" className="row">
                    {this.state.range.map((rangeVal, index) => (<ButtonClass dispFun={this.changeDisplay} buttonName={rangeVal} key={index} val={index} />))}
                </div>
                <ViewTables data={dataToPass}/>
                </React.Fragment>
            )
        }

    }
}

export default Body