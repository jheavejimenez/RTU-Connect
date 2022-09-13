import React from 'react'
import Profile from '../../icons/profile-icon.png'
function Post() {
  return (
      <div className="mx-auto shadow-md bg-white text-gray-400 rounded-md mb-14 w-2/5  ">
        
            <div className="flex flex-col">
                <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                    <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" ><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            className="rounded-full"
                            width={40}
                            height={40}
                            alt=""
                            src={Profile}
                        />
                        <div>
                            <p>Saheel</p>
                            <p className="text-xs text-gray-400">9th Feb 2022</p>
                            
                        </div>
                        
                    </div>
                    
                    <p className="pt-4">Lets Meet Soon!</p>
                    

                </div>
                <div className="relative h-56 w-30 md:96 bg-white">
                    <img src="" style={{ objectFit: "cover" }} />
                </div>
                {/* Footer section of post */}
                <div className="flex justify-between items-center rounded-b-2xl shadow-md bg-white text-gray-400 border-t">
                    <div className="inputIcon rounded-none rounded-bl-2xl">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.875 0.5H3.125C1.40137 0.5 0 1.90137 0 3.625V17.6875C0 19.4111 1.40137 20.8125 3.125 20.8125H7.8125V24.9141C7.8125 25.3926 8.35938 25.6709 8.74512 25.3877L14.8438 20.8125H21.875C23.5986 20.8125 25 19.4111 25 17.6875V3.625C25 1.90137 23.5986 0.5 21.875 0.5Z" fill="#C3C3C3"/>
                        </svg>
                    </div>
                    <div className="inputIcon rounded-none">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5943 8.20683L16.0003 0.785689C15.2481 0.13603 14.0625 0.663423 14.0625 1.6726V5.58144C6.21929 5.67124 0 7.24316 0 14.6761C0 17.6761 1.93267 20.6482 4.06899 22.202C4.73564 22.687 5.68574 22.0784 5.43994 21.2923C3.22588 14.2116 6.49009 12.3318 14.0625 12.2229V16.5156C14.0625 17.5264 15.249 18.0514 16.0003 17.4025L24.5943 9.98066C25.1349 9.51377 25.1356 8.67436 24.5943 8.20683Z" fill="#C3C3C3"/>
                        </svg>
                    </div>
                    <div className="inputIcon rounded-none rounded-br-2xl">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5738 1.99576C19.8981 -0.284512 15.9186 0.125644 13.4625 2.65982L12.5006 3.65104L11.5387 2.65982C9.08751 0.125644 5.10314 -0.284512 2.42736 1.99576C-0.639049 4.61295 -0.800182 9.31021 1.94396 12.1471L11.3922 21.903C12.0026 22.5329 12.9938 22.5329 13.6041 21.903L23.0524 12.1471C25.8014 9.31021 25.6402 4.61295 22.5738 1.99576Z" fill="#C3C3C3"/>
                        </svg>
                    </div>
                    <div className="inputIcon rounded-none rounded-br-2xl">
                        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.625 22.375V24.3281C15.625 24.9753 15.1003 25.5 14.4531 25.5H1.17188C0.524658 25.5 0 24.9753 0 24.3281V6.35938C0 5.71216 0.524658 5.1875 1.17188 5.1875H4.6875V19.6406C4.6875 21.1484 5.91411 22.375 7.42188 22.375H15.625ZM15.625 5.57812V0.5H7.42188C6.77466 0.5 6.25 1.02466 6.25 1.67188V19.6406C6.25 20.2878 6.77466 20.8125 7.42188 20.8125H20.7031C21.3503 20.8125 21.875 20.2878 21.875 19.6406V6.75H16.7969C16.1523 6.75 15.625 6.22266 15.625 5.57812ZM21.5318 4.06304L18.312 0.843213C18.0922 0.623458 17.7941 0.500002 17.4833 0.5L17.1875 0.5V5.1875H21.875V4.89165C21.875 4.58086 21.7515 4.2828 21.5318 4.06304Z" fill="#C3C3C3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Post