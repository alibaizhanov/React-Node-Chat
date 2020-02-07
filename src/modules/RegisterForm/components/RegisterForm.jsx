import React, { Component } from 'react';
import {Form,Input,Icon} from 'antd'
import {Link} from 'react-router-dom'

import {Button,Block} from 'components'

export class RegisterForm extends Component {
    render() {
        const success = true;
        return (
            <div>
                <div className='auth__top'>
                    <h2>Регистрация</h2>
                    <p>
                        Для входа в чат, вам нужно зарегистрироваться 
                    </p>
                </div>
                <Block>
                {!success?(<Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback validateStatus="success">
                       
                            <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size = 'large'
                            placeholder="E-Mail"
                            />

                        </Form.Item>
                        <Form.Item>
                        
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size = 'large'
                            type="user"
                            placeholder="Ваше имя"
                            />

                        </Form.Item>
                        <Form.Item>
                        
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size = 'large'
                            type="password"
                            placeholder="Пароль"
                            />

                        </Form.Item>
                        <Form.Item>
                        
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size = 'large'
                            type="password"
                            placeholder="Повторите пароль"
                            />

                        </Form.Item>
                        <Form.Item>
                            
                        <Button type="primary" size = 'large'>
                             Зарегистрироваться
                        </Button>
                        </Form.Item>
                        <Link className ="auth__register-link" to ="/login">
                             Войти в аккаунт
                        </Link>
                </Form>):(<div className='auth__success-block'>
                          <div>
                              <Icon type = 'info-circle' theme = 'twoTone'/>
                          </div>
                            <h2>Потвердите свой аккаунт</h2>
                            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                          </div>)}
                </Block>
            </div>
        );
    }
}

export default RegisterForm;
