import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <Hero title="Contact Us" src="https://picsum.photos/id/250/1920/1080" />

      <form className="container py-5" style={{ maxWidth: "600px" }}>
  <div className="mb-3">
    <label className="form-label">Your Name</label>
    <input type="text" className="form-control" />
  </div>

  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" />
  </div>

  <div className="mb-3">
    <label className="form-label">Message</label>
    <textarea className="form-control" rows="5"></textarea>
  </div>

  <button className="btn btn-primary px-4">Send Message</button>
</form>

    </MainLayout>
  );
}
