interface NotesSectionProps {
  notes?: string[];
}

const NotesSection = ({ notes }: NotesSectionProps) =>
  (notes?.length ?? 0) > 0 ? (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-3">Notes</h2>
      <ul className="list-disc list-inside space-y-2 text-base-content/70">
        {notes?.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  ) : null;

export default NotesSection;
