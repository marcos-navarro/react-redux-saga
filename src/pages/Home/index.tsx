import React, { useState, ChangeEvent } from "react";
import { connect } from "react-redux";
import { User } from "../../store/user/types";
import { Dispatch, bindActionCreators } from "redux";
import * as userActions from "../../store/user/actions";
import { ApplicationStates } from "../../store/rootReducer";
import CardUser from "../../components/CardUser";

import "./styles.css";

interface StateProps {
  users: User[];
  loading: boolean;
}

interface DispatchProps {
  addUserRequest: (name: string) => void;
  removeUser: (id: number) => void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const Home: React.FC<Props> = ({ addUserRequest, loading, users }) => {
  const [user, setUser] = useState("");
  function handleInputUserChange(event: ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value);
  }

  function handleAddUser(user:string){
      addUserRequest(user)
      setUser('')
  }

  return (
    <div className="container">
      <div className="search">
        <label htmlFor="user">User Name</label>
        <input
          id="user"
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          value={user}
          onKeyDown={event=>{
            if(event.keyCode===13)
              handleAddUser(user)
          }}
          onChange={handleInputUserChange}
        />
        <button onClick={() => handleAddUser(user)}>Search</button>
      </div>
      {loading &&(<strong>Loading...</strong>)}
      <div className="list-container">
        <ul className="list">
          {users.map((user) => (
            <CardUser key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ApplicationStates) => ({
  users: state.user.users,
  loading: state.user.loading,
});

const dipatchMapToProps = (dispatch: Dispatch) =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, dipatchMapToProps)(Home);
