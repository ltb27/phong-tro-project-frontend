import {Col, Row, Tabs, Typography} from "antd";
import {Link, Outlet, useLocation} from "react-router-dom";

const {Title} = Typography;


export default function AuthContentLayout(props) {
    const location = useLocation();

    const items = [
        {
            key: "/auth/login",
            label: <Link to="/auth/login">
                <Title style={{marginBottom: 0}} level={4}>
                    Đăng nhập
                </Title>
            </Link>,
        },
        {
            key: "/auth/register",
            label: <Link to="/auth/register">
                <Title style={{marginBottom: 0}} level={4}>
                    Tạo tài khoản mới
                </Title>
            </Link>,
        },
    ];

    return (
        <div className="container my-4 lg:my-12 mx-auto">
            <Row className={"justify-center"}>
                <Col className={"bg-white rounded-2xl"} lg={12} md={20} xs={24}>
                    <div className={"bg-white rounded-2xl p-12  flex flex-col justify-center items-center"}>
                        <Tabs
                            size={"middle"}
                            activeKey={location.pathname}
                            items={items}
                            className={"w-full flex justify-between items-center"}
                        />
                        <Outlet/>
                        <div className="text-sm text-gray-500">
                            Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các <Link
                            className={"underline text-blue-500"}
                            to="/auth/register">quy định
                            sử dụng</Link> và <Link className={"underline text-blue-500"} to="/auth/register">chính sách
                            bảo mật</Link> của chúng tôi.
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}