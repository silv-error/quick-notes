import NavBar from "../components/NavBar";
import RateLimited from "../components/RateLimited";
import useGetNotes from "../hooks/useGetNotes";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const { notes, setNotes, isLoading, rateLimited } = useGetNotes();

  return (
    <div className="min-h-screen ">
      <NavBar />

      {rateLimited && <RateLimited />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {!notes.length && !rateLimited && <NotesNotFound />}

        {notes.length > 0 && !rateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
