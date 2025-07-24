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
    <div className="bg-black text-green-400 font-mono p-6 w-full">
      <div>
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <div className="flex">
        <input
          className="bg-black outline-none text-white-400 flex-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInput}
          autoFocus
        />
      </div>
    </div>
  );
}