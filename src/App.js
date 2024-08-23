import React from "react";
function App() {
  return (
    <>
      <form class="mt-9 flex justify-center items-center ">
        <div class="">
          <label for="uname" class="font-medium">
            Username
          </label><br/>
          <input
            type="text"
            placeholder="Enter your Username"
            class="border border-gray-300 p-1 w-80 mt-1 mb-3"
          /><br/>
          <label for="psw" class=" font-medium">
            Password
          </label><br/>
          <input
            type="text"
            placeholder="***********"
            class="border border-gray-300 p-1 w-full mt-1"
          /><br/>
          <p class="text-red-500 text-sm mt-2">Please choose a password.</p>
          <div class="flex justify-between">
          <button type="submit"class="bg-blue-700 text-white p-2 mt-3 w-24 rounded-md ">Submit</button>
          <span class="psw mt-5 text-blue-600 text-sm">
            Forgot password
          </span>
          </div>
      </div>
      </form>
    </>
  );
}
export default App;
