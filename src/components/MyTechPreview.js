export default function MyTechPreview({cardData, setCardData}) {
    return (
        <div dangerouslySetInnerHTML={{__html: cardData.description}} />
    )
}