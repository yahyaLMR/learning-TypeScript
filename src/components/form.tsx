import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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
      <Input type="email" value={email} onChange={handleChange} /><br />
      <Input type="number" value={age} onChange={e => setAge(Number(e.target.value))} /><br />
      <Button type="submit">Send</Button>
    </form>
  );
}
export default Form;