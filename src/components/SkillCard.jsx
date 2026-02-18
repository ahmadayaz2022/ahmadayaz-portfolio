export default function SkillCard({ skill }) {
  return (
    <span style={{
      padding: "8px 12px",
      border: "1px solid #334155",
      borderRadius: "6px"
    }}>
      {skill}
    </span>
  );
}
