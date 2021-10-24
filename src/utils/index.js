import { formatISO, compareAsc, compareDesc } from 'date-fns'

const sortByDate = (data, direction) => {
  return data.sort((a, b) => {
    return direction === 'asc' ? compareAsc(a.timestamp, b.timestamp) : compareDesc(a.timestamp, b.timestamp);
  });
}

const formatToDate = (timestamp) => {
  let date = new Date(timestamp);
  return formatISO(date, { representation: 'date' }) ;
}

export {
  sortByDate,
  formatToDate
}
