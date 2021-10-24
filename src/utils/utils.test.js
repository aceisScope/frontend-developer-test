import { sortByDate, formatToDate } from ".";

describe('sortByDate function', () => {
  const mock_date1 = { timestamp: new Date('2020/2/15').getTime() },
    mock_date2 = { timestamp: new Date('2020/2/14').getTime() },
    mock_date3 = { timestamp: new Date('2020/1/24').getTime()};

  it('can sort date by descending order', () => {
    const mockDates = [mock_date2, mock_date3, mock_date1];
    const sorted = sortByDate(mockDates, 'desc');
    expect(sorted[0]).toEqual(mock_date1);
    expect(sorted[2]).toEqual(mock_date3);
  })
});

describe('formatToDate function', () => {
  it('can formate timestamp to yyyy-m-d', () => {
    const mock_date = new Date('2020/2/15').getTime();
    expect(formatToDate(mock_date)).toEqual('2020-02-15');
  })
})