import { render } from '@testing-library/react';

import BlaunkDesign from './blaunk-design';

describe('BlaunkDesign', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlaunkDesign />);
    expect(baseElement).toBeTruthy();
  });
});
