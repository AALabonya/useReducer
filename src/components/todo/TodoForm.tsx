export default function TodoForm() {
  return (
    <div>
      <form className="p-5">
        <label> Name:</label>
        <input
          type="text"
          id="FirstName"
          name="first_name"
          className=" mt-1 w-full  rounded-md border py-2 bg-white text-sm text-gray-700 shadow-sm"
        />
        <label> Age:</label>
        <input
          type="text"
          id="FirstName"
          name="first_name"
          className=" mt-1 w-full  rounded-md border py-2 bg-white text-sm text-gray-700 shadow-sm"
        />
        <label> Hobbies:</label>
        <input
          type="text"
          id="FirstName"
          name="first_name"
          className=" mt-1 w-full  rounded-md border py-2 bg-white text-sm text-gray-700 shadow-sm"
        />
        <button className="bg-green-300 w-full mt-2 py-2 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}
