import React from "react";

export class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            desiredWord: "",

        }

        this.searchWord = this.searchWord.bind(this)
    }

searchWord(state, keyword) {
       let newState;
        if (state.length && keyword) {
           newState = state.filter((row) => {
               return Object.values(row).toString().includes(keyword)
           })
       }
    this.setState({newState: newState})
}

componentDidMount() {
        this.setState({searchingState: this.props.state});
        setTimeout(()=>{console.log(this.state)},3000)
}

    render() {
        const {desiredWord} = this.state;
        const {newState} = this.state;
        return(
            <>
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={()=>{this.props.updateState(newState)}}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path
                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg></button>
                        </div>
                        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon"
                               aria-describedby="button-addon1" onChange={(event) => {
                                   const {searchingState} = this.state;
                                   this.setState({desiredWord: event.target.value});
                                   this.searchWord(searchingState, event.target.value)}}/>
                    </div>
                </div>
                <div id="Bin">
                    { newState &&
                    newState.map((row) => {
                        console.log(typeof Object.values(row).toString())
                        return <p onClick={()=> {this.props.updateState([row], desiredWord)}}>{(Object.values(row).toString() !== '0') ? Object.values(row).toString(): 'null'}</p>
                    })
                    }
                </div>
            </>
        )
    }
}