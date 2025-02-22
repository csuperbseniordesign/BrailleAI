import { Input } from "../components/ui/input";

const StudentForm = () => {
  return (
    <div>
      <Input />
      <h1>Student Form</h1>
      <form>
        <label className="text-4xl font-bold">
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
