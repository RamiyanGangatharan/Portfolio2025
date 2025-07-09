import "@/styles/globals.css";

export default function About() {
  return (
    <main className="container mt-5">
      <div className="card bg-dark text-white shadow-lg border-0 p-3 mb-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-4 text-center">
            <img
              src="/img/self.jpg"
              alt="Portrait of Ramiyan"
              className="img-fluid border border-dark shadow-sm mx-4"
              style={{ maxWidth: "300px", borderRadius: "12px"}}
            />
          </div>
          <div className="col-lg-8">
              <p className="about_paragraph mx-4">
                Hi, I'm Ramiyan, Rami for short. 
                I'm a prospective software developer passionate about seamless, user-friendly applications. 
                I graduated from Durham College's Computer Programming and Analysis program and 
                am now entering Ontario Tech's Computer Science Advanced Entry program.
              </p>
              <p className="about_paragraph mx-4">
                At MRC Studio, I assisted in developing AI for a Unity game as part of the AICore framework. 
                I also bring leadership experience from my time as a shift supervisor at Tim Hortons.
                I love solving problems, designing intuitive systems, and learning new tech. 
                Whether it's immersive games or scalable apps, I bring energy and curiosity to everything I do.
              </p>
              <p className="about_paragraph mx-4">
                Outside of work, I'm passionate about video games, cars, and cooking. 
                I enjoy exploring game design both as a developer and a player, often drawing 
                inspiration from immersive, well-balanced experiences. I'm also a car enthusiast who appreciates both engineering and aesthetics. 
                I love learning about performance builds and tuning culture. 
              </p>
              <p className="about_paragraph mx-4">
                <em>Let's connect, I'm excited to collaborate, and grow.</em>
              </p>
          </div>
        </div>
      </div>
    </main>
  );
}
