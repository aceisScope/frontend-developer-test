import React from 'react';
import { mount } from 'enzyme';
import TableFooter from './TableFooter';
import { CircularProgress, Button } from '@material-ui/core';

describe("Table Footer", () => {
  let defaultProps = {
    loading: false,
    error: false
  };

  it('shows only load more button', () => {
    const footer = mount(<TableFooter {...defaultProps}/>);
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
    const footer = mount(<TableFooter {...loadingProps}/>);
    expect(footer.find(CircularProgress).exists()).toBe(true);
  });

  it('shows error text and retry button when error', () => {
    const errorProps = {
      ...defaultProps,
      error: true
    };
    const footer = mount(<TableFooter {...errorProps}/>);
    expect(footer.find(CircularProgress).exists()).toBe(false);
    expect(footer.find('#error-text').exists()).toBe(true);
    const button = footer.find(Button);
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual("Retry");
  });
});