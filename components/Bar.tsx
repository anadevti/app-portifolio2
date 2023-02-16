import React, {FunctionComponent} from "react";
import {ISkill} from "../type";

const Bar: FunctionComponent<{
    data: ISkill,
}> = ({data:{Icon, level, name},}) => {
    return (
        <div className=" my-4 text-white bg-gray-700 rounded-full">
            <div className="flex  items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-600 to-purple-500"
            style={{width:level}}>
                <Icon className="mr-3" />
                {name}
            </div>
        </div>
    )

}

export default Bar