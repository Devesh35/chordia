import { render } from '@testing-library/react';

import ModulePagesVendorAd from './module-pages-vendor-ad';

describe('ModulePagesVendorAd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulePagesVendorAd />);
    expect(baseElement).toBeTruthy();
  });
});
