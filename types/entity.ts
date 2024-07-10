import { TablePaginationConfig } from 'antd';
import { FC, ReactNode } from 'react';

import { BasicStatus, PermissionType } from './enum';

export interface UserToken {
  accessToken?: string;
  refreshToken?: string;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  password?: string;
  avatar?: string;
  role?: Role;
  status?: BasicStatus;
  permissions?: Permission[];
}

export interface Organization {
  id: string;
  name: string;
  status: 'enable' | 'disable';
  desc?: string;
  order?: number;
  children?: Organization[];
}

export interface TableInterface {
  showFilter?: boolean;
  title: string;
  pagination?: false | TablePaginationConfig | undefined;
  addModal?: boolean;
  dataSource: [];
  column: [];
  modalBtnTitle?: string;
  modalTitle?: string;
  modalChildren?: ReactNode;
}

export interface InputInterface {
  type: string;
  disabled?: boolean;
  inputName: string;
  placeHolder?: string;
  className?: string;
  allowClear?: boolean;
  onChange?: VoidFunction;
  defaultValue?: string | number | undefined;
  maxLength?: number;
  inputLabel?: string | ReactNode | undefined;
  showCount?: boolean;
  mandatory?: boolean;
}

export type Series = {
  name: string;
  data: number[];
};
export interface ChartInterface {
  dataLable: string[];
  series: number[] | Series[];
  height?: number;
  width?: number;
}

export interface ChartCardInterface {
  title: string | ReactNode;
  children: ReactNode;
  titleBorderWidth?: string | number;
  titleBorderColor?: string;
  titleCenter?: boolean;
  titleSize?: string;
}
export interface MappedComponentProps<T> {
  array: T[];
  Component: FC<{ item: T }>;
}
export interface Permission {
  id: string;
  parentId: string;
  name: string;
  label: string;
  type: PermissionType;
  route: string;
  status?: BasicStatus;
  order?: number;
  icon?: string;
  component?: string;
  hide?: boolean;
  hideTab?: boolean;
  frameSrc?: string;
  newFeature?: boolean;
  children?: Permission[];
}

export interface Role {
  id: string;
  name: string;
  label: string;
  status: BasicStatus;
  order?: number;
  desc?: string;
  permission?: Permission[];
}
