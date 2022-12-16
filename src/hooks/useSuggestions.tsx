import { useState, useEffect } from "react";
import Suggestion from "../model/Suggestion";
import Theme from "../model/Theme";

type Props = {
  themeID?: number;
};

export const useSuggestions = ({ themeID }: Props) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
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
  }, [themeID]);

  return { suggestions, loading, error };
};
