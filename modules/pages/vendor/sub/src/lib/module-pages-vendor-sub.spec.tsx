import { render } from '@testing-library/react';

import ModulePagesVendorSub from './module-pages-vendor-sub';

describe('ModulePagesVendorSub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulePagesVendorSub />);
    expect(baseElement).toBeTruthy();
  });
});
