import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const useCreateNote = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createNote = async ({ title, content }) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/notes/", { title, content });
      if (res.statusText !== "OK") {
        throw new Error(res.data.error || "Something went wrong");
      }

      toast.success("Note created successfully");
    } catch (error) {
      if (error.response.status === 429) {
        toast.error("Slow down! You are creating notes too fast");
      } else {
        throw new Error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { createNote, isLoading };
};

export default useCreateNote;
