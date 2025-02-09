export default DynamicForm;
import React, { useState } from "react";

function DynamicForm() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].value = value;
    setFields(newFields);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
}


