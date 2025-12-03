import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";

export default function Portfolio() {
  return (
    <MainLayout>
      <Hero title="Portfolio" src="https://picsum.photos/id/265/1920/1080" />

      <div className="container py-5">

        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Our Portfolio</h1>
          <p className="text-muted mt-2">
            A showcase of our activities, achievements, and projects.
          </p>
          <img
            src="https://picsum.photos/id/241/1200/400"
            alt="Portfolio Banner"
            className="img-fluid rounded shadow mt-4"
          />
        </div>

        {/* Portfolio Grid */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Featured Work</h2>
          <p className="text-muted">Here are some highlights of our school work</p>
        </div>

        <div className="row g-4">

          {/* Portfolio Item 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Science Fair"
              />
              <div className="card-body">
                <h5 className="card-title">Science Fair Exhibition</h5>
                <p className="card-text">
                  Students presented innovative science models and research.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Annual Function"
              />
              <div className="card-body">
                <h5 className="card-title">Annual Cultural Function</h5>
                <p className="card-text">
                  Performances, art displays, and awards ceremony.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Sports Day"
              />
              <div className="card-body">
                <h5 className="card-title">Sports Day Highlights</h5>
                <p className="card-text">
                  A full day dedicated to outdoor sports and team spirit.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Art Exhibition"
              />
              <div className="card-body">
                <h5 className="card-title">Art & Creativity Exhibition</h5>
                <p className="card-text">
                  Beautiful paintings and crafts created by students.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 5 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Classroom Projects"
              />
              <div className="card-body">
                <h5 className="card-title">Classroom Projects</h5>
                <p className="card-text">
                  Hands-on learning projects created during class activities.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://picsum.photos/id/241/1200/400"
                className="card-img-top"
                alt="Field Trip"
              />
              <div className="card-body">
                <h5 className="card-title">Educational Field Trips</h5>
                <p className="card-text">
                  Outdoor learning experiences for real-life understanding.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </MainLayout>
  );
}
