import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetNote = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState(null);
  useEffect(() => {
    const fetchNote = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`/api/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  return { note, isLoading, setNote };
};

export default useGetNote;
