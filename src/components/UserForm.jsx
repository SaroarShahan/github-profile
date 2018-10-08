import React from "react";

const UserForm = props => {
  return (
    <div className="d-flex content-center py-10">
      <form
        onSubmit={props.getUser}
        className="user-form d-flex content-center"
      >
        <input
          className="input-field"
          type="text"
          placeholder="Search user here..."
          name="userName"
        />
        <button type="submit" className="btn btn-primary btn-medium">
          Seach
        </button>
      </form>
    </div>
  );
};

export default UserForm;
