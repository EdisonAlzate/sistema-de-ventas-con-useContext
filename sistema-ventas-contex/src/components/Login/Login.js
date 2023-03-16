import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { ConsumerUsuario } from "../../contexts/global";
import { useNavigate } from "react-router-dom";

//ant-d
import {
    UserOutlined,
    LockOutlined,
    ExclamationCircleFilled,
} from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";

import { users } from "../../api";




export const Login = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const { user, setUser } = useContext(ConsumerUsuario);
    const navigate = useNavigate();
    const { confirm } = Modal;

    const showConfirm = () => {
        confirm({
            title: "Email o password incorrectos",
            icon: <ExclamationCircleFilled />,
            content: "¡Intenta de nuevo!",
            onOk() { },
        });
    };

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
        if (user && user.email) {
            navigate("/home");
        }
    }, []);


    const onFinish = (values) => {
        //si es usuario se encuetra en DB api, dejelo ingresar al sistema de ventas
        let validation = users.find(
            (user) => user.email === values.email && user.password === values.password
        );
        if (validation) {
            setUser({ ...values });
            navigate("home");
        } else {
            showConfirm();
        }
    };



    return (
        <div className="App">
            <header className="App-header">

                <Form
                    form={form}
                    name="horizontal_login"
                    layout="inline"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Por favor ingresa su email!'
                        }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Por favor ingresa su password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>



                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ color: "white" }}
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length)
                                        .length
                                }
                            >
                                Ingresar
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </header>
        </div>
    )
}
