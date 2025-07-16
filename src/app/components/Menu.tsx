export default function Menu() {
    const options = ["Help", "About", "Projects", "Contact"];
    return (
      <nav className="space-y-6">
        {options.map(option => (
          <button
            key={option}
            className="text-green-400 text-2xl font-mono hover:text-blue-400 transition"
          >
            {option}
          </button>
        ))}
      </nav>
    );
  }