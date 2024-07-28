import { CheckCircleOutlined } from '@ant-design/icons';

import { TabsButtonData } from '@/constants';

interface Filter {
  packages: boolean;
  license: boolean;
}
type FilterKey = keyof Filter;
interface TabsButtonProps {
  handleFilter: (value: FilterKey) => void;
  filter: Filter;
}

function TabsButton({ handleFilter, filter }: TabsButtonProps) {
  return (
    <>
      {TabsButtonData.map((item: any) => {
        const isActive = filter[item.type as FilterKey];

        return (
          <>
            {' '}
            <button
              className="font-mediumtext-black m-auto flex w-2/4 items-center justify-between rounded px-2 py-2 shadow-none max-md:w-full md:m-0"
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
                <span className="text-[#888888] max-xl:w-[250px] max-xl:overflow-hidden max-xl:text-ellipsis max-xl:whitespace-nowrap">
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
          </>
        );
      })}
    </>
  );
}

export default TabsButton;
