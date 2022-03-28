import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdownText, setMarkdownText] = useState('# markdown preview')

  return (
    <main className="container">
      <section className='wrapper'>
        <textarea className="text-area" value={markdownText} onChange={(e) => setMarkdownText(e.target.value
        )}></textarea>
        <article className="markdown">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
