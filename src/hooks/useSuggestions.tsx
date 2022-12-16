import { useState } from 'react';
import Suggestion from '../model/Suggestion';

type Props = {
  themeID?: number;
};

export const useSuggestions = ({ themeID }: Props) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | null>(null);

  const getSuggestions = (themeID) => {
    if (themeID) {
      setLoading(true);
      fetch(`/api/suggestions?theme="${themeID}"`)
        .then((response) => response.json())
        .then((data) => {
          setSuggestions(data.suggestions);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  };

  return { suggestions, loading, error, getSuggestions };
};
