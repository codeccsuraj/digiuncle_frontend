import React from 'react'
import { RiTodoLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoIosNotifications, IoMdCall } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { FaRegUser, FaPowerOff, FaAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";




const UserProfile = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className='col-lg h-[50vh]'>
                            <div className="col-lg flex bg-gradient-pink justify-center relative py-2">
                                <div className="profil_img col-lg-3 relative">
                                    <img src="https://shorturl.at/juAC9" alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-8 py-3 absolute bottom-0 bg-slate-400 translate-y-20 px-2">
                                    <div className="row items-center">
                                        <div className="col-lg-3">
                                            <Link className="box flex flex-col justify-center items-center border-2 border-white rounded-lg p-2">
                                                <RiTodoLine className='text-3xl text-white' />
                                                <span className='font-semibold text-white'>Orders</span>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link className="box flex flex-col justify-center items-center border-2 border-white rounded-lg p-2">
                                                <IoIosNotifications className='text-3xl text-white' />
                                                <span className='font-semibold text-white'>Notification</span>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link className="box flex flex-col justify-center items-center border-2 border-white rounded-lg p-2">
                                                <MdLocalOffer className='text-3xl text-white' />
                                                <span className='font-semibold text-white'>Coupon</span>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link className="box flex flex-col justify-center items-center border-2 border-white rounded-lg p-2">
                                                <IoChatboxEllipses className='text-3xl text-white' />
                                                <span className='font-semibold text-white'>Chats</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg'>
                            <Link className="row items-center py-4 bg-slate-50">
                                <div className='col-3 text-2xl'>
                                  <FaRegUser />  
                                </div>
                                <div className='col-lg flex justify-between items-center'>
                                    <h4 className='h5'>My profile</h4>
                                    <FaChevronRight />
                                </div>
                            </Link>
                            <Link className="row items-center py-4 bg-slate-50">
                                <div className='col-3 text-2xl'>
                                  <IoMdCall />  
                                </div>
                                <div className='col-lg flex justify-between items-center'>
                                    <h4 className='h5'>Mobile</h4>
                                    <FaChevronRight />
                                </div>
                            </Link>
                            <Link className="row items-center py-4 bg-slate-50">
                                <div className='col-3 text-2xl'>
                                  <MdOutlineMail />  
                                </div>
                                <div className='col-lg flex justify-between items-center'>
                                    <h4 className='h5'>Email</h4>
                                    <FaChevronRight />
                                </div>
                            </Link>
                            <Link className="row items-center py-4 bg-slate-50">
                                <div className='col-3 text-2xl'>
                                  <FaAddressCard />  
                                </div>
                                <div className='col-lg flex justify-between items-center'>
                                    <h4 className='h5'>Address</h4>
                                    <FaChevronRight />
                                </div>
                            </Link>
                            <Link className="row items-center py-4 bg-slate-50">
                                <div className='col-3 text-2xl'>
                                  <FaPowerOff />  
                                </div>
                                <div className='col-lg flex justify-between items-center'>
                                    <h4 className='h5'>Logout</h4>
                                    <FaChevronRight />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className='py-2 text-primary'>Help</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile