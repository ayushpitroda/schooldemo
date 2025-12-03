import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>

      {/* HERO SECTION */}
      <Hero
        src="https://picsum.photos/id/260/1920/1080"
        title="Welcome to Our Digital Agency"
      />

      {/* FEATURES SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h4 className="fw-bold mb-3">Modern Web Design</h4>
                <p className="text-muted">
                  Clean, responsive, and SEO-friendly websites designed for modern needs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h4 className="fw-bold mb-3">Fast Development</h4>
                <p className="text-muted">
                  We deliver high-performance applications with optimized code and fast load times.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h4 className="fw-bold mb-3">Full Support</h4>
                <p className="text-muted">
                  Get reliable maintenance, updates, and guidance whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">About Our Company</h2>
              <p className="text-muted">
                We are a creative digital agency focused on delivering high-quality web development,
                mobile-friendly designs, and branding solutions that help businesses grow.
              </p>
              <a href="/about" className="btn btn-primary mt-3">Learn More</a>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://via.placeholder.com/500x350"
                className="img-fluid rounded shadow"
                alt="About"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Services</h2>
          <p className="text-muted mb-5">We offer a wide range of digital services.</p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Website Development</h5>
                  <p className="card-text">Custom React, Django, and Wagtail development.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">UI/UX Design</h5>
                  <p className="card-text">Modern user experiences with responsive layouts.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Branding & Marketing</h5>
                  <p className="card-text">Helping brands develop identity and reach more customers.</p>
                </div>
              </div>
            </div>
          </div>

          <a href="/services" className="btn btn-outline-primary mt-4">View All Services</a>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Latest Projects</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/400" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Project One</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/400" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Project Two</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/400" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Project Three</h5>
                </div>
              </div>
            </div>

          </div>

          <a href="/portfolio" className="btn btn-outline-primary mt-4">See Full Portfolio</a>
        </div>
      </section>

      {/* CALL-TO-ACTION */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Start Your Project?</h2>
          <p className="text-muted mb-4">
            Contact us today and let's build something amazing together.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
        </div>
      </section>

    </MainLayout>
  );
}
