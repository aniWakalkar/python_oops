import { useState, useEffect } from 'react';
import topicsData from '../data/topics';

function TopicCard({ topic, selectedLanguage }) {
  const [parentTopic, setParentTopic] = useState(null);

  // Find the parent main topic for the selected subtopic
  useEffect(() => {
    if (topic) {
      for (const mainTopic of topicsData) {
        if (mainTopic.subtopics.some(sub => sub.id === topic.id)) {
          setParentTopic(mainTopic.title);
          break;
        }
      }
    }
  }, [topic]);

  if (!topic) {
    return (
      <div className="border rounded-lg p-6 shadow text-center text-gray-500">
        Select a topic from the sidebar to learn about it
      </div>
    );
  }

  const showEnglish = selectedLanguage === 'English' || selectedLanguage === 'Both';
  const showHindi = selectedLanguage === 'Hindi' || selectedLanguage === 'Both';

  // Function to format code with proper indentation
  const formatCode = (code) => {
    if (!code) return '';
    // Replace \n with actual newlines for display
    return code.replace(/\\n/g, '\n');
  };

  return (
    <div className="border rounded-lg p-6 shadow">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        {parentTopic && (
          <span>
            <span className="text-blue-600">{parentTopic}</span>
            <span className="mx-2">›</span>
            <span className="font-semibold text-gray-700">{topic.title}</span>
          </span>
        )}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-blue-700">{topic.title}</h2>
      
      {showEnglish && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">📖 English Definition</h3>
          <p className="text-gray-800 leading-relaxed">{topic.english}</p>
        </div>
      )}
      
      {showHindi && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">📖 Hindi Definition</h3>
          <p className="text-gray-800 leading-relaxed">{topic.hindi}</p>
        </div>
      )}

      {/* Example Section */}
      {topic.example && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">💻 Example</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono leading-relaxed whitespace-pre">
              {formatCode(topic.example)}
            </pre>
          </div>
        </div>
      )}

      {/* Navigation hint */}
      <div className="mt-6 pt-4 border-t text-sm text-gray-500">
        💡 Click on different topics in the sidebar to explore more concepts
      </div>
    </div>
  );
}

export default TopicCard;