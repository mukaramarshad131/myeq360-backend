import { CheckCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

import { TabsButtonData } from '@/projectData';

interface Filter {
  packages: boolean;
  license: boolean;
}
type FilterKey = keyof Filter;
interface TabsButtonProps {
  handleFilter: (value: FilterKey) => void;
  filter: Filter;
  value: string;
}

function TabsButton({ handleFilter, filter, value }: TabsButtonProps) {
  const data = TabsButtonData[value];

  return (
    <Row gutter={16} style={{ width: '100%', marginBottom: '10px' }}>
      {data.map((item: any) => {
        const isActive = filter[item.type as FilterKey];

        return (
          <Col
            lg={12}
            md={12}
            sm={24}
            xs={24}
            key={item.key || item.id}
            style={{ marginBottom: '10px' }}
          >
            <button
              className="font-mediumtext-black m-auto flex w-full  items-center justify-between rounded px-2 py-2 shadow-none  md:m-0"
              style={{
                backgroundColor: isActive ? '#F0F7FF' : '#fff',
                color: '#777777',
                border: '1px solid #CCE6FF',
              }}
              onClick={() => {
                handleFilter(item.type as FilterKey);
              }}
            >
              <div className="flex flex-col px-1 text-left">
                <span className="font-normal text-black"> {item.titleButton}</span>
                <span className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-[#888888]">
                  {' '}
                  {item.buttonDesc}
                </span>
              </div>
              <CheckCircleOutlined
                style={{
                  color: isActive ? 'white' : 'gray',
                  background: isActive ? '#0068D6' : '',
                  fontSize: '1.5rem',
                  borderRadius: '50%',
                }}
              />
            </button>
          </Col>
        );
      })}
    </Row>
  );
}

export default TabsButton;
