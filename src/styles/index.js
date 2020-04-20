import styled from "styled-components";
import tw from "tailwind.macro";

const CommonRoom = styled.main.attrs({
  className: "grid gap-20 col-1-span-2 text-center grid-custom",
})`
  & {
    div.header {
      ${tw`flex justify-center items-center text-6xl`}
      & {
        h1 {
          ${tw`flex justify-center items-center`}
        }}}
    div.housePoints {
      ${tw`flex flex-col justify-start items-center bg-no-repeat bg-cover text-center`}
      & {
        .overlay {
          ${tw`w-full h-full`}
        }
        & {
        h2 {
          ${tw`text-6xl`}
        }}}}}
`;

const HouseRoster = styled.ul.attrs({
  className: "text-center"
})`
  & {
    li {
      ${tw``}
    }
  }
`;

export { CommonRoom, HouseRoster };
// export default StyledForm;