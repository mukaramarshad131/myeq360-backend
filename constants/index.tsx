// import {
//     MailOutlined,
//     ProductOutlined,
//     MoneyCollectOutlined,
//     SettingOutlined,
//     UserOutlined,
//   } from "@ant-design/icons";
  import { ReactNode } from "react";
  import { DataType } from "../src/components/Dashboard/TableSection";
import { MailOutlined, MoneyCollectOutlined, ProductOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
  
  export const stats = [
    {
      image: "/doller.png",
      title: "Earning",
      description: "this month",  
      price: "$ 198k",
      value: "↑ 38.5%",
    },
    {
      image: "/note.png",
      title: "Orders",
      description: "this month",
      price: "$ 2.4k",
      value: "↓ 2%",
    },
    {
      image: "/balance.png",
      title: "Balance",
      description: "this month",
      price: "$ 198k",
      value: "↓ 2%",
    },
  
    {
      image: "/sales.png",
      title: "Total Sales",
      description: "this week",
      price: "$ 198k",
      value: "↑ 11%",
    },
  ];
  
  export const durationOptions = ["Quaterly", "Half-year", "Yearly"];
  
  export type MenuItem = {
    key: string;
    label: string;
    icon?: ReactNode;
  };
  
  export const navBarLinks: MenuItem[] = [
    {
      key: "/",
      label: "Dashboard",
      icon: <SettingOutlined/>,
    },
    {
      key: "/products",
      label: "Products",
      icon: <ProductOutlined />,
    },
    {
      key: "/customers",
      label: "Customers",
      icon: <UserOutlined />,
    },
    {
      key: "/income",
      label: "Income",
      icon: <MoneyCollectOutlined/>,
    },
    {
      key: "/promote",
      label: "Promote",
      icon: <MailOutlined/>,
    },
  ];
  
  export const productData: DataType[] = [
    {
      key: "1",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract-glass.webp",
        name: "Abstract 3D",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "2",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/mural-abstract.webp",
        name: "doller",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "3",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract1.jpg",
        name: "balance",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "4",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract-glass.webp",
        name: "Abstract 3D",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "5",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/mural-abstract.webp",
        name: "doller",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "6",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract1.jpg",
        name: "balance",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
  ];
  