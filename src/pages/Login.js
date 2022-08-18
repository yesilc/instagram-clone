import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Input from "../components/Input"
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setUser } from '../store/auth';
import { useNavigate, useLocation } from "react-router-dom"
import { login } from '../firebase';
import { Formik, Form } from 'formik';
import { LoginSchema } from '../validation/login-schema';

const Login = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const ref = useRef();

    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
            total = images.length,
            current = 0
        const imageSlider = () => {
            images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
            images[current].classList.remove('opacity-0')
            current = current === total - 1 ? 0 : current + 1;
        }
        imageSlider();
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])

    const images = [
        'https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png',
        'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png',
        'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png',
        'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png',
    ]


    const handleSubmit = async (values, actions) => {
        // await login(...values) //values.username , value.password
        await login(values.username, values.password)
        navigate(location.state?.return_url || "/", {
            replace: true
        }) //location'un içerisinde state'imin içerisinde return url varsa return url; yoksa direkt ana dizine yönlendirsin


    }
    return (
        <div className='h-full w-full flex flex-wrap overflow-auto items-center justify-center'>
            <div className='hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]'>
                <div className='w-[250px] h-[538px] absolute top-[27px] right-[18px]' ref={ref}>
                    {images.map((image, key) => (
                        <img key={key} className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={image}></img>
                    ))}
                </div>
            </div>

            <div className='w-[350px] grid gap-y-3'>
                <div className='bg-white border px-[40px] pt-10 pb-6'>
                    <a href="#" className='flex justify-center mb-8'>
                        <img className='h-[51px]' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                    </a>
                    <Formik
                        validationSchema={LoginSchema}
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, isValid, dirty, values }) => (
                            <Form className='grid gap-y-1.5'>
                                {/* <pre>{JSON.stringify(values,null,2)}</pre> */}
                                <pre>{JSON.stringify(isSubmitting)}</pre> {/*isValid formik'ten geliyor*/}
                                <Input name="username" label="Telefon numarası, kullanıcı adı veya e-posta" ></Input>
                                <Input type="password" name="password" label="Şifre" ></Input>
                                <button type='submit'
                                    disabled={!isValid || !dirty}
                                    className='h-[30px] mt-1 rounded bg-blue-500 font-medium text-white text-sm disabled:opacity-50'>
                                    Giriş Yap
                                </button>
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
                            </Form>
                        )}
                    </Formik>

                </div>

                <div className='bg-white border p-4 text-sm text-center'>
                    Hesabın yok mu? <a href="#" className='text-sky-600 font-semibold text-brand'>Kaydol</a>
                </div>
            </div>
        </div>
    )
}

export default Login