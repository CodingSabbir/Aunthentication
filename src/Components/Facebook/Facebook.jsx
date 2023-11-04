import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.Config';

const Facebook = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    // console.log(user)
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
            <div><ImFacebook2/></div>
            <button type='submit' onClick={() => signInWithFacebook()}> Continue With Facebook  </button>
        </div>
    );
};

export default Facebook;