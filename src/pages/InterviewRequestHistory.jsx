import React from "react";
import { useNavigate } from "react-router-dom";

const InterviewRequestsHistory = (props) => {
  let navigate = useNavigate();

  return (
    <section className="grid grid-cols-12 pt-8">
      <div className="col-start-3 col-end-13 grid grid-cols-12 gap-6">
        <section className="col-span-8 space-y-8">
          <div className="p-4 bg-white">
            <section className="flex items-center space-x-4">
              <p className="h-20 w-20 rounded-full bg-gray-200" />
              <div>
                <p>OfferZen</p>
                <section className="flex space-x-2">
                  <button>View company profile</button>
                  <button>Visit website</button>
                </section>
              </div>
            </section>
            <section>
              <div className="flex space-x-2">
                <p>R30 000</p>
                <p>Frontend Engienner</p>
              </div>
              <p>Job Description</p>
            </section>
          </div>

          <div>
            <textarea rows="4" className="border-2 w-full" type="textarea" />
            <section className="flex justify-end">
              <button className="bg-purple-600 text-white px-8 py-2 rounded-md">
                Send Message
              </button>
            </section>
          </div>

          <div>
            <p>Previous messages</p>
          </div>
        </section>

        <section className="col-span-4 pr-6 space-y-8">
          <div className="border-2">
            <section className="flex space-x-2 p-4">
              <p className="h-6 w-10 bg-gray-300" />
              <div className="space-y-2">
                <p className="border-2 p-4">
                  Hi Omphemetse, how are going with A24 Group?
                </p>
                <section className="flex justify-end">
                  <button
                    onClick={() => navigate(`talent_advisor`)}
                    className="px-4 py-1 bg-purple-400 text-white border-2 rounded-md shadow-md ring-1 ring-indigo-200"
                  >
                    chat
                  </button>
                </section>
              </div>
            </section>
            <section>
              <div className="flex justify-between bg-gray-200 py-2">
                <p>Your status</p>
                <p>Collapse</p>
              </div>
              <form className="p-4">
                <section className="flex space-x-2 items-center">
                  <input type="radio" value=">Accepted interview request" />
                  <label>Accepted interview request</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value="Technical assessment" />
                  <label>Technical assessment</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value=">Interviewing" />
                  <label>Interviewing</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value="Company declined" />
                  <label>Company declined</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value=">Not interested" />
                  <label>Not interested</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value="Company unresponsive" />
                  <label>Company unresponsive</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value=">Received offer from A24 Group" />
                  <label>Received offer from A24 Group</label>
                </section>
                <section className="flex space-x-2 items-center">
                  <input type="radio" value="Hired by A24 Group" />
                  <label>Hired by A24 Group</label>
                </section>
              </form>
            </section>
          </div>

          <div>
            <p>Company overview</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InterviewRequestsHistory;
