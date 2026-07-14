import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TopicCard from "../components/TopicCard";
import LanguageToggle from "../components/LanguageToggle";
import topicsData from "../data/topics";

function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('Both');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Set default topic to first subtopic of OOP Introduction
  useEffect(() => {
    if (topicsData.length > 0 && topicsData[0].subtopics.length > 0) {
      setSelectedTopic(topicsData[0].subtopics[0]);
    }
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="flex min-h-screen">
        <Sidebar
          topics={topicsData}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <div className="flex-1 p-4 md:p-8 pt-4 md:pt-8">
          <LanguageToggle
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <TopicCard
            topic={selectedTopic}
            selectedLanguage={selectedLanguage}
          />
        </div>
      </div>
    </>
  );
}

export default Home;