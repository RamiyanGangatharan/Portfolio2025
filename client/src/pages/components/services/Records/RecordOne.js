export default function RecordOne(){
    return (
        <div class="accordion accordion-flush" id="Job_1">
          <div class="accordion-item text-white">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                    Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
        </div>
    )
}