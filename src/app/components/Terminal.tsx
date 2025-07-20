"use client";
import { useState } from 'react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setHistory([...history, input]);
      setInput('');
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-lg w-full shadow-lg">
      <div>
        {history.map((line, idx) => (
          <div key={idx}>&gt; {line}</div>
        ))}
      </div>
      <div className="flex">
        <span>&gt; </span>
        <input
          className="bg-black outline-none text-green-400 flex-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInput}
          autoFocus
        />
      </div>
    </div>
  );
}