
import React, { useState } from "react";
import Input from "./Input";
import cities from "./cities.json"



function App() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [placeholder, setPlaceholder] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    // فیلتر کردن نام‌های شهر بر اساس ورودی کاربر (حساس به حروف بزرگ و کوچک)
    if (inputValue) {
      const filteredCities = cities.filter(
        (city) => city.includes(inputValue) // مقایسه مستقیم بدون تغییر حروف
      );
      //ba toLowerCase() barnameh be horof kochack v bozorg hasas nist
      //  const filteredCities = cities.filter((city) =>
      //    city.toLowerCase().includes(inputValue.toLowerCase())
      //  );
      setSuggestions(filteredCities);
      setPlaceholder(filteredCities[0] || ""); // قرار دادن اولین پیشنهاد به عنوان placeholder
    } else {
      setSuggestions([]);
      setPlaceholder("");
    }
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={placeholder} />
      <p>Current Value: {value}</p>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
