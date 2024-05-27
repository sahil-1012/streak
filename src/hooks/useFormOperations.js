import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const useFormOperations = (defaultValues = {}, onSubmitCallback, path, asyncValues) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultValues);

  useEffect(() => {
    if (asyncValues) setFormData(asyncValues);
  }, [asyncValues])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const setValue = (fieldName, specificValue) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: specificValue }));
  };

  const toPascalCase = (str) => {
    return str.replace(/\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };

  const handlePascalCase = (e) => {
    const { value, name } = e.target;
    const pascalCaseValue = toPascalCase(value);
    setValue(name, pascalCaseValue);
  };

  const resetValue = (fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: defaultValues[fieldName],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitCallback(formData);
  };


  const clearForm = () => {
    console.log('called clearForm');
    console.log(formData);
    console.log(defaultValues);
    setFormData(defaultValues);
  }
  const onDiscard = () => navigate(path);

  return {
    formData,
    handleChange,
    handlePascalCase,

    handleSubmit,
    setValue,
    resetValue,
    clearForm,
    onDiscard,
  };
};

export default useFormOperations;
