import React from 'react';
import moment from 'moment';

const formatDate = (dateString) => {
  const date = moment.utc(dateString);
  return date.format('YYYY-MM-DD');
};

export const DateSort = ({ publishTime }) => {
  const originalDate = publishTime;
  const formattedDate = formatDate(originalDate);

  return <div className='text-gray-400 text-sm'>{formattedDate}</div>;
};
