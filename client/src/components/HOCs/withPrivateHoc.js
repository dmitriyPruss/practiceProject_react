import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserAction } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const withPrivateHoc = (Component, props) => {
  const mapStateToProps = state => state.userStore;

  const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUserAction(data)),
  });

  class withHoc extends React.Component {
    componentDidMount () {
      const { data, getUser, history } = this.props;

      if (!data) {
        getUser(history.replace);
      }
    }

    render () {
      const { isFetching, history, match } = this.props;

      return (
        <>
          {isFetching ? (
            <Spinner />
          ) : (
            <Component history={history} match={match} {...props} />
          )}
        </>
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withHoc);
};

export default withPrivateHoc;
