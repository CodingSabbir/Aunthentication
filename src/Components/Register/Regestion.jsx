

// import React, { useState } from 'react'; // Import useState
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.Config';

// const Regestion = () => {
//     const [email, setEmail] = useState(''); // Initialize state for email
//     const [password, setPassword] = useState(''); // Initialize state for password

//     const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//     const handleCreateAccount = async () => {
//         const userCredential = await createUserWithEmailAndPassword(email, password);
//         const user = userCredential.user;
//         console.log('User created:', user);
//         // You can navigate to a new page or perform other actions here on successful registration.
//     };

//     return (
//         <div class="container mx-auto mt-10 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//             <form class="space-y-6" action="#">
//                 <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
//                 <div>
//                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                     <input
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)} // Handle email input
//                         type="email"
//                         name="email"
//                         id="email"
//                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                         placeholder="name@company.com"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//                     <input
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} // Handle password input
//                         type="password"
//                         name="password"
//                         id="password"
//                         placeholder="••••••••"
//                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                         required
//                     />
//                 </div>
                
//                 <button onClick={handleCreateAccount} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">Create account</button>
//             </form>
//         </div>
//     );
// };

// export default Regestion;



import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.Config';
import { NavLink } from 'react-router-dom';
import GoogleSignUp from '../GoogleSignUp/GoogleSignUp';
import Facebook from '../Facebook/Facebook';


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const messageDiv=document.querySelector('.messageDiv')

  const [createUserWithEmailAndPassword ,   user,   loading,    error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true} );
  if (error) {
    messageDiv.innerHTML=error
  }
  if (loading) {
    messageDiv.innerHTML='Loading...';
  }
  if (user) {
    messageDiv.innerHTML='User already  logged in with username'
  }
 


  return (
    <>
      <div className="container mx-auto mt-5 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Reg in to our platform</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          
          <div className='messageDiv'></div>
          <NavLink  to={'/signin'}>
        <a href="#" class="block py-2 pl-3 pr-4  text-blue-700 rounded md:bg-transparent md:p-0 " aria-current="page"> Sign in </a>
        </NavLink>
          <button
            onClick={()=> createUserWithEmailAndPassword(email, password)}
            type="button"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create account
          </button>
         
         
            
           <div className='flex justify-center gap-3'>
            <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
            <p className='font-mono font-semibold'>Or</p>
            <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
           </div>
          
          <GoogleSignUp/>
          <Facebook/>
        </form>
      </div>
    </>
  );
};

export default Registration;

