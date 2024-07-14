import { Col, Row } from 'antd';

import businessExe from '@/assets/images/license/businessExe.png';
import { Props } from '@/components/skill-assessment-result/progress-indicator';
import { useThemeToken } from '@/theme/hooks';

export default function License({ item }: Props) {
  const themeToken = useThemeToken();

  return (
    <Col lg={12} md={12} sm={24} xs={24}>
      <Row
        className="!mx-0 mb-8 rounded-2xl p-3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] lg:flex-col"
        gutter={[16, 16]}
      >
        <Col
          span={24}
          md={12}
          xl={8}
          className=" mx-auto flex flex-row flex-col items-center justify-center "
        >
          <img src={businessExe} alt="" />
          <p className="text-[15px]">{item.licensePrice}</p>
          <div>
            <a
              href="https://blog.slashspaces.com"
              target="_blank"
              className="mt-5 text-base font-semibold opacity-80"
              style={{ color: themeToken.colorPrimaryTextActive }}
              rel="noreferrer"
            >
              <span className="text-black"> Category:</span> Business Professionals & Teams
            </a>
          </div>
          <button
            className=" font-mediumtext-black m-auto flex w-4/5 items-center justify-center rounded-lg px-2 py-1 shadow-none md:m-0"
            style={{ backgroundColor: themeToken.colorPrimary, color: '#fff' }}
            onClick={() => window.open('https://discord.gg/fXemAXVNDa')}
          >
            <span className="ml-2  font-normal">Buy Now</span>
          </button>
        </Col>

        <Col span={24} md={12} xl={16} className="w-full">
          <div
            className="mt-4 text-lg font-semibold md:text-xl"
            style={{ color: themeToken.colorPrimaryActive }}
          >
            <h4>{item.licenseTitle}</h4>
          </div>
          <div
            style={{ color: themeToken.colorPrimaryTextActive }}
            className="mx-auto mb-6 mt-4 max-w-[300px] text-sm opacity-80 md:mx-0"
          >
            {item.licenseDesc}
          </div>
        </Col>
      </Row>
    </Col>
  );
}
