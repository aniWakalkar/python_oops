function LanguageToggle({ selectedLanguage, setSelectedLanguage }) {
  const languages = [
    { name: 'English', icon: '🇬🇧' },
    { name: 'Hindi', icon: '🇮🇳' },
    { name: 'Both', icon: '🌐' }
  ];

  return (
    <div className="mb-6 space-x-3 flex flex-wrap gap-2">
      {languages.map((lang) => (
        <button
          key={lang.name}
          onClick={() => setSelectedLanguage(lang.name)}
          className={`px-4 py-2 rounded border transition-all duration-200 ${
            selectedLanguage === lang.name
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:shadow'
          }`}
        >
          <span className="mr-2">{lang.icon}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;