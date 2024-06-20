import { useUpdateInput } from "../custom_hooks/useUpdateInput";

export function UserLogin() {
  const { user, toChangeUser } = useUpdateInput();

  return (
    <div className="login">
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={toChangeUser}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={toChangeUser}
        />
      </form>
      <pre>
        username: <span>{user.username}</span> <br />
        password: <span>{user.password}</span>
      </pre>
    </div>
  );
}
