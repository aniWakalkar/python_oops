import { useState } from 'react';

function Sidebar({ topics, selectedTopic, setSelectedTopic, isDrawerOpen, setIsDrawerOpen }) {
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

  const handleTopicSelect = (subtopic) => {
    setSelectedTopic(subtopic);
    // Close drawer on mobile after selection
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div className={`
        fixed md:relative
        top-0 left-0
        w-72 md:w-64
        h-full
        bg-gray-50
        border-r
        p-5
        overflow-y-auto
        z-50
        transition-transform duration-300 ease-in-out
        ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        shadow-xl md:shadow-none
      `}>
        {/* Close button inside drawer - mobile only */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="font-bold text-lg text-gray-800">Topics</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop title - hidden on mobile since it's in the drawer header */}
        <h2 className="font-bold mb-4 text-lg text-gray-800 hidden md:block">Topics</h2>
        
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
                  <span className="font-medium text-sm">{topic.title}</span>
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
                        onClick={() => handleTopicSelect(subtopic)}
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
    </>
  );
}

export default Sidebar;