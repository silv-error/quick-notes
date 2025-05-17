import { useEffect, useState } from "react";
import axios from "axios";

const useGetNotes = () => {
  const [rateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/notes/");

        if (!res.statusText === "OK") {
          throw new Error(res.data.error || "Something went wrong");
        }

        setNotes(res.data);
      } catch (error) {
        if (error.response.status === 429) {
          setRateLimited(true);
        } else {
          throw new Error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return { notes, isLoading, rateLimited, setNotes };
};

export default useGetNotes;
