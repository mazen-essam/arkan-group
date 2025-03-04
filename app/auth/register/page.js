import Image from "next/image";
import Link from 'next/link';
import ChooseCountry from "./ChooseCountry";

export default function register() {

    return (
        <section className='register' style={{ padding: '10px 0' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', margin: '0 50px',fontSize:'13px' }}>
                <div>
                    <Image
                        src='/logo.png'
                        alt='Logo'
                        width={50}
                        height={50}
                    />
                </div>
                <div className="relative group" style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} >
                    <ChooseCountry />

                </div>
            </nav>
            <div className='registerContent' style={{ width: '30%', fontSize:'13px' ,margin: '40px auto',textAlign:'center' }}>
                <div>
                    <h2>Create Aqar tech Account</h2>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className='options mb-5'>
                    <Link href="/auth/signup">
                        <button className='w-full bg-gray-300 hover:bg-gray-400 text-black font-bold py-5 px-5 rounded focus:outline-none focus:ring-2 focus:ring-gray-300' style={{

                        }}><span><i className="fas fa-envelope" style={{ fontSize: 'large', marginRight: '4px' }}></i></span> Sign up with email</button>
                    </Link>
                    <button className='w-full bg-gray-300 hover:bg-gray-400 text-black font-bold my-3 py-5 px-5 rounded focus:outline-none focus:ring-2 focus:ring-gray-300' style={{

                    }}><span><i style={{ fontSize: 'large', marginRight: '4px' }} className="fab fa-google"></i></span> Sign up with email</button>

                    <button className='w-full bg-gray-300 hover:bg-gray-400 text-black font-bold py-5 px-5 rounded focus:outline-none focus:ring-2 focus:ring-gray-300' style={{

                    }}><span><i style={{ fontSize: 'larger', marginRight: '4px', color: 'blue' }} className="fab fa-facebook"></i></span> Sign up with facebook</button>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ height: '1px', width: '48%', background: 'gray' }}></div>
                        <span style={{ margin: '0 10px', width: '4%', textAlign: 'center', color: 'gray' }}>or</span>
                        <div style={{ height: '1px', width: '48%', background: 'gray' }}></div>
                    </div>
                    <div>
                        <p className='mt-5' style={{ fontWeight: 'bold' }}>Already have Aqar account? <span>
                            <Link href="/auth/signin">
                                <button style={{ cursor: 'pointer', color: 'purple' }}>Log in</button>
                            </Link>
                        </span>
                        </p>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                    <p style={{ fontSize: '14px' }}>
                        By proceeding, you agree to the
                        <span style={{ color: 'purple', cursor: 'pointer' }}> terms and conditions </span>
                        and
                        <span style={{ color: 'purple', cursor: 'pointer' }}> privacy policy</span>.
                    </p>
                </div>
            </div>
        </section >
    )
}
