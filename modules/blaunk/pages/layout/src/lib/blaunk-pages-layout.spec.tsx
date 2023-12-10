import { render } from '@testing-library/react';

import BlaunkPagesLayout from './blaunk-pages-layout';

describe('BlaunkPagesLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlaunkPagesLayout />);
    expect(baseElement).toBeTruthy();
  });
});
