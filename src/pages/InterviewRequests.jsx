import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import interviews from "../mock/interviews";

const InterviewRequests = (props) => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <section className="grid grid-cols-12 pt-8">
      <div className="col-start-3 col-end-13 flex">
        <section className="w-10/12 md:w-8/12">
          <ul className="space-y-8">
            {interviews.map((interview, index) => (
              <li
                className="flex justify-between border-2 p-4 hover:shadow-md hover:bg-gray-100 bg-white cursor-pointer"
                key={`interview-${index}`}
                onClick={() =>
                  navigate(`${location.pathname}/620a0422638cbb0008f83bef`)
                }
              >
                <section className="flex space-x-4">
                  <p className="w-12 h-12 bg-gray-200 border-2"></p>

                  <div className="">
                    <p>{interview.company.name}</p>
                    <p>{interview.role}</p>
                    <p>{interview.last_message}</p>
                  </div>
                </section>
                <p className="">2 days</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-4/12 pl-8 pr-2 space-y-8">
          <div className="border-2 bg-white">
            <section className="flex justify-between border-b-2 px-3 py-1">
              <p>All requests</p>
              <p>8</p>
            </section>
            <section className="flex justify-between border-b-2 px-3 py-1">
              <p>Pending</p>
              <p>0</p>
            </section>
            <section className="flex justify-between border-b-2 px-3 py-1">
              <p>Accepted</p>
              <p>8</p>
            </section>
            <section className="flex justify-between border-b-2 px-3 py-1">
              <p>Declined</p>
              <p>0</p>
            </section>
          </div>

          <div className="p-2 divide-y-2 border-2 space-y-6 bg-white">
            <section>Upcoming interview</section>

            <section className="space-y-4">
              <p className="text-center text-indigo-900">
                Interview with OfferZen
              </p>

              <section className="bg-gray-100 p-3">
                <div className="grid grid-cols-12 gap-2 items-center">
                  <section className="col-span-5 text-xs">Interviewer</section>
                  <section className="col-span-7">Sharon</section>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <section className="col-span-5 text-xs">Type</section>
                  <section className="col-span-7">Phone interview</section>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <section className="col-span-5 text-xs">Date</section>
                  <section className="col-span-7">
                    Monday, 21 February 2022
                  </section>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <section className="col-span-5 text-xs">Time</section>
                  <section className="col-span-7">
                    10:00 -- 10:30 (GMT+02:00)
                  </section>
                </div>
                <div className="grid grid-cols-12 gap-2 items-center">
                  <section className="col-span-5 text-xs">
                    Your phone number
                  </section>
                  <section className="col-span-7">065 8100 630</section>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InterviewRequests;
