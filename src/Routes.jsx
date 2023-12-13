import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page16 = React.lazy(() => import("pages/Page16"));
const Seven1 = React.lazy(() => import("pages/Seven1"));
const Ten = React.lazy(() => import("pages/Ten"));
const Page15 = React.lazy(() => import("pages/Page15"));
const Page14 = React.lazy(() => import("pages/Page14"));
const Nine = React.lazy(() => import("pages/Nine"));
const One3 = React.lazy(() => import("pages/One3"));
const Eight = React.lazy(() => import("pages/Eight"));
const One2 = React.lazy(() => import("pages/One2"));
const Seven = React.lazy(() => import("pages/Seven"));
const Six1 = React.lazy(() => import("pages/Six1"));
const Five1 = React.lazy(() => import("pages/Five1"));
const Four1 = React.lazy(() => import("pages/Four1"));
const Frame1171276108 = React.lazy(() => import("pages/Frame1171276108"));
const Page13 = React.lazy(() => import("pages/Page13"));
const Six = React.lazy(() => import("pages/Six"));
const Five = React.lazy(() => import("pages/Five"));
const Page12 = React.lazy(() => import("pages/Page12"));
const Page11 = React.lazy(() => import("pages/Page11"));
const Four = React.lazy(() => import("pages/Four"));
const Three1 = React.lazy(() => import("pages/Three1"));
const Page10 = React.lazy(() => import("pages/Page10"));
const Page9 = React.lazy(() => import("pages/Page9"));
const Page8 = React.lazy(() => import("pages/Page8"));
const Two1 = React.lazy(() => import("pages/Two1"));
const One1 = React.lazy(() => import("pages/One1"));
const Page7 = React.lazy(() => import("pages/Page7"));
const Three = React.lazy(() => import("pages/Three"));
const Page6 = React.lazy(() => import("pages/Page6"));
const Page5 = React.lazy(() => import("pages/Page5"));
const Page4 = React.lazy(() => import("pages/Page4"));
const Page3 = React.lazy(() => import("pages/Page3"));
const Two = React.lazy(() => import("pages/Two"));
const One = React.lazy(() => import("pages/One"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Page1 = React.lazy(() => import("pages/Page1"));
const Page = React.lazy(() => import("pages/Page"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/three" element={<Three />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/one1" element={<One1 />} />
          <Route path="/two1" element={<Two1 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/three1" element={<Three1 />} />
          <Route path="/four" element={<Four />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/five" element={<Five />} />
          <Route path="/six" element={<Six />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/frame1171276108" element={<Frame1171276108 />} />
          <Route path="/four1" element={<Four1 />} />
          <Route path="/five1" element={<Five1 />} />
          <Route path="/six1" element={<Six1 />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/one2" element={<One2 />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/one3" element={<One3 />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/page14" element={<Page14 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/ten" element={<Ten />} />
          <Route path="/seven1" element={<Seven1 />} />
          <Route path="/page16" element={<Page16 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
