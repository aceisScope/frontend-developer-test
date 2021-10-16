const sortByDate = (data, direction) => {
  return data.sort((a, b) => {
    return direction === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
  });
}

const formatToDate = (timestamp) => {
  let date = new Date(timestamp);
  console.log(date, date.getMonth);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

export {
  sortByDate,
  formatToDate
}
