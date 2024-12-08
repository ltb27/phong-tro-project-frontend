import NavigationItem from "@/components/NavigationItem.jsx";
import {useState} from "react";

export default function Navigation() {
    const [active, setActive] = useState(1);

    const items = [
        {key: "1", label: "Phòng trọ"},
        {key: "2", label: "Nhà nguyên căn"},
        {key: "3", label: "Căn hộ chung cư"},
        {key: "4", label: "Căn hộ mini"},
        {key: "5", label: "Căn hộ dịch vụ"},
        {key: "6", label: "Ở ghép"},
        {key: "7", label: "Mặt bằng"},
        {key: "8", label: "Blog"},
        {key: "9", label: "Bảng giá dịch vụ"},
    ];
    console.log(active, "active")
    return (
        <div className="flex justify-start items-center container max-w-container-xl h-10">
            {items.map((item, index) => (
                <NavigationItem className={"cursor-pointer h-full"} active={active === index + 1} onClick={() => {
                    setActive(index + 1)
                }} key={index}>
                    {item.label}
                </NavigationItem>
            ))}
        </div>
    )
}