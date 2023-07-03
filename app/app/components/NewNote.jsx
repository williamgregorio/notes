import { Form, useActionData, useNavigation } from "@remix-run/react";
export const meta = () => {
  return [
    { title: "My Notes" },
    { name: "description", content: "Quick notes app" },
  ];
};
export default function NewNote() {
    const navigation = useNavigation();
    const data = useActionData();
    const isSubmitting = navigation.state === 'submitting'; 
  return (
    <Form method="post" id="note-form" action="/notes">
        {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Don't refresh" : 'Add Note'}</button>
      </div>
    </Form>
  );
}


export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

