import { useEffect } from "react"
import { useGithubUser } from "../custom_hooks/useGithubUser"

export function GithubUser({username}) {
  const {data, error, loading, onFetchUser} = useGithubUser(username)

  useEffect(() => {
    onFetchUser(username)
  }, [username])
  
  return (
    <li className="card">
    {loading && <h3 className="orange">Now Loading....</h3>}
    {error && <h3 className="red">{error.message}</h3>}
    {data && !error && (
      <div>
        <img src={data.avatar_url} alt="user avatar" />
        <h3 className="violet">{data.name}</h3>
        <p>{data.login}</p>
      </div>
    )}
    </li>
  )
}