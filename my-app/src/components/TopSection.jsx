import profileImg from "../assets/pfp.png";

function TopSection() {
  return (
    <section id="top" className="top-section">
      <div className="top-content">
        <img
          src={profileImg}
          alt="Your Name"
          className="profile-pic"
        />
        <h1>Nicholas Llaurado</h1>
        <p className="top-tagline">Aspiring Software Engineer · React / Python / Data</p>
      </div>
    </section>
  );
}

export default TopSection;