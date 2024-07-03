
const SectionName = ({sectionName,w}) => {
    return (
        <div className={`border-2 border-black font-semibold ${w} rounded-[25px] text-center py-2`}>
            {sectionName}
        </div>
    );
};

export default SectionName;