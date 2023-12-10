import { render } from '@testing-library/react';

import BlaunkConfig from './blaunk-config';

describe('BlaunkConfig', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlaunkConfig />);
    expect(baseElement).toBeTruthy();
  });
});
