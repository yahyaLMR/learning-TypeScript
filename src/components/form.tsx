import { useState } from "react";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value)) || e.target.value === "") {
      setEmail(e.target.value);
    } else {
      setAge(Number(e.target.value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleChange} />
      <input type="number" value={age} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
}
export default Form;