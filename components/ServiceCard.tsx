import React, {FunctionComponent} from "react";
import {IService} from "../type";

const ServiceCard: FunctionComponent<{
    service: IService,
}> = ({service:{Icon, about, title},
}) => {
    const createMarkup = () => {
        return {
            __html:about
        }
    }
    return (
        <div className="p-2a flex items-center space-x-4 rounded-lg p-4 border-gray-500">
            <Icon className="w-20 h-20 text-orange-500"/>
            <div>
                <h4 className="font-bold text-gray-300">{title}</h4>
                <p className={"font-roboto text-gray-500"} dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )

}

export default ServiceCard