import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { motion } from 'framer-motion';

const photos = [

  '/photo2.jpg',
  '/photo3.jpg',
  '/photo5.jpg',
  '/photo6.jpg',
  '/photo7.jpg',
  '/photo8.jpg',
  '/photo9.jpg',
  '/photo10.jpg',
  '/photo11.jpg',
  '/unnamed.png',
  '/photo12.jpg',
  '/photo13.jpg',
  '/photo14.jpg',
  '/photo15.jpg'
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
            Hey, I’m Joseph. I’m a software developer who swapped tools and job sites for code editors and web apps. When I’m not building or fixing something in React or Python, I’m probably outside—hiking mossy forests in Washington, discovering hidden trails, or just enjoying some time unplugged in the mountains.
            <br /><br />
            I love solving real-world problems and making tech more approachable. My favorite projects are the ones that combine practical needs with clean design, and I enjoy learning by getting my hands dirty—whether that’s digging into a new JavaScript library or an overgrown trail.
            <br /><br />
            Most of the photos here are from my hikes and adventures around the Pacific Northwest, which is where I call home.
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
    <div className="skills-icons">
        <span className="icon-badge js" title="JavaScript">
        {/* JavaScript SVG */}
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#F7DF1E" />
            <text x="5" y="24" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#222">JS</text>
        </svg>
        </span>
        <span className="icon-badge react" title="React">
        {/* React SVG */}
        <svg width="38" height="38" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="#222" />
            <ellipse rx="12" ry="4.5" cx="18" cy="18" fill="none" stroke="#61DAFB" strokeWidth="2"/>
            <ellipse rx="4.5" ry="12" cx="18" cy="18" fill="none" stroke="#61DAFB" strokeWidth="2"/>
            <ellipse rx="12" ry="4.5" cx="18" cy="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 18 18)"/>
            <circle cx="18" cy="18" r="3" fill="#61DAFB"/>
        </svg>
        </span>
        <span className="icon-badge node" title="Node.js">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#222" />
            <text x="4" y="20" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="#8CC84B">Node</text>
        </svg>
        </span>
        <span className="icon-badge mysql" title="MySQL">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#00758F" />
            <text x="5" y="20" fontFamily="Arial" fontWeight="bold" fontSize="7" fill="#FFF">MySQL</text>
        </svg>
        </span>
        <span className="icon-badge bootstrap" title="Bootstrap">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#7952B3" />
            <text x="10" y="24" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#FFF">B</text>
        </svg>
        </span>
        <span className="icon-badge python" title="Python">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#306998" />
            <text x="6" y="22" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#FFD43B">Py</text>
        </svg>
        </span>
        <span className="icon-badge java" title="Java">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#f89820" />
            <text x="6" y="20" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="#222">Java</text>
        </svg>
        </span>
        <span className="icon-badge csharp" title="C#">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#68217A" />
            <text x="5" y="24" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#FFF">C#</text>
        </svg>
        </span>
        <span className="icon-badge cpp" title="C++">
        <svg width="36" height="36" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#00599C" />
            <text x="4" y="22" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#FFF">C++</text>
        </svg>
        </span>
        </div>
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
        </motion.section>

        <footer className="text-center text-muted mt-5">
          &copy; {new Date().getFullYear()} Joseph Wilfong. Built with React + Bootstrap + Framer Motion.
        </footer>
      </div>
    </>
  );
}

export default App;
