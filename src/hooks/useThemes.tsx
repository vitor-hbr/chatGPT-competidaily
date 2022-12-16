import { useState, useEffect } from "react";
import Theme from "../model/Theme";

export const useThemes = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/themes")
      .then((response) => response.json())
      .then((data) => {
        setThemes(data.themes);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { themes, loading, error };
};
