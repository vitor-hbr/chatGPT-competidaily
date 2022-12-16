import Suggestion from '../model/Suggestion';
import Theme from '../model/Theme';

type Props = {
  suggestions: Suggestion[];
  themes: Theme[];
};

export const SuggestionsList = ({ suggestions, themes }: Props) => {
  return (
    <div className={'flex w-[53%] flex-col justify-center self-center'}>
      <h3 className={'mt-[57px] mb-4 text-start text-3xl font-bold'}>
        Ideias de competidaily
      </h3>

      <ul className={''}>
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            className={
              'mb-4 flex flex-row items-center justify-between self-center rounded-[32px] bg-secondary p-4'
            }
          >
            <h5>{suggestion.text}</h5>
            <span className={'ml-8 rounded-3xl bg-red p-2'}>
              {themes[suggestion.themeID].name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
