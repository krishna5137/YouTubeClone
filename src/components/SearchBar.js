import React from 'react';

class SearchBar extends React.Component {
    state = { searchItem: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchItem);
    }

    render() {
        return(
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchItem} 
                            placeholder="Search"
                            onChange={e => this.setState({ searchItem: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;