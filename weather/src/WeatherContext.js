import React from 'react';
import * as api from 'api/api'
import createAsyncDispatcher from 'asyncActionUtils';

const WeatherContext = () => {
  api.getWhearder();
  return (
    <div>
      
    </div>
  );
};

// export default WeatherContext;

export const getWeathers = createAsyncDispatcher("GET_WEATHERS", api.getWhearder);