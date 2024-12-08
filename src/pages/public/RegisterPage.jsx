import {Button, Flex, Form, Input, Radio} from "antd";
import React from "react";

export default function RegisterPage() {
    function handleOnFinish() {
        console.log('Success:');
    }

    const [form] = Form.useForm();

    return (
        <Form form={form} onFinish={handleOnFinish} className={"w-full"} layout="vertical" name="basic"
              initialValues={{remember: true}}>
            <Form.Item
                label="Họ và tên"
                name="name"
                rules={[{required: true, message: 'Họ và tên là bắt buộc'}]}
            >
                <Input size={"large"}/>
            </Form.Item>
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
            <Form.Item initialValue={"search"} name="accountType">
                <Flex justify={"start"} align={"center"} gap={16}>
                    <strong>Loại tài khoản</strong>
                    <Radio.Group>
                        <Radio value="search">Tìm kiếm</Radio>
                        <Radio value="owner">Chính chủ</Radio>
                        <Radio value="broker">Môi giới</Radio>
                    </Radio.Group>
                </Flex>
            </Form.Item>
            <Form.Item>
                <Button size={"large"} className={"w-full"} type="primary" onClick={form.submit}>Tạo tài khoản</Button>
            </Form.Item>
        </Form>
    )
}