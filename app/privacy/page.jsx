import PlainLayout from "@/components/master/PlainLayout";
import { getPolicies } from "@/lib/data-service";
import React from "react";
import parse from "html-react-parser";

const Privacy = async () => {
  const data = await getPolicies("privacy");

  return (
    <PlainLayout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card p-4">
              <h5>Privacy Policy</h5>
              {parse(data.long_des)}
            </div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Privacy;
