interface Props {
    title: string;
    iconSrc: string;
    value: string;
    borderColor: string;
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor}: Props) => {
  return (
    <div className={`price-infor_card border-1-[${borderColor}]`}>
        <p className="text-base text-black-100">{title}</p>
        <div></div>
    </div>
  )
}

export default PriceInfoCard