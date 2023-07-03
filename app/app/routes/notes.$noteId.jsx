import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "../data/notes";

export default function NoteDetail() {
    const note = useLoaderData();
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/notes">Back to notes</Link></li>
            </ul>
        </nav>
        <section>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </section>
        </>
    )
}


//loader function << 
export async function loader({params}) {
    const notes = await getStoredNotes();
    const noteId = params.noteId;
    const selectedNote = notes.find(note => note.id === noteId);
    return selectedNote;
}