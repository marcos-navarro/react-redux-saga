import React from "react";
import { User } from "../../store/user/types";
import { connect } from "react-redux";
import * as userActions from "../../store/user/actions";
import { Dispatch, bindActionCreators } from "redux";
import './styles.css';

interface OwnProps {
  user: User;
}

interface DispatchProps {
  removeUser: typeof userActions.removeUser;
}

type Props = OwnProps & DispatchProps;

const CardUser: React.FC<Props> = ({ user, removeUser }) => (
  <li>
    <img src={user.avatar_url} alt="user github" />
    <div>
      <strong>{user.name}</strong>
      <span>{user.location}</span>
      <button onClick={() => removeUser(user.id)}>Remover</button>
    </div>
  </li>
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(userActions, dispatch);

export default connect(null, mapDispatchToProps)(CardUser);
