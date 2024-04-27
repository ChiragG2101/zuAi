import React from "react";

const page = ({ params }: { params: { route: string } }) => {
  return (
    <div className="text-3xl w-full h-[80dvh] text-center capitalize flex items-center justify-center">
      {params.route}
    </div>
  );
};

export default page;
