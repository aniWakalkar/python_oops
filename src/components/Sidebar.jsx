import { useState } from 'react';

function Sidebar({ topics, selectedTopic, setSelectedTopic }) {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Auto-expand the topic that contains the selected subtopic
  const getExpandedState = (topic) => {
    if (selectedTopic) {
      const containsSelected = topic.subtopics.some(
        sub => sub.id === selectedTopic.id
      );
      if (containsSelected) return true;
    }
    return expandedTopics[topic.id] || false;
  };

  return (
    <div className="w-64 h-screen border-r p-5 overflow-y-auto bg-gray-50">
      <h2 className="font-bold mb-4 text-lg text-gray-800">Topics</h2>
      
      <div className="space-y-2">
        {topics.map((topic) => {
          const isExpanded = getExpandedState(topic);
          
          return (
            <div key={topic.id} className="border rounded-lg overflow-hidden">
              {/* Main Topic Header */}
              <div
                onClick={() => toggleTopic(topic.id)}
                className={`p-3 cursor-pointer flex justify-between items-center transition-colors ${
                  isExpanded ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{topic.title}</span>
                <span className="text-sm">
                  {isExpanded ? '▼' : '▶'}
                </span>
              </div>
              
              {/* Subtopics List */}
              {isExpanded && (
                <ul className="bg-white border-t">
                  {topic.subtopics.map((subtopic) => (
                    <li
                      key={subtopic.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTopic(subtopic);
                      }}
                      className={`p-3 pl-6 cursor-pointer transition-colors text-sm ${
                        selectedTopic?.id === subtopic.id
                          ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {subtopic.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;