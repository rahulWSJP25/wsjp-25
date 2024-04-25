import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function App() {
  const [userData, setUserData] = useState(
    [
      { name: 'Rahul', email: 'rahulchoudhary83119@gmail.com', contact: '1234567890', gender: '1', flag: true },
      { name: 'Divya', email: 'Divya4214@gmail.com', contact: '9876543210', gender: '0', flag: false }
    ]
  );


  const addUserHandler = (data) => {
    const newUserData = [...userData, data];
    setUserData(newUserData);
  }

  const statusChangeHanldler = (index) => {
    const newUserData = [...userData];  // shallow copy
    newUserData[index].flag = !newUserData[index].flag;
    setUserData(newUserData);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Table userData={userData} statusChangeHanldler={statusChangeHanldler} />
        <Form addUserHandler={addUserHandler} />
      </div>
    </div>
  )
}

export default App;