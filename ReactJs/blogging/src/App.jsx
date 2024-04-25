import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Course from './pages/Course';
import Main from './pages/Main';
import ContactUs from './pages/ContactUs';
import CourseListing from './pages/CourseListing';

function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "about-us",
                    element: <About />
                },
                {
                    path: "gallery",
                    element: <Gallery />
                },
                {
                    path: "contact-us",
                    element: <ContactUs />
                },
                {
                    path: "course",
                    children: [
                        {
                            path: "",
                            element: <CourseListing />
                        },
                        {
                            path: ":slug",
                            element: <Course />
                        }
                    ]
                },
                {
                    path: "*",
                    element: <PageNotFound />
                }

            ]
        }

    ]);


    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App;