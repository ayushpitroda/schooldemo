import Hero from "../components/Hero";
import Section from "../components/Section";
import MainLayout from "../layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
        <Hero title="About Us" src="https://picsum.photos/id/241/1920/1080" />
        testing 
      <div className="container py-5">

        <h1 className="text-center mb-4">About Our School</h1>

        <img
          src="https://picsum.photos/id/241/500/300"
          alt="About Banner"
          className="img-fluid rounded shadow mb-4"
        />

        <div className="row">
          <div className="col-md-6">
            <h3>Who We Are</h3>
            <p>
              We are a modern educational institute focused on excellence in
              academics and student development. Our programs are designed to
              prepare students for future success.
            </p>
          </div>

          
        </div>

        <hr className="my-5" />

        <div className="row">
          <div className="col-md-4">
            <img
              src="https://picsum.photos/id/241/500/300"
              className="img-fluid rounded"
              alt="Vision"
            />
            <h4 className="mt-3">Our Vision</h4>
            <p>
              To empower students with the right skills and knowledge.
            </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://picsum.photos/id/241/500/300"
              className="img-fluid rounded"
              alt="Mission"
            />
            <h4 className="mt-3">Our Mission</h4>
            <p>
              Creating a positive environment where every student thrives.
            </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://picsum.photos/id/241/500/300"
              className="img-fluid rounded"
              alt="Values"
            />
            <h4 className="mt-3">Core Values</h4>
            <p>
              Integrity, respect, teamwork, and passion for growth.
            </p>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
