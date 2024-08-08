import { Row } from 'antd';

import MappedComponent from '@/components/mapped-componet';
import { businessLicenses } from '@/projectData';

import License from '../license/license';

function BusinessLicense() {
  return (
    <div>
      <h1 className="mb-8 mt-8 p-5 text-center text-3xl font-semibold text-[#0092B3]">
        Business Professionals & Teams
      </h1>

      <Row gutter={[32, 32]}>
        <MappedComponent array={businessLicenses} Component={License} />
      </Row>
    </div>
  );
}

export default BusinessLicense;
