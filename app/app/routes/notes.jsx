import { getStoredNotes, storeNotes } from "../data/notes";
import {redirect} from '@remix-run/node';
import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import {useLoaderData } from "@remix-run/react";
export default function Notes() {
    const notes = useLoaderData();
    return (
        <section>
            <h1>My Notes</h1>
            <NewNote />
            <NoteList notes={notes}/>
        </section>
    )
}
//data << && async || null 
export async function action({request}) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    //validation?? >> fut down > promise check data, >> min len

    if (noteData.title.trim().length < 5) {
        return {message: 'Invalid title must be atleast 5 chars long'};
    }
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);

    await storeNotes(updatedNotes);
    //redirect?? << maybe
    return redirect('/notes');
}


//gets
export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}