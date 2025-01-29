import { getPolicies } from "@/lib/data-service";
import React from "react";
import parse from "html-react-parser";
import PlainLayout from "@/components/master/PlainLayout";

const page = async () => {
  const data = await getPolicies("terms");

  return (
    <PlainLayout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card p-4">{parse(data.long_des)}</div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;
