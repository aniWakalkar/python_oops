function LanguageToggle({ selectedLanguage, setSelectedLanguage }) {
  const languages = [
    { name: 'English', icon: '🇬🇧' },
    { name: 'Hindi', icon: '🇮🇳' },
    { name: 'Both', icon: '🌐' }
  ];

  return (
    <div className="mb-4 md:mb-6 space-x-2 md:space-x-3 flex flex-wrap gap-2 relative z-10">
      {languages.map((lang) => (
        <button
          key={lang.name}
          onClick={() => setSelectedLanguage(lang.name)}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded border transition-all duration-200 text-sm md:text-base ${
            selectedLanguage === lang.name
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:shadow'
          }`}
        >
          <span className="mr-1 md:mr-2">{lang.icon}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;