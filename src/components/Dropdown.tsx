import Theme from "../model/Theme";

type Props = {
  data: Theme[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown = ({ data, onChange }: Props) => {
  return (
    <select
      className="w-[1000px] rounded-md border bg-secondary p-2.5 shadow-sm outline-none focus:border-primary"
      onChange={onChange}
    >
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
