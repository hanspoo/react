import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {

  render() {

    return (
      <div><form>
          <input type="text" onChange={this.props.onSearch}
              className="form-control" placeholder="Filtrar..." />
        </form>
      </div>
    );
  }
}


SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}
