import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
     this.setState({ term: event.target.value });
     console.log(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <Form inline>
          <FormControl type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={this.state.term}
            onChange={this.onInputChange}
          />

        </Form>
      </div>
    );
  }
}

export default SearchBar;