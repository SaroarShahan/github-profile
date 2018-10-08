import React from "react";

const Profile = props => {
  const data = Object.values(props);

  return (
    <div className="container">
      {data.map(user => {
        return (
          <div className="profile" key={user.id}>
            <div className="profile__img">
              <img
                className="avatar150 avatar-radius"
                src={user.avatar_url}
                alt=""
              />
              <p>
                <span className="font-w700">{user.bio}</span>
              </p>
            </div>
            <div className="profile__author d-flex content-between">
              <div className="profile__author-name">
                <p className="profile__title">
                  <span>Name:</span> {user.name}
                </p>
                <p className="profile__title-sup">
                  <span>Username:</span> {user.login}
                </p>
                <p>
                  <span>Location:</span> {user.location}
                </p>
              </div>
              <div className="profile__author-details">
                <p>
                  <span>Followes:</span> {user.followers}
                </p>
                <p>
                  <span>Following:</span> {user.following}
                </p>
                <p>
                  <span>Public Repository:</span> {user.public_repos}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
