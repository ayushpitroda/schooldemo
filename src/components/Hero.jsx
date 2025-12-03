export default function Hero({ src, title }) {
  return (
    <div className="container py-5 text-center">
      <img
        src={src}
        alt={title}
        className="img-fluid rounded shadow"
      />
    </div>
  );
}


