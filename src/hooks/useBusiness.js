import { useContext } from "react";
import { BizContext } from "../context/BusinessProvider";

export const useBusiness = () => useContext(BizContext);

export default useBusiness;
