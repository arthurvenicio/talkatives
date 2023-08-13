export const Languages = () => {
  const languages = ['Português', 'English', 'Español'];
  return (
    <select name="timezone" className="w-56 p-2 h-10 bg-white rounded-md">
      {languages.map((language, index) => (
        <option key={index} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};
