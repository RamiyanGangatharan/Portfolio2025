import "@/styles/globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function Contact() {
    return (
        <>
            <Header />
            <main className="container my-5">
                <div className="d-flex justify-content-center">
                    <form
                    action="http://localhost:3000/"
                    className="w-100 w-md-75 w-lg-75 p-4 rounded shadow bg-dark text-light"
                    style={{marginBottom: "10%"}}
                    >
                        <h1 className="display-5 text-center mb-4">Contact Me</h1>
                        <hr/>
                        <div className="row">
                            {/* Left column */}
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label lead">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        className="form-control"
                                        placeholder="Your first name..."
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label lead">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        className="form-control"
                                        placeholder="Your last name..."
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="emailaddress" className="form-label lead">Email Address</label>
                                    <input
                                        type="email"
                                        id="emailaddress"
                                        className="form-control"
                                        placeholder="Your email address..."
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label lead">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="form-control"
                                        placeholder="Subject..."
                                    />
                                </div>
                            </div>

                        {/* Right column */}
                            <div className="col-md-6 d-flex flex-column">
                                <div className="flex-grow-1">
                                    <label htmlFor="emailbody" className="form-label lead">Message</label>
                                    <textarea
                                        id="emailbody"
                                        name="emailmessage"
                                        className="form-control"
                                        style={{ height: "315px" }}
                                        placeholder="Write your message here..."
                                    />
                                </div>
                            </div>
                            <div><button type="submit" className="btn btn-outline-light w-100">Submit</button></div>
                        </div>
                    </form>
                </div>
                <p className="text-center small text-muted mt-3">Please hire me 🙂</p>
            </main>
            <Footer />
        </>
    );
}
