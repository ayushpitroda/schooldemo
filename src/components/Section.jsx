export default function Section({ title, content }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">{title}</h2>
        <p className="text-muted">{content}</p>
      </div>
    </section>
  );
}
