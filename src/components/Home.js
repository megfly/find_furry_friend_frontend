import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to={`/api/v1/shelters`}> Animal Shelters </Link>
                <br />
            Pets 
        </div>
    )
}
