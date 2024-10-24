import SearchHeader from "@/components/SearchHeader";
import "./../globals.css"
import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <div>
      <SearchHeader />
  <Suspense>
      {children}
  </Suspense>
      
    </div>
  );
};

export default layout;
