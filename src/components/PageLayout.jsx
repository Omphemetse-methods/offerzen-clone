import React from "react";

const PageLayout = ({ children }) => {
  return (
    <section className="flex justify-center pt-8">
      <div className="w-8/12 space-y-8">{children}</div>
    </section>
  );
};

export default PageLayout;
