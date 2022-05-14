import React, { useCallback } from 'react';
import { Route, Navigate } from 'react-router-dom';

// AUTH related methods
// import { useSelector } from 'react-redux';
// import { getLoggedInOperator } from '../util/auth';

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={props => {
        // if (isAuthProtected && !getLoggedInOperator())
          return (
            <Navigate
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );

        // if (!checkPermissionRoles())
          return (
            <Navigate
              to={{ pathname: '/404', state: { from: props.location } }}
            />
          );

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default AppRoute;
