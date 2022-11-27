import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import firebaseDb from "../firebase";

const ref = firebaseDb.firestore().collection("enteries");
const user = {
  email: "admin@domain.com",
  password: "divine@1234%",
};
const Admin = () => {
  const [data, setData] = useState([]);
  const [loginUser, setLoginUser] = useState(null);

  const getData = async () => {
    const enteries = await ref.get();

    if (!enteries.empty) {
      var allEnteries = [];
      enteries.forEach((doc) => {
        const enteryObj = { ...doc.data(), id: doc.id };
        allEnteries.push(enteryObj);
      });
    }
    setData(allEnteries);
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("divineCareUser"));
    if (loggedInUser && !loginUser?.email) {
      if (
        loggedInUser?.email.toString() === user?.email.toString() &&
        loggedInUser?.password.toString() === user?.password.toString()
      ) {
        setLoginUser(loggedInUser);
      } else {
        localStorage.removeItem("divineCareUser");
      }
    }
    if (loggedInUser?.email) {
      getData();
    }
  }, [loginUser]);

  return (
    <>
      {loginUser ? (
        <Dashboard user={loginUser} data={data} setLoginUser={setLoginUser} />
      ) : (
        <Login setLoginUser={setLoginUser} user={user} />
      )}
    </>
  );
};

export default Admin;
