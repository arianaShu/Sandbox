
import CreateNote from "@/app/notes/CreateNote";
import Note from "@/app/notes/Note";
import styles from './Notes.module.css';

interface NoteType {
    Content: string;
    Title : string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    updated: string;
}

async function getNotes() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/Notes/records?page=1&perPage=30',
        {cache: "no-store"}
    )
    const data = await res.json();
    return data?.items as NoteType[];
}

export default async function NotesPage() {
    const notes= await getNotes()

    return(
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note}/>;
                })}
            </div>

            <CreateNote />
        </div>
    );
}
