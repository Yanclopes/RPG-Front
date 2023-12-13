import React from 'react';
import loginStyles from './css/login.module.css';

export default function Login() {
    return (
        <div className={loginStyles.container} data-role='login'>
            <div className={loginStyles.login} data-role='login'>
                <div data-role='login' className='gap-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Digite seu email'/>
                </div>
                <div data-role='login' className='gap-2'>
                    <label htmlFor='senha'>Senha</label>
                    <input type='password' id='senha' name='senha' placeholder='Digite sua senha'/>
                </div>
                <div className={`gap-2 ${loginStyles.button}`}>
                    <button>Entrar</button>
                    <button>Criar conta</button>
                </div>
            </div>
        </div>
    );
}
