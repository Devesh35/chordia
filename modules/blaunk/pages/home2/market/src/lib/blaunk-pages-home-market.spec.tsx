import { render } from '@testing-library/react';

import BlaunkPagesHomeMarket from './blaunk-pages-home-market';

describe('BlaunkPagesHomeMarket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlaunkPagesHomeMarket />);
    expect(baseElement).toBeTruthy();
  });
});
