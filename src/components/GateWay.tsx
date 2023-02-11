import React, { ReactNode } from "react";
import { ModalGateway } from "react-images";

interface Props {
  children: ReactNode
}

const FixedModalGateway: React.FC<Props> = ModalGateway;

export default FixedModalGateway;