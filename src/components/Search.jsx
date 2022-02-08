import React from "react";

class Search extends React.Component {
    state = {
        search: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field inline">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button onClick={() => this.props.searchMovies(this.state.search)} className="btn">
                        Search
                    </button>
                </div>
            </div>
        </div>
    }
}

export default Search;
