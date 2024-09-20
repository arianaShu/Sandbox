// Note.tsx
interface NoteType {
    Content: string;
    Title : string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    updated: string;
}

import Link from "next/link";
import styles from './Notes.module.css';

export default function Note({ note }: { note: NoteType }) {
    const { id, Title, Content, created } = note || {};

    return (
        <Link href={`/notes/${id}`} className={styles.note}>
            <div>
                <h2>{Title}</h2>
                <h5>{Content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}