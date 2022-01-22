/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import { makeSelectUser } from '../LoginPage/selectors';
import reducer from './reducer';
import saga from './saga';
import loginReducer from '../LoginPage/reducer';
import loginSaga from '../LoginPage/saga';

export function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Beranda</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <div className="row">
        {/* Left col */}
        <section className="col-lg-12 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  Sales
                  </h3>
                  <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                      <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                      </li>
                  </ul>
                  </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                  <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                      <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                  <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                      <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                  </div>
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}
          </section>
      </div>
    </div>
  );
}

HomePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
