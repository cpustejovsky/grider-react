import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>{" "}
      <Link to="/steams/show" className="item">
        All Streams
      </Link>{" "}
      <Link to="/streams/new" className="item">
        Create a Stream
      </Link>{" "}
      <div className="right menu">
        {" "}
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
