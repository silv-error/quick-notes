import Note from "../models/note.model.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().lean().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error(`Error in getAllNotes controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).lean();
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error(`Error in getAllNotes controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (error) {
    console.error(`Error in createNote controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error(`Error in updateNote controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error(`Error in deleteNote controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
