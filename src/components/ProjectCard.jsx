export default function ProjectCard({ title, description, tech }) {
  return (
    <div style={{
      border: "1px solid #1e293b",
      padding: "20px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{tech}</small>
    </div>
  );
}
