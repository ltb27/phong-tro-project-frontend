import {Avatar, Button, Dropdown, Flex, Image} from "antd";
import logo from "@/assets/logo-removebg.png";
import {CustomAnchor, PublicFilterBar} from "@/components";
import {CiFolderOn, CiHeart} from "react-icons/ci";
import {TbCaretDown} from "react-icons/tb";
import {FaRegEdit} from "react-icons/fa";


export default function Header() {
    const menuItems = [
        {key: "1", label: "Đăng nhập", onClick: () => console.log("1")},
        {key: "2", label: "Đăng ký", onClick: () => console.log("2")},
    ];

    return (
        <Flex justify={"space-between"} align={"center"} gap={30}
              className="container max-w-container-xxl h-15 border-b-2 border-gray-100 border-solid">
            <Flex justify={"space-between"} align={"center"} gap={30}>
                <Image loading={"lazy"} preview={false} src={logo} alt="logo" width={190} height={60}
                       style={{objectFit: "contain"}}/>
                <PublicFilterBar style={{width: "350px"}}/>
            </Flex>
            <Flex justify={"end"} align={"center"} gap={12}>
                <CustomAnchor>
                    <CiHeart/>
                    <span className="text-sm">Tập tin đã lưu</span>
                </CustomAnchor>
                <CustomAnchor>
                    <CiFolderOn/>
                    <span className="text-sm">Quản lý</span>
                </CustomAnchor>
                <Flex className={"cursor-pointer"} justify={"start"} align={"center"} gap={6}>
                    <Avatar size={36} src={"https://avatars.githubusercontent.com/u/10198965?v=4"}/>
                    <Flex justify={"start"} align={"center"} gap={4}>
                        <Dropdown menu={{items: menuItems}} trigger={["click"]} placement={"bottomRight"}
                                  overlayClassName={"bg-white"}
                                  arrow={{
                                      pointAtCenter: true
                                  }}
                        >
                            <a className="text-sm">Tài khoản</a>
                        </Dropdown>
                        <TbCaretDown size={16}/>
                    </Flex>
                </Flex>
                <Button type="primary" className="rounded-2xl" icon={<FaRegEdit/>} iconPosition={"start"}>
                    Đăng tin
                </Button>
            </Flex>
        </Flex>
    )
}