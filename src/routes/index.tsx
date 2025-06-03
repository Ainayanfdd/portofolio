import { ElementType, lazy, Suspense, useEffect } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// layouts
import MainLayout from "src/layouts/MainLayout";

// components
import FallbackLoader from "src/components/animations/FallbackLoader";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<FallbackLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages
const LandingPage = Loadable(lazy(() => import("src/pages/LandingPage")));
const AboutPage = Loadable(lazy(() => import("src/pages/AboutPage")));
const SkillsPage = Loadable(lazy(() => import("src/pages/SkillsPage")));
// const ProjectsPage = Loadable(lazy(() => import("src/pages/ProjectsPage")));
const PortofolioPage = Loadable(lazy(() => import("src/pages/PortofolioPage")));
const ContactPage = Loadable(lazy(() => import("src/pages/ContactPage")));
const PathPage = Loadable(lazy(() => import("src/pages/PathPage")));
const Game = Loadable(lazy(() => import("src/components/Game")));
const ComingSoon = Loadable(lazy(() => import("src/pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("src/pages/Maintenance")));
const Page500 = Loadable(lazy(() => import("src/pages/Page500")));
const NotFound = Loadable(lazy(() => import("src/pages/Page404")));

export default function Routes() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "", element: <LandingPage /> }],
    },
    {
      path: "/about",
      element: <MainLayout />,
      children: [{ path: "", element: <AboutPage /> }],
    },
    {
      path: "/skills",
      element: <MainLayout />,
      children: [{ path: "", element: <SkillsPage /> }],
    },
    // {
    //   path: "/projects",
    //   element: <MainLayout />,
    //   children: [{ path: "", element: <ProjectsPage /> }],
    // },
    {
      path: "/portofolio",
      element: <MainLayout />,
      children: [{ path: "", element: <PortofolioPage /> }],
    },
    {
      path: "/contact",
      element: <MainLayout />,
      children: [{ path: "", element: <ContactPage /> }],
    },
    {
      path: "/path",
      element: <MainLayout />,
      children: [{ path: "", element: <PathPage /> }],
    },
    {
      path: "/game",
      element: <MainLayout />,
      children: [{ path: "", element: <Game /> }],
    },
    {
      path: "*",
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
