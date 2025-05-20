import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { motion } from 'framer-motion';

const photos = [

  '/src/photo2.jpg',
  '/src/photo3.jpg',
  '/src/photo5.jpg',
  '/src/photo6.jpg',
  '/src/photo7.jpg',
  '/src/photo8.jpg',
  '/src/photo9.jpg',
  '/src/photo10.jpg',
  '/src/photo11.jpg',
  '/src/unnamed.png',
  '/src/photo12.jpg',
  '/src/photo13.jpg',
  '/src/photo14.jpg',
  '/src/photo15.jpg'
];

function App() {
  // Animation variants
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const spinIn = {
    hidden: { opacity: 0, rotate: 90, scale: 0.5 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  };

  return (
    <>
      {/* Parallax Background */}
      <div className="parallax-bg" />
      <div className="site-content container py-5">

        {/* PHOTO SLIDESHOW */}
        <div
          id="profileCarousel"
          className="carousel slide mb-4 mx-auto"
          data-bs-ride="carousel"
          style={{ maxWidth: 340 }}
        >
          <div className="carousel-inner rounded shadow">
            {photos.map((src, i) => (
              <div
                key={i}
                className={`carousel-item${i === 0 ? ' active' : ''}`}
              >
                <img
                  src={src}
                  className="d-block w-100"
                  alt={`Profile ${i + 1}`}
                  style={{
                    height: 340,
                    objectFit: "cover"
                  }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#profileCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#profileCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* HERO SECTION */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-2"
        >
          <h1 className="display-4 fw-bold">Joseph Wilfong</h1>
          <p className="lead mb-1">
            Software Engineer • React Developer • Problem Solver
          </p>
          <div className="d-flex justify-content-center gap-3 mb-2">
            {/* GitHub Logo Link */}
            <a
              href="https://github.com/jcarenza67"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="icon-link"
            >
              <svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
        -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
        .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
        0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.22 2.2.82a7.6 7.6
        0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08
        2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
        0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            {/* LinkedIn Logo Link */}
            <a
              href="https://linkedin.com/in/joseph-wilfong"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="icon-link"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239
        5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966
        0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.967 0 1.75.79
        1.75 1.76s-.783 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.337-.026-3.066-1.872-3.066-1.872
        0-2.158 1.46-2.158 2.968v5.698h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563
        2.841-1.563 3.039 0 3.6 2 3.6 4.591v5.605z"/>
              </svg>
            </a>
          </div>
        </motion.header>

        {/* ABOUT ME SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mb-5 text-center"
        >
          <div className="card border-0 shadow-sm p-4 mx-auto" style={{ maxWidth: 600 }}>
            <h2 className="mb-3">About Me</h2>
            <p>
              Former trades worker turned software developer, now focused on building clean, user-friendly applications with React, JavaScript, and modern web tech. I’m passionate about solving real-world problems and creating impact through code. My hands-on background helps me bring practical, efficient solutions to every project. I also love going on adventures with my wife.
            </p>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mb-5 text-center"
        >
          <h2 className="mb-3">Skills</h2>
          <span className="badge bg-primary mx-1">JavaScript</span>
          <span className="badge bg-secondary mx-1">React</span>
          <span className="badge bg-success mx-1">Node.js</span>
          <span className="badge bg-info text-dark mx-1">SQL</span>
          <span className="badge bg-warning text-dark mx-1">Bootstrap</span>
          <span className="badge bg-dark mx-1">Python</span>
          <span className="badge bg-primary mx-1">Java</span>
          <span className="badge bg-secondary mx-1">C#</span>
          <span className="badge bg-success mx-1">C++</span>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section>
          <h2 className="mb-4 text-center">Projects</h2>
          <div className="row g-4">
            {[
              {
                title: "Alpaca Trading Bot",
                desc: "Automated trading bot using Alpaca API with EMA crossover and RSI strategies. Modular, well-logged, and deployable.",
                link: "https://github.com/jcarenza67/alpaca-ema-bot"
              },
              {
                title: "Hallways (Capstone)",
                desc: "Psychological horror game in Unity using C#. Loops hallway structure inspired by P.T., with timed suspense events.",
                link: "https://github.com/jcarenza67/Hallways"
              },
              {
                title: "The One API",
                desc: "Twitter bot built with .NET Core and EF to post random Gandalf quotes, using scheduled jobs and external APIs.",
                link: "https://github.com/jcarenza67/The_One_API.Solution"
              }
            ].map((proj, i) => (
              <motion.div
                className="col-md-4"
                key={proj.title}
                initial="hidden"
                animate="visible"
                variants={spinIn}
                transition={{ duration: 0.8, delay: 0.36 + i * 0.15, type: "spring" }}
              >
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.desc}</p>
                    <a
                      href={proj.link}
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <div className="resume-viewer my-5">
            <h2>Resume</h2>
            <iframe
                src="/Joseph_Wilfong_Resume.pdf"
                style={{ width: "100%", minHeight: "900px", border: "none" }}
                title="Joseph Wilfong Resume"
            ></iframe>
        </div>

        {/* CONTACT SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="my-5 text-center"
        >
          <h2>Contact</h2>
          <p>Email: <a href="mailto:josephwilfong91@gmail.com">josephwilfong91@gmail.com</a></p>
          <p>Location: Shelton, WA (Remote or On-site)</p>
        </motion.section>

        <footer className="text-center text-muted mt-5">
          &copy; {new Date().getFullYear()} Joseph Wilfong. Built with React + Bootstrap + Framer Motion.
        </footer>
      </div>
    </>
  );
}

export default App;
