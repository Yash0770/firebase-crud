import React, { useEffect, useState } from "react";
import fireDb from "../firebase";
import { Link, useParams } from "react-router-dom";

function View() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fireDb
      .ref(`contact/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  console.log(user);
  return (
    <center>
      <div style={{ marginTop: "110px" }}>
        <div className="card col-lg-4 col-md-6 col-sm-8">
          <div className="card-header mb-2 mt-2">
            <h3 className="fw-bold">Contact Detail</h3>
          </div>
          <div className="container my-3">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong style={{ marginLeft: "-74px" }}>Name: </strong>
            <span>{user.name}</span>
            <br />
            <br />
            <strong style={{ marginLeft: "34px" }}>Email: </strong>
            <span>{user.email}</span>
            <br />
            <br />
            <strong style={{ marginLeft: "-65px" }}>Contact: </strong>
            <span>{user.contact}</span>
            <br />
            <br />
            <Link to={"/"}>
              <button className="btn btn-secondary mb-2">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </center>
  );
}

export default View;
