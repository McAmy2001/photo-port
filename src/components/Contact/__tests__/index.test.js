import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact Form component', () => {
  // Baseline test
  it('renders', () => {
    render(<ContactForm></ContactForm>);
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('h1 tag is correct', () => {
  it('renders correct text', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('contact')).toHaveTextContent('Contact me');
  })
});

describe('button has correct text', () => {
  it('renders correct text', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
});