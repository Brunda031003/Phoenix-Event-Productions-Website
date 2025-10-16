import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl mb-3">404</h1>
        <p className="text-lg opacity-80 mb-6">Page not found</p>
        <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm shadow shadow-primary/30 hover:bg-primary/90 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
