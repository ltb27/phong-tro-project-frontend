import {Flex} from "antd";

export default function CustomAnchor(props) {
    return (
        <Flex justify={"start"} align={"center"} gap={8}
              className="cursor-pointer bg-transparent rounded-2xl border-2 border-gray-300 py-2 px-3 hover:bg-gray-100 border-none"
              {...props}>
            {props.children}
        </Flex>
    )
}