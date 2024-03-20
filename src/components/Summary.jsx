import me from "../assets/me.jpg";
import "./Summary.css";

export default function Summary() {
  return (
    <>
      <div className="summary">
        <h1>Mykyta's resume</h1>
        <img height="200" src={me} alt="my real photo" />
        <h2>Summary</h2>
        <p>
          I'm Mykyta, dependable, imaginative and hardworking individual. I am
          beginning web developer, ive been learning a lot and hard and motivatd
          to begin my career!
        </p>
      </div>
    </>
  );
}
