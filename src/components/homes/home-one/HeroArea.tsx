import Link from "next/link";

const HeroArea = () => {
  return (
    <div
      className="hero-area bgs-cover overlay pt-155 pb-170"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1526930795887-9ff8eb71f13f?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <div className="container container-1370">
        <div className="hero-content text-center text-white">
          <h1>
            Donations even if it is a small can bring <span>bigger</span>
          </h1>
          <p>
            Only when the society comes together and contributesIt was
            popularised in the t we will be able to make an impact.
          </p>
          <div className="hero-btns pt-30 rpt-10">
            <Link className="cr-btn" href="/causes">
              Donate Now
            </Link>
            <Link
              className="cr-btn btn--yellow btn--style-two"
              href="/become-volunteers"
            >
              Become Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
