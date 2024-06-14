import { Select, type SelectProps } from "antd";

type SelectComponentProps = SelectProps & {
  selectOptions: string[];
};

export default function SelectComponent({
  selectOptions,
  ...props
}: SelectComponentProps) {
  return (
    <Select style={{ maxWidth: 120, width: "100%" }} {...props}>
      {selectOptions.map((option) => (
        <Select.Option key={option} value={option}>
          {option}
        </Select.Option>
      ))}
    </Select>
  );
}
