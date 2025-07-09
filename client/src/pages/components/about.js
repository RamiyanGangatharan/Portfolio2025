import "@/styles/globals.css"; 
export default function About() 
{ 
  return (
    <main className="container">
        <div className="card bg-dark text-white shadow-lg border-0 p-4 mb-5">
            <div className="row g-4 align-items-center">
                <div className="col-lg-4 text-center"> {/* Profile Picture */}
                    <img 
                      src="/img/self.jpg" 
                      alt="Portrait of Ramiyan" 
                      className="img-fluid border border-dark shadow-sm" 
                      style={{ maxWidth: "300px", borderRadius: "12px" }} 
                    />
                    <hr/>
                    <p className="about_paragraph text-justify">
                        I'm a versatile and experienced software developer passionate about 
                        developing complex &amp; immersive experiences. From building gameplay 
                        systems in Unity Engine to developing responsive web and desktop applications, 
                        or working with enterprise software on IBM Z/OS, I thrive in environments where 
                        creativity and problem-solving matter most.
                    </p>
                </div>
                
                <div className="col-lg-8"> {/* Bio */}
                    <div className="text-center">
                        <h1 className="display-6">Ramiyan Gangatharan</h1>
                        <p className="subtitle">Full-Stack Software Developer</p>
                    </div>
                    <hr/>

                    <div className="row mt-1"> {/* Education */} 
                        <div className="col-md-6">
                            <h4 className="fw-semibold">Education</h4>
                            <hr/>
                            <ul>
                                <li className="mb-3">
                                    <strong>Ontario Tech University</strong>
                                    <br/> BSc. Computer Science
                                    <br/>Advanced Entry — <em>In Progress</em>
                                    <br/> Sept. 2025 - Apr. 2027
                                </li>
                                <li className="mb-3">
                                    <strong>Durham College</strong>
                                    <br/> Computer Programming & Analysis <em>Advanced Diploma Graduate</em>
                                    <br/> Sept. 2022 - Apr. 2025
                                </li>
                                <li>
                                    <strong>Centennial College</strong>
                                    <br/> Software Engineering Technology <em>Advanced Diploma - Incomplete</em>
                                    <br/> Sept. 2021 - Apr. 2022
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6"> {/* Interests & Experience */}
                            <h4 className="fw-semibold">Interests</h4>
                            <hr/>
                            <ul className="mb-3">
                                <li>Car Enthusiast</li>
                                <li>Video Games</li>
                                <li>Software Development</li>
                            </ul>

                            <h4 className="fw-semibold mt-4">Professional Experience</h4>
                            <hr/>
                            <ul>
                                <li>
                                    <strong>Durham College - MRC Studio</strong>
                                    <br/> Research Assistant Intern
                                    <br/> Apr 2025 - May 2025
                                </li>
                                <li className="mt-3">
                                    <strong>Tim Hortons</strong>
                                    <br/> Highest Position: Shift Supervisor
                                    <br/> Nov. 2021 - July 2024
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="fst-italic mt-5 lead text-center"> Let's connect! I'm always eager to learn from others.</p>
                </div>
            </div>
        </div>
    </main>
  ); 
}
