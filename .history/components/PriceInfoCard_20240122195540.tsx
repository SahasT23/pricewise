interface Props {
    title: string;
    iconSrc: string;
    value: string;
    borderColor: string;
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor}: Props) => {
  return (
    <div className={`price-infor_card border-1-[${borderColor}]`}>
        <p className="">

        </p>
    </div>
  )
}

export default PriceInfoCard