import { render } from '@testing-library/react';

import ModulePagesVendorLogi from './module-pages-vendor-logi';

describe('ModulePagesVendorLogi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulePagesVendorLogi />);
    expect(baseElement).toBeTruthy();
  });
});
