export default function MyCardPreview({cardData}) {
    return (
        <div dangerouslySetInnerHTML={{__html: cardData.description}} />
    )
}