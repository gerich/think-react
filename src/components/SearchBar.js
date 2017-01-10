import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value,
      this.inStockOnly.checked
    );
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            id="search-products"
            ref={(input) => this.inStockOnly = input}
            onChange={this.handleChange}
          />
          {' '}
          <label htmlFor="search-products">Only show products in stock</label>
        </p>
      </form>
    );
  }
}

export default SearchBar;
