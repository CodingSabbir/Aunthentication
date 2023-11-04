import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.Config';
const GoogleSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>User already  logged in with username</p>
          </div>
        );
      }

    return (
        <div className='border-2 p-1 rounded-md text-center flex justify-center items-center gap-10 border-black'>
            <div><FcGoogle/></div>
            <button type='submit' onClick={() => signInWithGoogle()}> Continue With Google  </button>
        </div>
    );
};

export default GoogleSignUp;