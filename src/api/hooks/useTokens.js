import { useSelector } from "react-redux";

const useTokens = () => {
  const tokens = useSelector((state) => state.tokens.tokens);
  return { tokens };
};

export default useTokens;
