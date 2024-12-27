import React from 'react'
import Signup from './Signup';
import Login from './Login';

const UserModal = () => {
    const [isAlreadyAccount, setIsAlreadyAccount] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(true);
    const [openSignup, setOpenSignup] = React.useState(true);
    const [anchorText, setAnchorText] = React.useState('Already have a account? Login');

    const loginOpener = () =>{
        setOpenLogin(!openLogin);
        setAnchorText('Already have a account? Login');
        
        setIsAlreadyAccount(false)
    }

    const signupOpener = () =>{
        setOpenSignup(!openSignup);
        setAnchorText('new user? Signup');
        setIsAlreadyAccount(true)
    }
    return (
        
        <div className='dropdown-menu absolute right-0 z-10  my-2'>
            <div class="bg-dark-100 text-gray-700 flex items-center justify-center">
                {
                    isAlreadyAccount ? (
                        <><div class="w-full max-w-md p-8 space-y-6 bg-dark-200 rounded-lg shadow-xl">
                              <Signup/>
                            <p class="text-center text-sm">
                                <a  class="text-amber-400 hover:underline cursor-pointer" onClick={loginOpener}>{anchorText}</a>
                            </p>
                            </div>
                        </>
                    ) : (
                        <><div class="w-full max-w-md p-8 space-y-6 bg-dark-200 rounded-lg shadow-xl">
                            <Login/>
                            <p class="text-center text-sm">
                                <a  class="text-amber-400 hover:underline cursor-pointer" onClick={signupOpener}>{anchorText}</a>
                            </p>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default UserModal