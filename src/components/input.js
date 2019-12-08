import React, { Component } from 'react';

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        var fr;
    }
    
    handleFileRead = (event) =>{
        console.log(JSON.parse(this.fr.result));
        this.props.setSongsData(JSON.parse(this.fr.result));
    }
    fileUploaded = (event) => {
        event.preventDefault();
        console.log(this.fileInput.current.files[0])
        if(this.fileInput.current.files[0].type==='application/json')
        {
            this.fr = new FileReader();
            this.fr.onloadend = this.handleFileRead;
            this.fr.readAsText(this.fileInput.current.files[0]);
        }
    }
    render() {
        return (
            <React.Fragment>
                <center><input type="file" accept=".json" onChange={this.fileUploaded} ref={this.fileInput} /></center>
            </React.Fragment>
        )
    }
}

export default FileInput;