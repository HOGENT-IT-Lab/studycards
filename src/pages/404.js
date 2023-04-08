import { useLocation } from "react-router-dom";

export default function NotFound() {
    const { pathname } = useLocation(); 

    return (
        <div>
          <h1>Page not found</h1>
          <p>There's no page with url: {pathname}, try something different.</p>
        </div>
      );
}