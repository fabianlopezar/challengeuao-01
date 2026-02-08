import "./Loader.css";

interface LoaderProps {
  text?: string;
}

const Loader = ({ text = "Cargando..." }: LoaderProps) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;