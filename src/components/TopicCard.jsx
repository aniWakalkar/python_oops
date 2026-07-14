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
      <div className="border rounded-lg p-4 md:p-6 shadow text-center text-gray-500 text-sm md:text-base">
        Select a topic from the sidebar to learn about it
      </div>
    );
  }

  const showEnglish = selectedLanguage === 'English' || selectedLanguage === 'Both';
  const showHindi = selectedLanguage === 'Hindi' || selectedLanguage === 'Both';

  return (
    <div className="border rounded-lg p-4 md:p-6 shadow max-w-full overflow-hidden">
      {/* Breadcrumb */}
      <div className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 truncate">
        {parentTopic && (
          <span>
            <span className="text-blue-600">{parentTopic}</span>
            <span className="mx-2">›</span>
            <span className="font-semibold text-gray-700">{topic.title}</span>
          </span>
        )}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-700 break-words">
        {topic.title}
      </h2>
      
      {showEnglish && (
        <div className="mb-4 md:mb-6">
          <h3 className="font-semibold text-base md:text-lg text-gray-700 mb-2">📖 English Definition</h3>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed break-words">{topic.english}</p>
        </div>
      )}
      
      {showHindi && (
        <div className="mb-4 md:mb-6">
          <h3 className="font-semibold text-base md:text-lg text-gray-700 mb-2">📖 Hindi Definition</h3>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed break-words">{topic.hindi}</p>
        </div>
      )}

      {/* Example Section with better overflow handling */}
      {topic.example && (
        <div className="mt-4 md:mt-6">
          <h3 className="font-semibold text-base md:text-lg text-gray-700 mb-2">💻 Example</h3>
          <div className="bg-gray-900 text-white p-3 md:p-4 rounded-lg overflow-x-auto max-w-full">
            <pre className="text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap break-all md:break-normal">
              {topic.example}
            </pre>
          </div>
        </div>
      )}

      {/* Navigation hint */}
      <div className="mt-4 md:mt-6 pt-4 border-t text-xs md:text-sm text-gray-500">
        💡 Click on different topics in the sidebar to explore more concepts
      </div>
    </div>
  );
}

export default TopicCard;