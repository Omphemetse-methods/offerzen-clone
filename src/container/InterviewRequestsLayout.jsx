import React from "react";
import { Outlet, useLocation, useParams, Link } from "react-router-dom";

const InterviewRequestsLayout = (props) => {
  let location = useLocation();
  let params = useParams();

  return (
    <section>
      <section className="flex justify-center border-b-2 bg-white">
        <div className="w-8/12 flex justify-between items-center py-4">
          {params.interview_request_id ? (
            <section className="flex items-center">
              <Link to="" className="text-indigo-600">
                Interviews
              </Link>
              <p>{">"}</p>
              <>
                {location.pathname.includes("talent_advisor") ? (
                  <section className="flex">
                    <Link
                      to="620a0422638cbb0008f83bef"
                      className="text-indigo-600"
                    >
                      A24 Group
                    </Link>
                    <p>{">"}</p>
                    <p>Talent Advisor</p>
                  </section>
                ) : (
                  <p>A24 Group</p>
                )}
              </>
            </section>
          ) : (
            <p>Open interviews</p>
          )}

          <section className="flex">
            <button className="border-2 px-6 py-1">Open</button>
            <button className="border-2 px-6 py-1">Archived</button>
          </section>
        </div>
      </section>

      <section className="">
        <Outlet />
      </section>
    </section>
  );
};

export default InterviewRequestsLayout;
