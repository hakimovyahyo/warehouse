import React, {Component} from 'react';

class Greetin extends Component {


    state = {
        name: "Yahyo"
    }


    updateState = () => {

        if (this.setState.name === "Yahyo") {
            this.setState({name: "Yahyo"})
        } else {
            this.setState({name: "Qalaysan"})
        }
    }



    render() {
        return (
            <div>
                <div>
                    {this.state.name}
                </div>
                <button onClick={this.updateState}>Change name</button>
                <button onClick={this.updateState}>Reset name</button>
            </div>
        )

    }

}

export default Greetin;