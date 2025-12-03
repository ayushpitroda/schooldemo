import Hero from "../components/Hero";
import Section from "../components/Section";
import MainLayout from "../layout/MainLayout";

export default function Services() {
  return (
    <MainLayout>
      <Hero title="Our Services" src="https://picsum.photos/id/240/1920/1080" />

      <div className="container py-5">

        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Our Services</h1>
          <p className="text-muted mt-2">
            What we offer to help students grow and excel
          </p>
          <img
            src="https://picsum.photos/id/241/1200/400"
            alt="Services Banner"
            className="img-fluid rounded shadow mt-4"
          />
        </div>

        {/* Intro Section */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="fw-semibold">Why Choose Our School?</h2>
            <p className="mt-3">
              We provide world-class educational services designed to develop
              confidence, leadership, creativity, and academic excellence in
              every student. Our programs help shape future-ready learners.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://picsum.photos/id/241/1200/400"
              alt="Programs"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <hr className="my-5" />

        {/* Service Cards Section */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">What We Provide</h2>
          <p className="text-muted">Our top educational programs & facilities</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Classroom Teaching"
              />
              <div className="card-body">
                <h5 className="card-title">Smart Classroom Learning</h5>
                <p className="card-text">
                  Interactive smart boards and digital content for modern
                  learning experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Sports"
              />
              <div className="card-body">
                <h5 className="card-title">Sports & Physical Activity</h5>
                <p className="card-text">
                  We focus on fitness, teamwork, and discipline with our sports
                  programs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Skill Development"
              />
              <div className="card-body">
                <h5 className="card-title">Skill Development Programs</h5>
                <p className="card-text">
                  Coding, arts, communication, leadership & other creative
                  skills training.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-5 pt-5">
          <h2 className="fw-bold text-center mb-4">Our Key Skills</h2>

          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="p-3 bg-light rounded shadow-sm">
                <h5>Academic Excellence</h5>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="p-3 bg-light rounded shadow-sm">
                <h5>Creative Thinking</h5>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="p-3 bg-light rounded shadow-sm">
                <h5>Team Collaboration</h5>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="p-3 bg-light rounded shadow-sm">
                <h5>Leadership Skills</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
