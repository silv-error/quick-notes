import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useGetNotes from "./useGetNotes";
import { useNavigate } from "react-router";

const useDeleteNote = () => {
  const navigate = useNavigate();

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      if (error.response.status === 429) {
        toast.error("You are being rate limited");
      } else {
        throw new Error(error);
      }
    }
  };

  return { deleteNote };
};

export default useDeleteNote;
