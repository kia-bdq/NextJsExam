import axios from "axios";
import { IUser } from "../types/user";
// you don't need anything else to import

interface Props {
  // TODO: add user type
  users : IUser[];
}
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default function AxiosTest({ props }: Props) {
  // TODO: once you get data map through data and show them name
  return <div>
          {props.users.map((user : IUser) => (<p key={user.name}>{user.name}</p>))}
        </div>;
}

// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side 
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios

export async function getServerSideProps() {
  try {
    const res = await instance.get('/users');
    const props : Props = { users: res.data }
    return { props: { props } }
  } 
  catch (error) {
  }
}

