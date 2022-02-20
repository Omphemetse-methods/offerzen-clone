import React from "react";

const Dashboard = (props) => {
  return (
    <section className="w-full">
      <section className="flex flex-col items-center bg-white space-y-1 shadow-md py-6">
        <p>svg</p>
        <p className="text-xl">
          Your profile is no longer visible to companies who haven’t reached out
          to you
        </p>
        <p>
          Let us know if you would like to receive interview requests from new
          companies.
        </p>
      </section>
      <section className="flex justify-center border-b-2 border-pink-200  bg-pink-100 py-3">
        <p>🦄 Found a job through OfferZen? Claim your epic swag pack 🦄</p>
      </section>

      <section className="flex justify-center pt-10">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 border-2 border-pink-100 rounded-md shadow p-6 space-y-8 bg-white">
          <section className="flex justify-between">
            <p>Your profile is hidden from companies</p>
            <button className="bg-indigo-500 text-white px-12 py-3">
              Reapply to OfferZen
            </button>
          </section>

          <section className="flex space-x-8">
            <div className="flex flex-col items-center justify-center">
              <p className="w-20 h-20 rounded-full bg-gray-200" />
              <p>Albert</p>
              <p className="text-center text-xs">Talent advisor</p>
            </div>

            <div className="bg-gray-100 p-4 space-y-2">
              <p>Your profile is no longer being shown to companies</p>
              <p>
                Your profile is now hidden from companies which means you will
                no longer receive new interview requests!
              </p>
              <p>
                Don’t worry, you will still be able to continue conversations
                with companies that already sent you interview requests, so
                continue checking in regularly.
              </p>
              <p>
                If you’d like to be introduced to new companies, please click
                the “Reapply to OfferZen
              </p>

              <section className="flex">
                <p>Phone (+27) 061 769 6926</p>
                <p>albert@offerzen.com</p>
              </section>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
