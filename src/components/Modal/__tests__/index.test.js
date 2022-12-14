import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

describe('Modal', () => {
  it('renders', () => {
    render(<Modal onClose={mockToggleModal}
      currentPhoto={currentPhoto}></Modal>)
  });

  it('renders to match snapshot', () => {
    const { asFragment } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto} ></Modal>)
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Click event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}></Modal>);
      fireEvent.click(getByText('Close this modal'));
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});