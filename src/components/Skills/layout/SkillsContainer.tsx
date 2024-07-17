import { ReactElement } from "react"

interface SkillsContainerProps {
    children: ReactElement
}

const SkillsContainer = ({children}: SkillsContainerProps) => {
  return (
    // <ul className="grid grid-cols-6 w-full my-12 gap-y-6 gap-x-7">
    <ul className="grid grid-cols-3 sm:grid-cols-4 w-full my-8 gap-4 sm:gap-6 md:grid-cols-6 md:gap-4 lg:gap-y-6 lg:gap-x-7">
      {children}
    </ul>
  );
}

export default SkillsContainer
