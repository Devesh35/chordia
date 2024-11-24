import { render } from '@testing-library/react';

import ModulePagesVendorReq from './module-pages-vendor-req';

describe('ModulePagesVendorReq', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulePagesVendorReq />);
    expect(baseElement).toBeTruthy();
  });
});
