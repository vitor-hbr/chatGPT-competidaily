import Suggestion from "../model/Suggestion";
import Theme from "../model/Theme";

type Props = {
  suggestions: Suggestion[];
  themes: Theme[];
};

export const SuggestionsList = ({ suggestions, themes }: Props) => {
  return (
    <div>
      <h3>Ideias de competidaily</h3>

      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            <h5>{suggestion.text}</h5>
            <span>{themes[suggestion.id].name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
