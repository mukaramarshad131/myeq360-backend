import { businessLicense } from 'constants';

import { Button } from 'antd';

import exeLicense from '@/assets/images/license/businessExe.png';
import Card from '@/components/card';

function License() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly gap-5 pb-20">
      {businessLicense.map((data: any) => {
        return (
          <Card
            className="flex flex-col rounded pb-5 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
            style={{ paddingLeft: 10, paddingRight: 20 }}
          >
            <div className="flex flex-row items-center gap-5">
              <img src={exeLicense} alt="" width={150} height="auto" />
              <p className="w-[300px] pr-2 text-sm">
                <p className="bold mb-2 mt-5 text-lg font-semibold">{data.licenseTitle}</p>
                {data.licenseDesc}
              </p>
            </div>
            <div className=" ml-3 pt-3">
              <p className="text-lg">Category: Business Professionals & Teams</p>
              <span className="text-lg font-bold">{data.licensePrice}</span>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                style={{
                  background: '#0092B3',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: '20px',
                  padding: '17px 30px',
                  border: 'none',
                }}
                className="w-3/5"
              >
                Buy Now
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default License;
