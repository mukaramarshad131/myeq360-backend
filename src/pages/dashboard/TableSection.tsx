import { Table, TableProps } from "antd";
import { useState } from "react";
import SectionHeading from '../../components/ui/SectionHeading'
import SelectComponent from "../../components/ui/SelectComponent";
import { productData } from '../../../constants'

import img from '../../assets/img/img.jpg'

export type DataType = {
  key: string;
  product: Product;
  stock: number;
  price: number;
  totalSales: number;
}

type Product = {
  image: string;
  name: string;
  description: string;
};

export function TableSection() {
  const [timeSpan, setTimeSpan] = useState("Last 7 Days");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Product Name",
      key: "name",
      dataIndex: "product",
      render: (_, product) => (
        <div className="flex md:items-center gap-4 flex-col md:flex-row">
          <img
            className="w-28 flex-shrink-0 rounded-lg h-16 block"
            src={img}
            alt=""
            width={80}
            height={80}
          />
          <div>
            <h5 className="text-slate-800 font-bold capitalize">
              {product?.product.name}
            </h5>
            <p className="text-slate-400 line-clamp-2 hidden lg:block">
              {product?.product.description}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text) => <p className="text-slate-800 ">{text} in Stock</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <p className="text-slate-800 font-bold">$ {text}</p>,
    },
    {
      title: "Total Sales",
      dataIndex: "totalSales",
      key: "total-sales",
    },
  ];


  return (
    <div className="w-full bg-white pb-24 rounded-xl space-y-6 mt-24 z-10">
      <div className="flex gap-4 justify-between p-6 pb-0">
        <SectionHeading>Product Sell</SectionHeading>
        <SelectComponent
          selectOptions={["Last 7 Days", "Last 30 Days", "Last 60 Days"]}
          value={timeSpan}
          onChange={(e) => setTimeSpan(e)}
          className="w-full max-w-32"
        />
      </div>
      <Table columns={columns} dataSource={productData} />
    </div>
  );
}
