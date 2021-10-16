import React from 'react';
import { shallow, mount } from 'enzyme';
import TableFooter from './TableFooter';
import UserTable  from './UserTable';
import TableComponent from './TableComponent';
import { CircularProgress, Button, TableSortLabel } from '@material-ui/core';
import { act } from '@testing-library/react';
import api from '../../lib/api';

describe("Table Footer", () => {
  let defaultProps = {
    loading: false,
    error: null
  };

  it('shows only load more button', () => {
    const footer = shallow(<TableFooter {...defaultProps}/>);
    expect(footer.find(CircularProgress).exists()).toBe(false);
    expect(footer.find('#error-text').exists()).toBe(false);
    const button = footer.find(Button);
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual("Load More");
  });

  it('shows progress bar when loading', () => {
    const loadingProps = {
      ...defaultProps,
      loading: true
    };
    const footer = shallow(<TableFooter {...loadingProps}/>);
    expect(footer.find(CircularProgress).exists()).toBe(true);
  });

  it('shows error text and retry button when error', () => {
    const errorProps = {
      ...defaultProps,
      error: 'Unknown error'
    };
    const footer = shallow(<TableFooter {...errorProps}/>);
    expect(footer.find(CircularProgress).exists()).toBe(false);
    expect(footer.find({'data-testid':'error-text'}).exists()).toBe(true);
    const button = footer.find(Button);
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual("Retry");
  });
});

describe('User Table', () => {
  it('sorting order state is updated when sort label clicked', () => {
    const table = shallow(<UserTable data={[]} tableName={"User"}/>)
    const setSortOrder = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation(sortOrder => [sortOrder, setSortOrder]);

    table.find(TableSortLabel).simulate("click");
    expect(setSortOrder).toBeTruthy();
  })
})
