import SlideZero from "@/pages/components/services/Records/slideZero"
import SlideOne from "@/pages/components/services/Records/slideOne"
import SlideTwo from "@/pages/components/services/Records/slideTwo"
import SlideThree from "@/pages/components/services/Records/slideThree"
import SlideFour from "@/pages/components/services/Records/slideFour"
import SlideFive from "@/pages/components/services/Records/slideFive"
import SlideSix from "@/pages/components/services/Records/slideSix"

export default function ServicesJobs() {
  return (
    <section id="record" className="services-section">
      <div className="services-card bg-dark text-light">
        <h2 className="section-title text-center mb-4">Job Record</h2>
        <div className="accordion accordion-flush" id="jobsAccordion">

          {/* 2025 */} 
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2025">
              <button className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2025"
                aria-expanded="false"
                aria-controls="collapse2025">2025</button>
            </h2>
              <div
                id="collapse2025"
                className="accordion-collapse collapse"
                aria-labelledby="heading2025"
                data-bs-parent="#jobsAccordion">
                <div className="accordion-body text-light">
                  <div className="carousel-wrapper">
                    <div id="repairCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <SlideZero />
                      </div>
                      <div className="carousel-item">
                        <SlideOne />
                      </div>
                      <div className="carousel-item">
                        <SlideTwo />
                      </div>
                      <div className="carousel-item">
                        <SlideThree />
                      </div>
                      <div className="carousel-item">
                        <SlideFour />
                      </div>
                      <div className="carousel-item">
                        <SlideFive />
                      </div>
                      <div className="carousel-item">
                        <SlideSix />
                      </div>
                    </div>


                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#repairCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" />
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#repairCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" />
                    </button>
                  </div>
                  </div>
              </div>
            </div>
          </div>

          {/* 2024 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2024">
              <button className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2024"
                aria-expanded="false"
                aria-controls="collapse2024">2024</button>
            </h2>
            <div
              id="collapse2024"
              className="accordion-collapse collapse"
              aria-labelledby="heading2024"
              data-bs-parent="#jobsAccordion">
              <div className="accordion-body text-light">
                <div className="ms-4">
                  <h4>Windows 10 Re-Install</h4>
                  <p>
                    One of my co-workers bought a computer from a relative was asking to clean up thier 
                    computer to make it faster and so I decided the best course of action was to reinstall 
                    the operating system as they didn't need any of the installed applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2021 - 2023 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2021-23">
              <button className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2021-23"
                aria-expanded="false"
                aria-controls="collapse2021-23">2021-23</button>
            </h2>
            <div
              id="collapse2021-23"
              className="accordion-collapse collapse"
              aria-labelledby="heading2021-23"
              data-bs-parent="#jobsAccordion">
              <div className="accordion-body text-light">
                During this period, I was just out of high school doing miscellaneous jobs like fixing WiFi issues
                or cleaning computers. from when I started to go to Durham College in 2022, I started to help clients
                design software in the context of helping them get ideas onto paper and from paper to code.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
