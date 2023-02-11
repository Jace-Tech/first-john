import React, { ComponentType, ReactNode } from "react";
import { ModalGateway } from "react-images";

interface Props {
  children?: ReactNode
}

const FixedModalGateway: React.FC<Props> = ModalGateway as ComponentType<{}> | any

export default FixedModalGateway;