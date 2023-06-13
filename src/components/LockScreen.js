import { useEffect, useState } from "react";
function LockScreen() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const password = "12405";

  const [enteredpassword, enterPassword] = useState("");


  useEffect(() => {
    if (enteredpassword.length === password.length) {
      if (enteredpassword === password) {
        enterPassword("Welcome");
      } else {
        enterPassword("Try again");
      }
    }
  });
  const handleNumberClick = (num) => {
    enterPassword(enteredpassword + num);
    console.log(enteredpassword);
    // checkPassword();
  };
  return (
    <div className="container center">
      <div className="screen">
        <div className="input">
          <input
            type="text"
            placeholder="Enter passcode"
            value={enteredpassword}
            readOnly
          ></input>
        </div>
        <div className="grid">
          {numbers.map((num) => {
            return (
              <button className="number" onClick={() => handleNumberClick(num)}>
                {num}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LockScreen;
