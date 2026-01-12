import { useState } from "react";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleChange} /><br />
      <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} /><br />
      <button type="submit">Send</button>
    </form>
  );
}
export default Form;