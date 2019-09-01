import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLink } from '../actions/cogActions'

class CogLink extends Component {
  constructor(props){
    super(props);
    this.state= {
      link: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e){
    e.preventDefault();

    const linkDetails = {
      domain: e.target.domain.value,
      callback: e.target.callback.value,
    }

    this.props.createLink(linkDetails)
  }

  render() {
    return (
      <div>
        <h1>Create Link</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Domain: </label>
            <br />
            <input type="text" name="domain" />
          </div>
          <br />
          <div>
            <label>CallBack URL: </label>
            <br />
            <input type="text" name="callback" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <a>{this.props.link}</a>
      </div>
    );
  }
}

CogLink.propTypes = {
  createLink: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  link: state.cognitots.link
});

export default connect(mapStateToProps, {createLink})(CogLink);
