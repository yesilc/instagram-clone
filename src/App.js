import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Input from './components/Input';
import { AiFillFacebook } from "react-icons/ai";

const App = () => {

    const ref = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const enable = username && password

    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
            total = images.length,
            current = 0
        const imageSlider = () => {

            if (current > 0) {
                images[current - 1].classList.add('opacity-0')
            } else {
                images[total - 1].classList.add('opacity-0')
            }

            images[current].classList.remove('opacity-0')

            if (current === total - 1) {
                current = 0
            } else {
                current += 1
            }
        }
        imageSlider();
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])

    return (
        <div className='h-full w-full flex flex-wrap overflow-auto items-center justify-center'>
            <div className='hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]'>
                <div className='w-[250px] h-[538px] absolute top-[27px] right-[18px]' ref={ref}>
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png'></img>
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src='https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png'></img>
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src='https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png'></img>
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src='https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png'></img>
                </div>
            </div>

            <div className='w-[350px] grid gap-y-3'>
                <div className='bg-white border px-[40px] pt-10 pb-6'>
                    <a href="#" className='flex justify-center mb-8'>
                        <img className='h-[51px]' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                    </a>
                    <form className='grid gap-y-1.5'>
                        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Telefon numarası, kullanıcı adı veya e-posta" ></Input>
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Şifre" ></Input>
                        {/* 
                    <label className='block relative'>
                        <input type="text" value={username} onChange={e=>setUsername(e.target.value)} required={true} className="bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer" />
                        <small className='absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5'>Telefon numarası, kullanıcı adı veya e-posta</small>
                    </label>
                    <label className='block relative'>
                        <input type="password" required={true} value={password} onChange={e=>setPassword(e.target.value)} className="bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer" />
                        <small className='absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5'>Şifre</small>
                    </label> 
                    */
                        }
                        <button type='submit' disabled={!enable} className='h-[30px] mt-1 rounded bg-blue-500 font-medium text-white text-sm disabled:opacity-50'>Giriş Yap</button>
                        <div className='flex items-center'>
                            <div className='h-px bg-gray-300 flex-1 my-2.5 mb-3.5' />
                            <span className='px-4 test-[13px] text-gray-500 font-semibold'> YA DA</span>
                            <div className='h-px bg-gray-300 flex-1' />
                        </div>
                        <a href="#" className='flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook mb-2'>
                            <AiFillFacebook size={20}></AiFillFacebook>
                            Facebook ile Giriş Yap
                        </a>
                        <a href="#" className='text-xs flex items-center justify-center text-link'>
                            Şifreni mi unuttun?
                        </a>
                    </form>
                </div>

                <div className='bg-white border p-4 text-sm text-center'>
                    Hesabın yok mu? <a href="#" className='font-semibold text-sky-500 text-brand'>Kaydol</a>
                </div>
            </div>
        </div>
    )
}

export default App