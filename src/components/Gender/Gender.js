import React, { useState } from "react";
import { fakeData } from "./../Data/fakeData";
import UserId from "../UserId/UserId";
import Income from "./../Income/Income";

const Gender = () => {
  const user10 = fakeData.slice(0, 10);
  const [userID, setUser] = useState(user10);
  const [income, setIncome] = useState([]);
  const [team, setTeam] = useState([]);

  const handleAddCart = (User) => {
    console.log(User);
    const newCart = [...income, User];
    setIncome(newCart);
  };
  const addMember = (name) => {
    setTeam([...team, name]);
  };

  return (
    <div>
      <Income income={income}></Income>
      <ul>
        {team.map((m, idx) => (
          <li key={idx}>{m}</li>
        ))}
      </ul>
      <ul>
        {userID.map((x) => (
          <UserId
            UserId={x}
            handleAddCart={handleAddCart}
            addMember={addMember}
          ></UserId>
        ))}
      </ul>
    </div>
  );
};

export default Gender;
