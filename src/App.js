import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import PostResults from './components/PostResults'


export default function App() {
  return (
    <div className="container">
      <div className="row">
        <PostResults />
      </div>
    </div>
  );
}
