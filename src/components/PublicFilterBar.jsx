import {Button, Flex} from "antd";
import {FiMapPin} from "react-icons/fi";
import {CiFilter} from "react-icons/ci";

export default function PublicFilterBar(props) {
    return (
        <Flex justify={"space-between"} align={"center"} gap={8} {...props}>
            <Flex gap={8} className={"rounded-2xl bg-gray-100 h-9 px-4 flex-1 cursor-pointer"} justify={"start"}
                  align={"center"}>
                <FiMapPin/>
                <span className="text-sm">Tìm kiếm theo khu vực</span>
            </Flex>
            <Button type={"default"} icon={<CiFilter/>} iconPosition={"start"} className="rounded-2xl border-spacing-1">Bộ
                lọc</Button>
        </Flex>
    )
}