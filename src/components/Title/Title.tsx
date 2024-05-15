interface TitleProps {
  title: string
}

const Title = ({title}: TitleProps) => {
  return (
    <>
     
        <div className=" border-rose inline-block border-b-[16px] px-[24px] leading-[1rem] w-[6.8rem] md:w-32">
          
          <h1 className="text-[2.4rem] md:text-[2.6rem] lg:text-[2.8rem] font-extrabold  ml-2 md:ml-6 text-slate-200  ">
            {title}
          </h1>
        </div>
   
    </>
  );
};

export default Title;
