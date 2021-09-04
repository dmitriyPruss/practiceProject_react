import React from 'react';
import { connect } from 'react-redux';
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const withOnlyNotAuthorizedUserHoc = Component => {
  const mapStateToProps = state => state.userStore;

  const mapDispatchToProps = dispatch => ({
    checkAuth: data => dispatch(onlyForNotAuthorize(data)),
  });

  class withHocForLoginSignUp extends React.Component {
    componentDidMount () {
      const { checkAuth, history } = this.props;

      checkAuth(history.replace);
    }

    render () {
      const { isFetching, data, history } = this.props;

      if (isFetching) {
        return <Spinner />;
      }
      if (!data) {
        return <Component history={history} />;
      }
      return null;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withHocForLoginSignUp);
};

export default withOnlyNotAuthorizedUserHoc;
