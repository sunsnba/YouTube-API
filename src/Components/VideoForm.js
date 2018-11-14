import React, {Component} from 'react';

class VideoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {term: ''};
    }


    render () {
        return (
            //anything that affects the form should be an input tag
            <form onSubmit={event => this.onSubmit(event)}>
            <input type="text" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
             <input type="submit" />
           </form>
            
        )
    }

        onInputChange(term) {
            this.setState({term})
            this.props.onSearchChange(term)
    }
        onSubmit(event) {
            console.log('on submit working')
            event.preventDefault();
            this.setState({term: ''})
        }
}

export default VideoForm;