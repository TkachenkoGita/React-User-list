import styles from "./user.module.css";
import { FaTrashAlt } from "react-icons/fa";

function UserListItem(props) {
  const { userEl: u, index, removeUser, selectedUser } = props;

  const itemSwitcher = {
    backgroundColor: u.isSelected ? "Magenta" : "MediumPurple",
  };
  return (
    <li
      style={itemSwitcher}
      className={styles.userConteiner}
      onClickCapture={() => selectedUser(index)}
      key={u.id}
    >
      <p className={styles.userImg}>
        <img src={u.avatar} alt={`${u.first_name} ${u.last_name}`} />
      </p>
      <div className={styles.userInfo}>
      <p >
        {u.first_name} {u.last_name}
      </p>
      <p className={styles.userEmail}>{u.email}</p>
      </div>
      

      <button className={styles.userTrashBatton} onClick={() => removeUser(index)} >
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default UserListItem;
