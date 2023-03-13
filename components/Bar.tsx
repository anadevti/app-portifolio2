import React, {FunctionComponent} from "react";
import {ISkill} from "../type";
import {motion} from "framer-motion";

const Bar: FunctionComponent<{ data: ISkill }> = ({data:{Icon, level, name},}) => {
    return (
        <div className=" my-4 text-white bg-gray-700 rounded-full">
            <motion.div className="flex font-roboto items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-600 to-purple-500"
                        style={{width:level}}
                        initial={{width:0}}
                        animate={{
                            width: level,
                            transition: {duration:0.4, type: "spring", damping: 10, stiffness: 100}
                        }}
            >
                <Icon className="mr-3" />
                {name}
            </motion.div>
        </div>
    )

}

export default Bar