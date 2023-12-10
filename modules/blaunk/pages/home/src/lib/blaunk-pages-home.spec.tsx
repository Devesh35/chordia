import { render } from '@testing-library/react';

import BlaunkPagesHome from './blaunk-pages-home';

describe('BlaunkPagesHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlaunkPagesHome />);
    expect(baseElement).toBeTruthy();
  });
});
