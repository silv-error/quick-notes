import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const useUpdateNote = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const updateNote = async ({ id, title, content }) => {
    setIsLoading(true);
    try {
      await axios.put(`/api/notes/${id}`, { title, content });
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setIsLoading(false);
    }
  };

  return { updateNote, isLoading };
};

export default useUpdateNote;
