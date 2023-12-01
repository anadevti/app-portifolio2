import React, {FunctionComponent} from "react";
import {ICard} from "../type";
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import {Tooltip} from "flowbite-react";
import Image from "next/image";

const ServiceCard: FunctionComponent<{ card: ICard }> = ({card:{technologies, description, title, link, image},
}) => {
    return (
        <Card className="w-96 bg-gray-800">
            <CardHeader color="orange" className="relative h-56 border border-r-pink-500  border-l-pink-500 border-b-orange-500 border-t-purple-500">
                <Image
                    src={image}
                    fill={true}
                    alt="img-blur-shadow"
                />
            </CardHeader>
            <CardBody className="text-center bg-gray-800">
                <Typography variant="h5" className="mb-2 text-gray-300 font-roboto-moto">
                    {title}
                </Typography>
                <Typography variant="small" className={"text-gray-400 h-16"}>
                        {description}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between py-3 bg-gray-800 text-gray-300 mb-2">
                {
                    technologies.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                        <icon.Icon className={"mr-1"} color={"white"}/>
                    </Tooltip> )
                }
                <a href={link} target="_blank" rel="noreferrer">
                    <Button color={'orange'} key={"gitHub"}>
                        See on GitHub now
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )

}

export default ServiceCard