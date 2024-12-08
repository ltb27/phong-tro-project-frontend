import {Button, Form, Input} from "antd";
import React from "react";
import {Link} from "react-router-dom";

export default function LoginPage() {
    function handleOnFinish() {
        console.log('Success:');
    }

    const [form] = Form.useForm();

    return (
        <Form form={form} onFinish={handleOnFinish} className={"w-full"} layout="vertical" name="basic"
              initialValues={{remember: true}}>
            <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[{required: true, message: "Số điện thoại là bắt buộc"}]}
            >
                <Input size={"large"}/>
            </Form.Item>
            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{required: true, message: 'Mật khẩu là bắt buộc'}]}
            >
                <Input.Password size={"large"}/>
            </Form.Item>
            <Form.Item>
                <Link className={"text-sm underline text-blue-500"} to="/auth/forgot-password">
                    Bạn quên mật khẩu?
                </Link>
            </Form.Item>
            <Form.Item>
                <Button size={"large"} className={"w-full"} type="primary" onClick={form.submit}>Đăng nhập</Button>
            </Form.Item>
        </Form>
    )
}