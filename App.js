import UserRegistrationForm from "./UserRegistrationForm";
import UsersList from "./UsersList";

function App() {
  return (
    <>
      <h3>User Registration component</h3>
      <UserRegistrationForm />

      <h3>Users List component</h3>
      <UsersList />
    </>
  );
}

export default App;

// user registration and authentication, image uploads, user profiles, and task management.

// create one component for user registration where first name, last name, email, phone number fields consists.

// create one component for showing the list of user profiles.

// while logging in, call login API and fetch the token and encrypt it and store it in cookies.

// we can use the stored token in cookies for calling userList API.
