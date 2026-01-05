export default function TextButton({ children, onClick = () => {} }) {
  return (
    <button onClick={onClick} className="text-button">
      {children}
    </button>
  );
}
