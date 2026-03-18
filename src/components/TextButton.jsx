/* eslint-disable react/prop-types */
export default function TextButton({ children, onClick = () => {} }) {
  return (
    <button onClick={onClick} className="text-button">
      {children}
    </button>
  );
}
