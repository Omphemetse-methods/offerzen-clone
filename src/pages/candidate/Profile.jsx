import React from "react";
import PageLayout from "../../components/PageLayout";

const ProfileSectionContainer = ({ children, header, completed }) => {
  return (
    <section className="bg-white px-4 py-6 space-y-4">
      <div className="border-b-2 pb-4 flex justify-between items--center">
        <p>{header}</p>
        {completed ? <p>completed icon</p> : <p />}
      </div>
      <div className="">{children}</div>
    </section>
  );
};

const Profile = (props) => {
  return (
    <PageLayout>
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-8">
          <section className="border-2 border-gray-400 p-2 flex space-x-2 bg-gray-200">
            <p>Bell Icon</p>
            <p>
              Your profile is currently uneditable. Please get in touch with
              your talent advisor if you would like to make changes.
            </p>
          </section>

          <ProfileSectionContainer
            header="Personal information"
            completed={true}
          >
            <div className="flex space-x-4">
              <p className="w-28 h-28 bg-gray-300" />
              <section>
                <p>Omphemetse Mohorotshe</p>
                <p>Rustenburg, South Africa</p>
                <p>065 8100 630</p>
              </section>
            </div>
          </ProfileSectionContainer>

          <ProfileSectionContainer
            header="Preferred employment type and salary"
            completed={true}
          >
            <section className="flex space-x-2">
              <p>Icon 1</p>
              <p>Interested in permanent work</p>
            </section>
            <section className="flex space-x-2">
              <p>Icon 2</p>
              <div>
                <p>Preferred salary</p>
                <section>
                  <p>South Africa</p>
                  <p>Preferred salary of R30,000/month</p>
                </section>
                <section>
                  <p>EU</p>
                  <p>Preferred salary of E23,000/year</p>
                </section>
              </div>
            </section>
          </ProfileSectionContainer>

          <ProfileSectionContainer header="Preferred location" completed={true}>
            <section className="flex space-x-2">
              <p>Icon 1</p>
              <div>
                <p>South Africa</p>
                <p>Cape Town</p>
                <p>Atlantic SeaboardCape Town City BowlCentury City4 more</p>
                <p>Johannesburg</p>
                <p>BraamfonteinBryanstonEast Rand6 more</p>
              </div>
            </section>
            <section className="flex space-x-2">
              <p>Icon 2</p>
              <div>
                <p>Germany</p>
                <p>Berlin</p>
              </div>
            </section>
            <section className="flex space-x-2">
              <p>Icon 3</p>
              <div>
                <p>Remote</p>
              </div>
            </section>
          </ProfileSectionContainer>
        </div>

        <div className="col-span-4">
          <section className="p-4 bg-white">
            <p>
              You are able to continue talking to companies you have received
              interview requests from, however you won't be able to speak to new
              companies.
            </p>
          </section>
        </div>
      </section>
    </PageLayout>
  );
};

export default Profile;
