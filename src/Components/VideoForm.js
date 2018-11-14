import React, {Component} from 'react';

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {vidName: ''};
    }


    render () {
        return (
            //anything that affects the form should be an input tag
            <form onSubmit={event => this.onSubmit(event)}>
            <input type="text" value={this.state.vidName} onChange={event => this.onInputChange(event.target.value)} />
             <input type="submit" />
           </form>
            
        )
    }

        onInputChange(vidName) {
            this.setState({vidName})
    }
        onSubmit(event) {
            console.log('on submit working')
            event.preventDefault();
        }
}

export default VideoForm;