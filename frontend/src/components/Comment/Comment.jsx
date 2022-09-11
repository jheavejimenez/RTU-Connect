import React from 'react'
import Button from '../Button/Button'
import Profile from '../../icons/profile-icon.png'


function Comment() {
    return (
        <>
            <div className='border-solid border-2 border-gray-500 rounded-md mb-14 '>
                <div className="flex flex-col">
                    <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                        <div className="flex items-center space-x-2">
                            <img className="rounded-full" width={40} height={40} alt=""src={Profile}/>
                            <div>
                                <p>Saheel</p>
                                <p className="text-xs text-gray-400">9th Feb 2022</p>
                            </div>
                        </div>
                        <p className="pt-4">Lets Meet Soon!</p>
                    </div>
                    <div className="relative h-56 md:96 bg-white">
                        <img src="" style={{ objectFit: "cover" }} />
                    </div>
                    {/* Footer section of post */}
                </div>
            </div>
            <textarea name="Text1" cols="40" rows="5" placeholder="Tell Something Cool!" className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline "></textarea>
            <div className='w-1/5 flex absolute right-0 '>
                <Button text="Comment"/>
            </div>
        </>
      );
    };

export default Comment