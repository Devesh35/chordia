import { render } from '@testing-library/react';

import BlaunkTypes from './blaunk-types';

describe('BlaunkTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlaunkTypes />);
    expect(baseElement).toBeTruthy();
  });
});
