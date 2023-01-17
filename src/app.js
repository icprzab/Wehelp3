import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./HomePage"
import List from "./ListPage"

const Routers = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListPage" element={<List />} />
        </Routes>
    </Router>
)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Routers />,);



// ReactDOM.render(<MyHead />, document.getElementById("root"));
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<MyHead />);


// import List from "./list.js";

// class APP extends React.component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <div>
//             <div>React 123</div>
//         </div>;
//     }
// }

// ReactDOM.render(<APP />, document.getElementById("root"));

// let app = <div>hello</div>
// ReactDOM.render(app, document.getElementById("root"));
