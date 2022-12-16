import Theme from '../model/Theme';

type Props = {
  data: Theme[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown = ({ data, onChange }: Props) => {
  return (
    <select
      className="inline-block rounded-3xl bg-secondary-100 p-1 shadow-sm outline-none focus:border-primary"
      onChange={onChange}
    >
      {data.map((item) => (
        <option key={item.id} value={item.id} className={'ml-5'}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
