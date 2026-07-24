import Hobbies from "../components/Home/Hobbies";

export default function Home() {
  return (
    <div className="page-content">
      <h1>Home</h1>
      <p>
        Welcome to my own website, let me introduce you to my projects and
        realisations!
      </p>
      <h2>Alexandre Tomasi</h2>
      Let my introduce myslef, my name is Alexandre but everybody call my Alex,
      I'm 25 years old and i'm passionned by computer sciences, music, internet,
      video games and development
      <h3>About me</h3>
      <div className="collapse collapse-plus bg-base-200 border my-2">
        <input type="radio" name="home" defaultChecked />
        <div className="collapse-title font-semibold">My hobbies</div>
        <div className="collapse-content text-sm">
          <Hobbies />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border my-2">
        <input type="radio" name="home" />
        <div className="collapse-title font-semibold">Stack competence</div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border my-2">
        <input type="radio" name="home" />
        <div className="collapse-title font-semibold">My parcours</div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <h3>My projects</h3>
    </div>
  );
}
